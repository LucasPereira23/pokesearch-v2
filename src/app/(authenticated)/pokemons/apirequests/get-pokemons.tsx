import { PokemonType } from './pokemon-image-type'

interface Pokemon {
  id: number
  name: string
  url: string
  sprites: {
    [key: string]: string | null
  }
  types: { slot: number; type: { name: PokemonType; url: string } }[]
}

export async function getPokemons(
  limit: number,
  off_set: number
): Promise<Pokemon[]> {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${limit}${
        off_set > 0 && '&offset=' + off_set
      }`
    )

    const allpokemon = await response.json()

    const pokemons: Pokemon[] = await Promise.all(
      allpokemon.results.map(async (pokemon: Pokemon) => {
        const pokemonResponse = await fetch(pokemon.url)
        const details = await pokemonResponse.json()

        return details
      })
    )

    return pokemons
  } catch (error) {
    throw new Error('Erro ao buscar os Pokémons: ' + error)
  }
}
