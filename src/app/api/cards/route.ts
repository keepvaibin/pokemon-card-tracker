// app/api/cards/route.ts
import { NextResponse } from "next/server";
import { prismaCards } from "@/lib/prismaCards";
import { verifyGoogleIdToken } from "@/lib/auth";
import { serializeCardBasic } from "@/server/services/cards";
import { parseExistenceToggle, ToggleState } from "@/components/helpers/existenceToggles";

type Num = number | undefined;

function toArray(v: string | string[] | null): string[] {
  if (v == null) return [];
  const arr = Array.isArray(v) ? v : [v];
  return arr
    .flatMap((x) => String(x ?? "").split(","))
    .map((s) => s.trim())
    .filter(Boolean);
}

function toNum(v: string | null): Num {
  if (v == null) return undefined;
  const n = Number(v);
  return Number.isFinite(n) ? n : undefined;
}

function getList(url: URL, key: string): string[] {
  // supports key=one,two & key=three AND key[]=x
  const all = url.searchParams.getAll(key).concat(url.searchParams.getAll(`${key}[]`));
  return toArray(all.length ? all : null);
}

/** Accepts baseMin/baseMax, base[min]/base[max], or base=MIN,MAX */
function getRange(url: URL, base: string): { min?: number; max?: number; hasAny: boolean } {
  const min =
    toNum(url.searchParams.get(`${base}Min`)) ??
    toNum(url.searchParams.get(`${base}.min`)) ??
    toNum(url.searchParams.get(`${base}[min]`));
  const max =
    toNum(url.searchParams.get(`${base}Max`)) ??
    toNum(url.searchParams.get(`${base}.max`)) ??
    toNum(url.searchParams.get(`${base}[max]`));

  if (min != null || max != null) return { min: min ?? undefined, max: max ?? undefined, hasAny: true };

  const raw = toArray(url.searchParams.getAll(base));
  const nums = raw.map((n) => Number(n)).filter((n) => Number.isFinite(n)) as number[];
  if (nums.length >= 2) {
    const a = nums[0], b = nums[1];
    return { min: Math.min(a, b), max: Math.max(a, b), hasAny: true };
  }
  if (nums.length === 1) {
    return { min: nums[0], hasAny: true };
  }
  return { hasAny: false };
}

/** legal.standard / legal_standard */
function getLegalList(url: URL, dotKey: string, underscoreKey: string): string[] {
  const a = getList(url, dotKey);
  const b = getList(url, underscoreKey);
  const set = new Set<string>([...a, ...b].map((s) => s.trim().toLowerCase()).filter(Boolean));
  return Array.from(set);
}

// Narrow types we’ll emit for rich fields
type AbilityDTO = { name: string; text: string | null; type: string | null };
type AttackDTO = { name: string; text: string | null; damage: string | null; cost: string[] };

