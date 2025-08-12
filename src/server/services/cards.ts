// src/server/services/cards.ts
import type {
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
} from "../../generated/cards";

export function serializeCardBasic(c: any) {
  return {
    id: c.id,
    name: c.name,
    supertype: c.supertype,
    subtypes: c.subtypes ?? [],
    level: c.level,
    hp: c.hp,
    types: c.types ?? [],
    rarity: c.rarity,
    artist: c.artist,
    number: c.number,
    nationalPokedexNumbers: c.nationalPokedexNumbers ?? [],
    retreatCost: c.retreatCost ?? [],
    createdAt: c.createdAt?.toISOString() ?? null,
    set: c.set ? { id: c.set.id, name: c.set.name, series: c.set.series } : null,
    market: c.cardmarket ? {
      averageSellPrice: c.cardmarket.averageSellPrice,
      trendPrice: c.cardmarket.trendPrice,
      lowPrice: c.cardmarket.lowPrice,
    } : null,
    tcgplayerPrices: c.tcgplayer?.prices ? {
      normalMarket: c.tcgplayer.prices.normalMarket,
      holofoilMarket: c.tcgplayer.prices.holofoilMarket,
      reverseHolofoilMarket: c.tcgplayer.prices.reverseHolofoilMarket,
    } : null,
    images: c.images ? { small: c.images.small, large: c.images.large } : null,
  };
}

export function serializeCardFull(c: any) {
  return {
    id: c.id,
    name: c.name,
    supertype: c.supertype,
    subtypes: c.subtypes ?? [],
    level: c.level, hp: c.hp, types: c.types ?? [],
    evolvesFrom: c.evolvesFrom, evolvesTo: c.evolvesTo ?? [],
    rules: c.rules ?? [], flavorText: c.flavorText,
    artist: c.artist, rarity: c.rarity, number: c.number,
    nationalPokedexNumbers: c.nationalPokedexNumbers ?? [],
    retreatCost: c.retreatCost ?? [],
    convertedRetreatCost: c.convertedRetreatCost,
    createdAt: c.createdAt?.toISOString() ?? null,
    updatedAt: c.updatedAt?.toISOString() ?? null,
    set: c.set ? {
      id: c.set.id, name: c.set.name, series: c.set.series,
      printedTotal: c.set.printedTotal, total: c.set.total, ptcgoCode: c.set.ptcgoCode,
      releaseDate: c.set.releaseDate?.toISOString() ?? null,
      updatedAt: c.set.updatedAt?.toISOString() ?? null,
      symbol: c.set.symbol, logo: c.set.logo,
      legalities: c.set.legalities ? {
        unlimited: c.set.legalities.unlimited,
        standard: c.set.legalities.standard,
        expanded: c.set.legalities.expanded,
      } : null,
    } : null,
    abilities: c.abilities.map((a: any) => ({ id: a.id, name: a.name, text: a.text, type: a.type })),
    attacks: c.attacks.map((a: any) => ({
      id: a.id, name: a.name, cost: a.cost ?? [],
      convertedEnergyCost: a.convertedEnergyCost, damage: a.damage, text: a.text
    })),
    weaknesses: c.weaknesses.map((w: any) => ({ id: w.id, type: w.type, value: w.value })),
    resistances: c.resistances.map((r: any) => ({ id: r.id, type: r.type, value: r.value })),
    legalities: c.legalities ? {
      unlimited: c.legalities.unlimited, standard: c.legalities.standard, expanded: c.legalities.expanded
    } : null,
    images: c.images ? { small: c.images.small, large: c.images.large } : null,
    cardmarket: c.cardmarket ? {
      url: c.cardmarket.url,
      updatedAt: c.cardmarket.updatedAt?.toISOString() ?? null,
      averageSellPrice: c.cardmarket.averageSellPrice,
      lowPrice: c.cardmarket.lowPrice,
      trendPrice: c.cardmarket.trendPrice,
      germanProLow: c.cardmarket.germanProLow,
      suggestedPrice: c.cardmarket.suggestedPrice,
      reverseHoloSell: c.cardmarket.reverseHoloSell,
      reverseHoloLow: c.cardmarket.reverseHoloLow,
      reverseHoloTrend: c.cardmarket.reverseHoloTrend,
      lowPriceExPlus: c.cardmarket.lowPriceExPlus,
      avg1: c.cardmarket.avg1, avg7: c.cardmarket.avg7, avg30: c.cardmarket.avg30,
      reverseHoloAvg1: c.cardmarket.reverseHoloAvg1,
      reverseHoloAvg7: c.cardmarket.reverseHoloAvg7,
      reverseHoloAvg30: c.cardmarket.reverseHoloAvg30,
    } : null,
    tcgplayer: c.tcgplayer ? {
      url: c.tcgplayer.url,
      updatedAt: c.tcgplayer.updatedAt?.toISOString() ?? null,
      prices: c.tcgplayer.prices ? {
        normalLow: c.tcgplayer.prices.normalLow,
        normalMid: c.tcgplayer.prices.normalMid,
        normalHigh: c.tcgplayer.prices.normalHigh,
        normalMarket: c.tcgplayer.prices.normalMarket,
        normalDirectLow: c.tcgplayer.prices.normalDirectLow,
        holofoilLow: c.tcgplayer.prices.holofoilLow,
        holofoilMid: c.tcgplayer.prices.holofoilMid,
        holofoilHigh: c.tcgplayer.prices.holofoilHigh,
        holofoilMarket: c.tcgplayer.prices.holofoilMarket,
        holofoilDirectLow: c.tcgplayer.prices.holofoilDirectLow,
        reverseHolofoilLow: c.tcgplayer.prices.reverseHolofoilLow,
        reverseHolofoilMid: c.tcgplayer.prices.reverseHolofoilMid,
        reverseHolofoilHigh: c.tcgplayer.prices.reverseHolofoilHigh,
        reverseHolofoilMarket: c.tcgplayer.prices.reverseHolofoilMarket,
        reverseHolofoilDirectLow: c.tcgplayer.prices.reverseHolofoilDirectLow,
      } : null,
    } : null,
  };
}
