// src/server/services/cards.ts

// Re-export the generated types so other modules can import them from here
export type {
  Card,
  Ability,
  Attack,
  Weakness,
  Resistance,
  CardLegalities,
  CardImages,
  CardMarket,
  TcgPlayer,
  TcgPlayerPrices,
  CardSet,
  SetLegalities,
} from "../../../generated/cards";

/**
 * Narrow input shapes (only fields we touch).
 * NOTE: images.small is allowed to be null to match Prisma payloads.
 */

type BasicIn = {
  id: string;
  name: string;
  supertype?: string | null;
  subtypes?: string[] | null;
  level?: string | null;
  hp?: string | null;
  types?: string[] | null;
  rarity?: string | null;
  artist?: string | null;
  number?: string | null;
  nationalPokedexNumbers?: number[] | null;
  retreatCost?: string[] | null;
  createdAt?: Date | null;

  set?: {
    id?: string | null;
    name?: string | null;
    series?: string | null;
  } | null;

  images?: {
    // Prisma can give null here; we’ll drop images if small is null
    small: string | null;
    large?: string | null;
    // extra fields like id/cardId are fine (structural typing)
  } | null;

  cardmarket?: {
    averageSellPrice?: number | null;
    trendPrice?: number | null;
    lowPrice?: number | null;
  } | null;

  tcgplayer?: {
    prices?: {
      normalMarket?: number | null;
      holofoilMarket?: number | null;
      reverseHolofoilMarket?: number | null;
    } | null;
  } | null;

  abilities?: Array<{ name: string; text?: string | null; type?: string | null }> | null;
  attacks?: Array<{ name: string; text?: string | null; damage?: string | null; cost?: string[] | null }> | null;
};

type FullIn = {
  id: string;
  name: string;
  supertype?: string | null;
  subtypes?: string[] | null;
  level?: string | null;
  hp?: string | null;
  types?: string[] | null;
  evolvesFrom?: string | null;
  evolvesTo?: string[] | null;
  rules?: string[] | null;
  flavorText?: string | null;
  artist?: string | null;
  rarity?: string | null;
  number?: string | null;
  nationalPokedexNumbers?: number[] | null;
  retreatCost?: string[] | null;
  convertedRetreatCost?: number | null;
  createdAt?: Date | null;
  updatedAt?: Date | null;

  set?: {
    id?: string | null;
    name?: string | null;
    series?: string | null;
    printedTotal?: number | null;
    total?: number | null;
    ptcgoCode?: string | null;
    releaseDate?: Date | null;
    updatedAt?: Date | null;
    symbol?: string | null;
    logo?: string | null;
    legalities?: {
      unlimited?: string | null;
      standard?: string | null;
      expanded?: string | null;
    } | null;
  } | null;

  abilities: Array<{ id?: string; name: string; text?: string | null; type?: string | null }> | null;
  attacks: Array<{
    id?: string;
    name: string;
    cost?: string[] | null;
    convertedEnergyCost?: number | null;
    damage?: string | null;
    text?: string | null;
  }> | null;
  weaknesses: Array<{ id?: string; type: string; value: string }> | null;
  resistances: Array<{ id?: string; type: string; value: string }> | null;

  legalities?: {
    unlimited?: string | null;
    standard?: string | null;
    expanded?: string | null;
  } | null;

  images?: {
    small: string | null; // allow null; we’ll drop images if null
    large?: string | null;
  } | null;

  cardmarket?: {
    url?: string | null;
    updatedAt?: Date | null;
    averageSellPrice?: number | null;
    lowPrice?: number | null;
    trendPrice?: number | null;
    germanProLow?: number | null;
    suggestedPrice?: number | null;
    reverseHoloSell?: number | null;
    reverseHoloLow?: number | null;
    reverseHoloTrend?: number | null;
    lowPriceExPlus?: number | null;
    avg1?: number | null;
    avg7?: number | null;
    avg30?: number | null;
    reverseHoloAvg1?: number | null;
    reverseHoloAvg7?: number | null;
    reverseHoloAvg30?: number | null;
  } | null;

  tcgplayer?: {
    url?: string | null;
    updatedAt?: Date | null;
    prices?: {
      normalLow?: number | null;
      normalMid?: number | null;
      normalHigh?: number | null;
      normalMarket?: number | null;
      normalDirectLow?: number | null;

      holofoilLow?: number | null;
      holofoilMid?: number | null;
      holofoilHigh?: number | null;
      holofoilMarket?: number | null;
      holofoilDirectLow?: number | null;

      reverseHolofoilLow?: number | null;
      reverseHolofoilMid?: number | null;
      reverseHolofoilHigh?: number | null;
      reverseHolofoilMarket?: number | null;
      reverseHolofoilDirectLow?: number | null;
    } | null;
  } | null;
};

