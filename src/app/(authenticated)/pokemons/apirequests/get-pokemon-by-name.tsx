export async function getPokemonSpecies(pokemonName: string) {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon-species/${pokemonName}`
    )

    if (!response.ok) {
      throw new Error('Failed to fetch')
    }

    const pokemon = await response.json()
    return pokemon
  } catch (error) {
    console.error('Error fetching data:', error)
    return []
  }
}

export async function getPokemonDetails(pokemonName: string) {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    )

    if (!response.ok) {
      throw new Error('Failed to fetch')
    }

    const pokemon = await response.json()
    return pokemon
  } catch (error) {
    console.error('Error fetching data:', error)
    return []
  }
}