export async function GET(req: Request) {
  const auth = await verifyGoogleIdToken(req.headers.get("authorization") || undefined);
  if (!auth) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const url = new URL(req.url);

  // Pagination
  const page = Math.max(1, Number(url.searchParams.get("page") || 1));
  const pageSize = Math.min(100, Math.max(1, Number(url.searchParams.get("page_size") || 15)));
  const skip = (page - 1) * pageSize;
  const take = pageSize;

  // Optional search fields
  const q = url.searchParams.get("q")?.trim() || undefined; // fuzzy name
  const id = url.searchParams.get("id")?.trim() || undefined;
  const name = url.searchParams.get("name")?.trim() || undefined; // exact
  const level = url.searchParams.get("level")?.trim() || undefined;
  const number = url.searchParams.get("number")?.trim() || undefined;

  // Categorical (from /filters)
  const supertype = getList(url, "supertype");
  const rarity = getList(url, "rarity");
  const setId = getList(url, "setId");
  const setSeries = getList(url, "setSeries");
  const artist = getList(url, "artist");
  const types = getList(url, "types"); // case-insensitive via SQL below
  const subtypes = getList(url, "subtypes");

  // Legalities (values like 'legal', 'banned', lowercased by /filters)
  const legalStandard = getLegalList(url, "legal.standard", "legal_standard");
  const legalExpanded = getLegalList(url, "legal.expanded", "legal_expanded");
  const legalUnlimited = getLegalList(url, "legal.unlimited", "legal_unlimited");

  // Ranges (sliders)
  const hpRange = getRange(url, "hp"); // hpMin/hpMax OR hp[min]/hp[max] OR hp=MIN,MAX
  const retreatRange = getRange(url, "retreat");
  const pokedexRange = getRange(url, "pokedex");
  const avgSellPriceRange = getRange(url, "averageSellPrice");

  // Validate sliders: error if min > max (HP & price per your requirement)
  if (hpRange.min != null && hpRange.max != null && hpRange.min > hpRange.max) {
    return NextResponse.json({ error: "hpMin cannot be greater than hpMax" }, { status: 400 });
  }
  if (avgSellPriceRange.min != null && avgSellPriceRange.max != null && avgSellPriceRange.min > avgSellPriceRange.max) {
    return NextResponse.json(
      { error: "averageSellPriceMin cannot be greater than averageSellPriceMax" },
      { status: 400 }
    );
  }

  // Existence toggles
  const abilityToggle: ToggleState = parseExistenceToggle(url.searchParams.getAll("hasAbility"));
  const attackToggle: ToggleState = parseExistenceToggle(url.searchParams.getAll("hasAttack"));

  // Build Prisma where (for the parts Prisma can handle directly)
  const AND: Record<string, unknown>[] = [];

  if (id) AND.push({ id });
  if (name) AND.push({ name });
  if (q) AND.push({ name: { contains: q, mode: "insensitive" } });
  if (level) AND.push({ level });
  if (number) AND.push({ number });

  if (supertype.length) AND.push({ supertype: { in: supertype } });
  if (rarity.length) AND.push({ rarity: { in: rarity } });
  if (setId.length) AND.push({ setId: { in: setId } });
  if (artist.length) AND.push({ artist: { in: artist } });
  if (setSeries.length) AND.push({ set: { is: { series: { in: setSeries } } } });

  // Existence toggles
  if (abilityToggle === "has") AND.push({ abilities: { some: {} } });
  else if (abilityToggle === "hasNot") AND.push({ abilities: { none: {} } });
  if (attackToggle === "has") AND.push({ attacks: { some: {} } });
  else if (attackToggle === "hasNot") AND.push({ attacks: { none: {} } });

  let requiredIdSet: Set<string> | null = null;
  const intersect = (a: Set<string> | null, b: Set<string>) => {
    if (a == null) return new Set(b);
    const out = new Set<string>();
    for (const id of a) if (b.has(id)) out.add(id);
    return out;
  };

  // Retreat range (derived from length of retreatCost String[])
  if (retreatRange.hasAny) {
    if (retreatRange.min != null && retreatRange.max == null) {
      const exact = retreatRange.min;
      const ids = await prismaCards.$queryRaw<Array<{ id: string }>>`
        SELECT "id"
        FROM "Card"
        WHERE "retreatCost" IS NOT NULL
          AND cardinality("retreatCost") = ${exact}
      `;
      requiredIdSet = intersect(requiredIdSet, new Set(ids.map((r) => r.id)));
    } else if (retreatRange.min != null || retreatRange.max != null) {
      const min = retreatRange.min ?? 0;
      const max = retreatRange.max ?? 1000;
      const ids = await prismaCards.$queryRaw<Array<{ id: string }>>`
        SELECT "id"
        FROM "Card"
        WHERE "retreatCost" IS NOT NULL
          AND cardinality("retreatCost") BETWEEN ${min} AND ${max}
      `;
      requiredIdSet = intersect(requiredIdSet, new Set(ids.map((r) => r.id)));
    }
  }

  // CardMarket.averageSellPrice range (Float?)
  if (avgSellPriceRange.min != null || avgSellPriceRange.max != null) {
    const f: { gte?: number; lte?: number } = {};
    if (avgSellPriceRange.min != null) f.gte = avgSellPriceRange.min;
    if (avgSellPriceRange.max != null) f.lte = avgSellPriceRange.max;
    AND.push({ cardmarket: { is: { averageSellPrice: f } } });
  }

  // ID set intersections (hp, pokedex, legalities, types/subtypes)
  if (hpRange.hasAny) {
    if (hpRange.min != null && hpRange.max == null) {
      const exact = hpRange.min;
      const ids = await prismaCards.$queryRaw<Array<{ id: string }>>`
        SELECT "id"
        FROM "Card"
        WHERE "hp" IS NOT NULL
          AND NULLIF(regexp_replace("hp", '[^0-9]', '', 'g'), '') IS NOT NULL
          AND (NULLIF(regexp_replace("hp", '[^0-9]', '', 'g'), '')::int) = ${exact}
      `;
      requiredIdSet = intersect(requiredIdSet, new Set(ids.map((r) => r.id)));
    } else if (hpRange.min != null || hpRange.max != null) {
      const min = hpRange.min ?? Number.MIN_SAFE_INTEGER;
      const max = hpRange.max ?? Number.MAX_SAFE_INTEGER;
      const ids = await prismaCards.$queryRaw<Array<{ id: string }>>`
        SELECT "id"
        FROM "Card"
        WHERE "hp" IS NOT NULL
          AND NULLIF(regexp_replace("hp", '[^0-9]', '', 'g'), '') IS NOT NULL
          AND (NULLIF(regexp_replace("hp", '[^0-9]', '', 'g'), '')::int) BETWEEN ${min} AND ${max}
      `;
      requiredIdSet = intersect(requiredIdSet, new Set(ids.map((r) => r.id)));
    }
  }

  if (pokedexRange.min != null || pokedexRange.max != null) {
    const min = pokedexRange.min ?? Number.MIN_SAFE_INTEGER;
    const max = pokedexRange.max ?? Number.MAX_SAFE_INTEGER;
    const ids = await prismaCards.$queryRaw<Array<{ id: string }>>`
      SELECT "id"
      FROM "Card"
      WHERE "nationalPokedexNumbers" IS NOT NULL
        AND EXISTS (
          SELECT 1
          FROM unnest("nationalPokedexNumbers") AS n
          WHERE n BETWEEN ${min} AND ${max}
        )
    `;
    requiredIdSet = intersect(requiredIdSet, new Set(ids.map((r) => r.id)));
  }

  async function legalUnionByColumn(col: "standard" | "expanded" | "unlimited", values: string[]) {
    const union = new Set<string>();
    for (const val of values) {
      if (col === "standard") {
        const rows = await prismaCards.$queryRaw<Array<{ cardId: string }>>`
          SELECT "cardId" FROM "CardLegalities" WHERE LOWER("standard") = ${val}
        `;
        rows.forEach((r) => union.add(r.cardId));
      } else if (col === "expanded") {
        const rows = await prismaCards.$queryRaw<Array<{ cardId: string }>>`
          SELECT "cardId" FROM "CardLegalities" WHERE LOWER("expanded") = ${val}
        `;
        rows.forEach((r) => union.add(r.cardId));
      } else {
        const rows = await prismaCards.$queryRaw<Array<{ cardId: string }>>`
          SELECT "cardId" FROM "CardLegalities" WHERE LOWER("unlimited") = ${val}
        `;
        rows.forEach((r) => union.add(r.cardId));
      }
    }
    return union;
  }

  let legSet: Set<string> | null = null;
  if (legalStandard.length) legSet = intersect(legSet, await legalUnionByColumn("standard", legalStandard));
  if (legalExpanded.length) legSet = intersect(legSet, await legalUnionByColumn("expanded", legalExpanded));
  if (legalUnlimited.length) legSet = intersect(legSet, await legalUnionByColumn("unlimited", legalUnlimited));
  if (legSet) {
    if (legSet.size === 0) {
      return NextResponse.json({ page, page_size: pageSize, total: 0, total_pages: 1, cards: [] });
    }
    requiredIdSet = intersect(requiredIdSet, legSet);
  }

  if (types.length) {
    const typesLower = types.map((t) => t.toLowerCase());
    const ids = await prismaCards.$queryRaw<Array<{ id: string }>>`
      SELECT "id"
      FROM "Card"
      WHERE "types" IS NOT NULL
        AND EXISTS (
          SELECT 1
          FROM unnest("types") AS t
          WHERE LOWER(t) = ANY(${typesLower})
        )
    `;
    requiredIdSet = intersect(requiredIdSet, new Set(ids.map((r) => r.id)));
  }

  if (subtypes.length) {
    const subsLower = subtypes.map((s) => s.toLowerCase());
    const ids = await prismaCards.$queryRaw<Array<{ id: string }>>`
      SELECT "id"
      FROM "Card"
      WHERE "subtypes" IS NOT NULL
        AND EXISTS (
          SELECT 1
          FROM unnest("subtypes") AS s
          WHERE LOWER(s) = ANY(${subsLower})
        )
    `;
    requiredIdSet = intersect(requiredIdSet, new Set(ids.map((r) => r.id)));
  }

  if (requiredIdSet) {
    if (requiredIdSet.size === 0) {
      return NextResponse.json({ page, page_size: pageSize, total: 0, total_pages: 1, cards: [] });
    }
    AND.push({ id: { in: Array.from(requiredIdSet) } });
  }

  const where = AND.length ? { AND } : {};

  // Execute
  const [total, items] = await Promise.all([
    prismaCards.card.count({ where }),
    prismaCards.card.findMany({
      where,
      skip,
      take,
      include: {
        images: true,
        cardmarket: true,
        tcgplayer: { include: { prices: true } },
        set: { select: { id: true, name: true, series: true } },
        legalities: true,
        // ⬇️ bring rich fields so the list can prefetch them
        abilities: true,
        attacks: true,
      },
      orderBy: { id: "asc" },
    }),
  ]);

  const total_pages = Math.max(1, Math.ceil(total / pageSize));

  // Keep your existing serializer, then *augment* with the rich fields.
  const cards = items.map((it) => {
    const base = serializeCardBasic(it);

    // Ensure both small & large keys exist to satisfy { small; large } type
    const existingSmall =
      (base as { images?: { small?: string | null } }).images?.small ??
      (it.images?.small ?? null);
    const existingLarge =
      (base as { images?: { large?: string | null } }).images?.large ??
      (it.images?.large ?? null);

    (base as { images?: { small: string | null; large: string | null } }).images = {
      small: existingSmall,
      large: existingLarge,
    };

    // Pass through abilities/attacks in a simple, modal-friendly shape (strictly typed)
    if (Array.isArray(it.abilities) && it.abilities.length > 0) {
      const abilitiesOut: AbilityDTO[] = it.abilities.map((a: {
        name?: string; text?: string | null; type?: string | null;
      }) => ({
        name: a.name ?? "",
        text: a.text ?? null,
        type: a.type ?? null,
      }));
      (base as { abilities?: AbilityDTO[] }).abilities = abilitiesOut;
    }

    if (Array.isArray(it.attacks) && it.attacks.length > 0) {
      const attacksOut: AttackDTO[] = it.attacks.map((a: {
        name?: string; text?: string | null; damage?: string | null; cost?: string[] | null;
      }) => ({
        name: a.name ?? "",
        text: a.text ?? null,
        damage: a.damage ?? null,
        cost: Array.isArray(a.cost) ? a.cost : [],
      }));
      (base as { attacks?: AttackDTO[] }).attacks = attacksOut;
    }

    // If serializeCardBasic doesn’t already include tcgplayer.prices, you can mirror a typed pass-through later.

    return base;
  });

  return NextResponse.json({ page, page_size: pageSize, total, total_pages, cards });
}