/**
 * serializeCardBasic
 * Shapes a card for list/browse views and normalizes price/image fields into the shape
 * expected by the client (CardSearchModal & CardDetailModal).
 */
export function serializeCardBasic(c: BasicIn) {
  // Build tcgplayer.prices in the { [variant]: { market, mid, low, high } } shape
  const tcgPriceMap: Record<string, { market?: number; mid?: number; low?: number; high?: number }> = {};
  const tp = c.tcgplayer?.prices;
  if (tp) {
    if (tp.normalMarket != null) tcgPriceMap.normal = { market: tp.normalMarket ?? undefined };
    if (tp.holofoilMarket != null) tcgPriceMap.holofoil = { market: tp.holofoilMarket ?? undefined };
    if (tp.reverseHolofoilMarket != null) tcgPriceMap.reverseHolofoil = { market: tp.reverseHolofoilMarket ?? undefined };
  }

  const images =
    c.images && c.images.small
      ? { small: c.images.small, large: c.images.large ?? undefined }
      : null;

  return {
    id: c.id,
    name: c.name,
    supertype: c.supertype ?? null,
    subtypes: c.subtypes ?? [],
    level: c.level ?? null,
    hp: c.hp ?? null,
    types: c.types ?? [],
    rarity: c.rarity ?? null,
    artist: c.artist ?? null,
    number: c.number ?? null,
    nationalPokedexNumbers: c.nationalPokedexNumbers ?? [],
    retreatCost: c.retreatCost ?? [],
    createdAt: c.createdAt?.toISOString() ?? null,

    set: c.set ? { id: c.set.id ?? undefined, name: c.set.name ?? undefined, series: c.set.series ?? undefined } : null,

    cardmarket: c.cardmarket
      ? {
          averageSellPrice: c.cardmarket.averageSellPrice ?? null,
          trendPrice: c.cardmarket.trendPrice ?? null,
          lowPrice: c.cardmarket.lowPrice ?? null,
        }
      : null,

    tcgplayer: Object.keys(tcgPriceMap).length ? { prices: tcgPriceMap } : null,

    images,

    abilities: Array.isArray(c.abilities)
      ? c.abilities.map(a => ({ name: a.name, text: a.text ?? null, type: a.type ?? null }))
      : undefined,

    attacks: Array.isArray(c.attacks)
      ? c.attacks.map(a => ({
          name: a.name,
          text: a.text ?? null,
          damage: a.damage ?? null,
          cost: Array.isArray(a.cost) ? a.cost : [],
        }))
      : undefined,
  };
}

/**
 * serializeCardFull
 * Shapes a full card detail, keeping broader fields for the detail modal.
 */
