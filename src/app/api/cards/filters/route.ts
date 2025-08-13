// app/api/cards/filters/route.ts
import { NextResponse } from "next/server";
import { prismaCards } from "@/lib/prismaCards";
import { verifyGoogleIdToken } from "@/lib/auth";

const uniqSorted = (arr: (string | number | null | undefined)[]) =>
  Array.from(new Set(arr.filter(Boolean) as (string | number)[])).sort((a, b) =>
    String(a).localeCompare(String(b), undefined, { numeric: true })
  );

const rangePair = (min?: number | null, max?: number | null) =>
  min == null || max == null ? null : [min, max];

export async function GET(req: Request) {
  const auth = await verifyGoogleIdToken(req.headers.get("authorization") || undefined);
  if (!auth) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    // ---------- CATEGORICAL OPTIONS (Card fields) ----------
    const [supertypeRows, rarityRows, setIdRows, artistRows] = await Promise.all([
      prismaCards.card.findMany({ select: { supertype: true }, distinct: ["supertype"] }),
      prismaCards.card.findMany({ select: { rarity: true }, distinct: ["rarity"] }),
      prismaCards.card.findMany({ select: { setId: true }, distinct: ["setId"] }),
      prismaCards.card.findMany({ select: { artist: true }, distinct: ["artist"] }),
    ]);

    // Distinct series comes from CardSet (@@map("CardSet"))
    const setSeriesRows = await prismaCards.cardSet.findMany({
      select: { series: true },
      distinct: ["series"],
    });

    // Distinct types/subtypes from array columns (Card @@map("Card"))
    const [typesRows, subtypesRows] = await Promise.all([
      prismaCards.$queryRaw<Array<{ value: string | null }>>`
        SELECT DISTINCT UNNEST("types") AS value
        FROM "Card"
        WHERE "types" IS NOT NULL
      `,
      prismaCards.$queryRaw<Array<{ value: string | null }>>`
        SELECT DISTINCT UNNEST("subtypes") AS value
        FROM "Card"
        WHERE "subtypes" IS NOT NULL
      `,
    ]);

    const supertype = uniqSorted(supertypeRows.map((r) => r.supertype));
    const rarity = uniqSorted(rarityRows.map((r) => r.rarity));
    const setId = uniqSorted(setIdRows.map((r) => r.setId));
    const setSeries = uniqSorted(setSeriesRows.map((r) => r.series));
    const artist = uniqSorted(artistRows.map((r) => r.artist));
    const types = uniqSorted(typesRows.map((r) => r.value));
    const subtypes = uniqSorted(subtypesRows.map((r) => r.value));

    // ---------- RANGES ----------
    // HP stored as String? -> numeric min/max by stripping non-digits
    const hpAgg = await prismaCards.$queryRaw<
      Array<{ min_hp: number | null; max_hp: number | null }>
    >`
      SELECT
        MIN(NULLIF(regexp_replace("hp", '[^0-9]', '', 'g'), '')::int) AS min_hp,
        MAX(NULLIF(regexp_replace("hp", '[^0-9]', '', 'g'), '')::int) AS max_hp
      FROM "Card"
      WHERE "hp" IS NOT NULL
    `;

    // Retreat is Int? on Card
    const retreatAgg = await prismaCards.card.aggregate({
      _min: { convertedRetreatCost: true },
      _max: { convertedRetreatCost: true },
    });

    // National Pokedex Numbers is Int[] -> global min/max
    const pokedexAgg = await prismaCards.$queryRaw<
      Array<{ min: number | null; max: number | null }>
    >`
      SELECT MIN(val) AS min, MAX(val) AS max
      FROM (
        SELECT UNNEST("nationalPokedexNumbers") AS val
        FROM "Card"
        WHERE "nationalPokedexNumbers" IS NOT NULL
      ) t
    `;
    const pokedex = rangePair(pokedexAgg?.[0]?.min, pokedexAgg?.[0]?.max) ?? null;

    // ---------- CardMarket price ranges (only averageSellPrice kept) ----------
    const cmAgg = await prismaCards.$queryRaw<
      Array<{ min_avg: number | null; max_avg: number | null }>
    >`
      SELECT
        MIN("averageSellPrice") AS min_avg,
        MAX("averageSellPrice") AS max_avg
      FROM "CardMarket"
    `;
    const averageSellPrice = rangePair(cmAgg?.[0]?.min_avg, cmAgg?.[0]?.max_avg) ?? null;

    // ---------- Distinct legality VALUES per format (CardLegalities) ----------
    const legalityVals = await prismaCards.$queryRaw<
      Array<{ standard: string | null; expanded: string | null; unlimited: string | null }>
    >`
      SELECT DISTINCT
        NULLIF(TRIM(LOWER("standard")),  '') AS standard,
        NULLIF(TRIM(LOWER("expanded")),  '') AS expanded,
        NULLIF(TRIM(LOWER("unlimited")), '') AS unlimited
      FROM "CardLegalities"
    `;

    const uniqSortedStr = (xs: (string | null)[]) =>
      Array.from(new Set(xs.filter(Boolean) as string[])).sort((a, b) => a.localeCompare(b));

    const legalities = {
      standard: uniqSortedStr(legalityVals.map((r) => r.standard)),
      expanded: uniqSortedStr(legalityVals.map((r) => r.expanded)),
      unlimited: uniqSortedStr(legalityVals.map((r) => r.unlimited)),
    };

    // ---------- Existence toggles availability (Abilities / Attacks) ----------
    // "has" = at least one such row exists in DB
    // "hasNot" = there exists at least one card lacking such rows
    const [{ anyAbility }] = await prismaCards.$queryRaw<Array<{ anyAbility: boolean }>>`
      SELECT EXISTS (SELECT 1 FROM "Ability") AS "anyAbility"
    `;
    const [{ anyNoAbility }] = await prismaCards.$queryRaw<Array<{ anyNoAbility: boolean }>>`
      SELECT EXISTS (
        SELECT 1
        FROM "Card" c
        WHERE NOT EXISTS (SELECT 1 FROM "Ability" a WHERE a."cardId" = c."id")
        LIMIT 1
      ) AS "anyNoAbility"
    `;

    const [{ anyAttack }] = await prismaCards.$queryRaw<Array<{ anyAttack: boolean }>>`
      SELECT EXISTS (SELECT 1 FROM "Attack") AS "anyAttack"
    `;
    const [{ anyNoAttack }] = await prismaCards.$queryRaw<Array<{ anyNoAttack: boolean }>>`
      SELECT EXISTS (
        SELECT 1
        FROM "Card" c
        WHERE NOT EXISTS (SELECT 1 FROM "Attack" a WHERE a."cardId" = c."id")
        LIMIT 1
      ) AS "anyNoAttack"
    `;

    const hasAbility = { has: anyAbility, hasNot: anyNoAbility };
    const hasAttack = { has: anyAttack, hasNot: anyNoAttack };

    // ---------- Assemble response ----------
    return NextResponse.json({
      // categorical options
      supertype,
      rarity,
      types,
      subtypes,
      setId,
      setSeries,
      artist,
      legalities, // per-format distinct values

      // numeric ranges
      hp: rangePair(hpAgg?.[0]?.min_hp, hpAgg?.[0]?.max_hp),
      retreat: rangePair(
        retreatAgg._min.convertedRetreatCost ?? null,
        retreatAgg._max.convertedRetreatCost ?? null
      ),
      pokedex,
      averageSellPrice,

      // existence toggle availability (client enforces mutual exclusivity)
      hasAbility,
      hasAttack,
    });
  } catch (err: any) {
    console.error("filters endpoint error:", err);
    return NextResponse.json({ error: "Failed to compute filters" }, { status: 500 });
  }
}
