// app/api/cards/route.ts
import { fetchPokemonCards } from '@/lib/pokemonAPI'
import { NextRequest } from 'next/server'

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl
  const query = searchParams.get('q') || ''
  const page = parseInt(searchParams.get('page') || '1')
  const pageSize = parseInt(searchParams.get('pageSize') || '20')
  const orderBy = searchParams.get('orderBy') || ''

  try {
    const data = await fetchPokemonCards({ query, page, pageSize, orderBy })
    return new Response(JSON.stringify(data), { status: 200 })
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 })
  }
}