export function serializeCardFull(c: FullIn) {
  const images =
    c.images && c.images.small
      ? { small: c.images.small, large: c.images.large ?? undefined }
      : null;

  return {
    id: c.id,
    name: c.name,
    supertype: c.supertype ?? null,
    subtypes: c.subtypes ?? [],
    level: c.level ?? null,
    hp: c.hp ?? null,
    types: c.types ?? [],
    evolvesFrom: c.evolvesFrom ?? null,
    evolvesTo: c.evolvesTo ?? [],
    rules: c.rules ?? [],
    flavorText: c.flavorText ?? null,
    artist: c.artist ?? null,
    rarity: c.rarity ?? null,
    number: c.number ?? null,
    nationalPokedexNumbers: c.nationalPokedexNumbers ?? [],
    retreatCost: c.retreatCost ?? [],
    convertedRetreatCost: c.convertedRetreatCost ?? null,
    createdAt: c.createdAt?.toISOString() ?? null,
    updatedAt: c.updatedAt?.toISOString() ?? null,

    set: c.set
      ? {
          id: c.set.id ?? undefined,
          name: c.set.name ?? undefined,
          series: c.set.series ?? undefined,
          printedTotal: c.set.printedTotal ?? null,
          total: c.set.total ?? null,
          ptcgoCode: c.set.ptcgoCode ?? null,
          releaseDate: c.set.releaseDate?.toISOString() ?? null,
          updatedAt: c.set.updatedAt?.toISOString() ?? null,
          symbol: c.set.symbol ?? null,
          logo: c.set.logo ?? null,
          legalities: c.set.legalities
            ? {
                unlimited: c.set.legalities.unlimited ?? null,
                standard: c.set.legalities.standard ?? null,
                expanded: c.set.legalities.expanded ?? null,
              }
            : null,
        }
      : null,

    abilities: Array.isArray(c.abilities)
      ? c.abilities.map(a => ({
          id: a.id ?? undefined,
          name: a.name,
          text: a.text ?? null,
          type: a.type ?? null,
        }))
      : [],

    attacks: Array.isArray(c.attacks)
      ? c.attacks.map(a => ({
          id: a.id ?? undefined,
          name: a.name,
          cost: Array.isArray(a.cost) ? a.cost : [],
          convertedEnergyCost: a.convertedEnergyCost ?? null,
          damage: a.damage ?? null,
          text: a.text ?? null,
        }))
      : [],

    weaknesses: Array.isArray(c.weaknesses)
      ? c.weaknesses.map(w => ({ id: w.id ?? undefined, type: w.type, value: w.value }))
      : [],

    resistances: Array.isArray(c.resistances)
      ? c.resistances.map(r => ({ id: r.id ?? undefined, type: r.type, value: r.value }))
      : [],

    legalities: c.legalities
      ? {
          unlimited: c.legalities.unlimited ?? null,
          standard: c.legalities.standard ?? null,
          expanded: c.legalities.expanded ?? null,
        }
      : null,

    images,

    cardmarket: c.cardmarket
      ? {
          url: c.cardmarket.url ?? null,
          updatedAt: c.cardmarket.updatedAt?.toISOString() ?? null,
          averageSellPrice: c.cardmarket.averageSellPrice ?? null,
          lowPrice: c.cardmarket.lowPrice ?? null,
          trendPrice: c.cardmarket.trendPrice ?? null,
          germanProLow: c.cardmarket.germanProLow ?? null,
          suggestedPrice: c.cardmarket.suggestedPrice ?? null,
          reverseHoloSell: c.cardmarket.reverseHoloSell ?? null,
          reverseHoloLow: c.cardmarket.reverseHoloLow ?? null,
          reverseHoloTrend: c.cardmarket.reverseHoloTrend ?? null,
          lowPriceExPlus: c.cardmarket.lowPriceExPlus ?? null,
          avg1: c.cardmarket.avg1 ?? null,
          avg7: c.cardmarket.avg7 ?? null,
          avg30: c.cardmarket.avg30 ?? null,
          reverseHoloAvg1: c.cardmarket.reverseHoloAvg1 ?? null,
          reverseHoloAvg7: c.cardmarket.reverseHoloAvg7 ?? null,
          reverseHoloAvg30: c.cardmarket.reverseHoloAvg30 ?? null,
        }
      : null,

    tcgplayer: c.tcgplayer
      ? {
          url: c.tcgplayer.url ?? null,
          updatedAt: c.tcgplayer.updatedAt?.toISOString() ?? null,
          prices: c.tcgplayer.prices
            ? {
                normalLow: c.tcgplayer.prices.normalLow ?? null,
                normalMid: c.tcgplayer.prices.normalMid ?? null,
                normalHigh: c.tcgplayer.prices.normalHigh ?? null,
                normalMarket: c.tcgplayer.prices.normalMarket ?? null,
                normalDirectLow: c.tcgplayer.prices.normalDirectLow ?? null,

                holofoilLow: c.tcgplayer.prices.holofoilLow ?? null,
                holofoilMid: c.tcgplayer.prices.holofoilMid ?? null,
                holofoilHigh: c.tcgplayer.prices.holofoilHigh ?? null,
                holofoilMarket: c.tcgplayer.prices.holofoilMarket ?? null,
                holofoilDirectLow: c.tcgplayer.prices.holofoilDirectLow ?? null,

                reverseHolofoilLow: c.tcgplayer.prices.reverseHolofoilLow ?? null,
                reverseHolofoilMid: c.tcgplayer.prices.reverseHolofoilMid ?? null,
                reverseHolofoilHigh: c.tcgplayer.prices.reverseHolofoilHigh ?? null,
                reverseHolofoilMarket: c.tcgplayer.prices.reverseHolofoilMarket ?? null,
                reverseHolofoilDirectLow: c.tcgplayer.prices.reverseHolofoilDirectLow ?? null,
              }
            : null,
        }
      : null,
  };
}
