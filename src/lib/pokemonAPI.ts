
const BASE_URL = 'https://api.pokemontcg.io/v2/cards'

export interface CardSearchParams {
  query?: string
  page?: number
  pageSize?: number
  orderBy?: string
}

export async function fetchPokemonCards({
  query = '',
  page = 1,
  pageSize = 20,
  orderBy = '',
}: CardSearchParams) {
  const url = new URL(BASE_URL)
  if (query) url.searchParams.append('q', query)
  url.searchParams.append('page', page.toString())
  url.searchParams.append('pageSize', pageSize.toString())
  if (orderBy) url.searchParams.append('orderBy', orderBy)

  const res = await fetch(url.toString(), {
    headers: {
      'X-Api-Key': process.env.XAPI_POKEMON!,
    },
    cache: 'no-store',
  })

  if (!res.ok) throw new Error('Failed to fetch cards')
  return res.json()
}
