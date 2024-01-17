export async function getPokemonEvolution(evolutionRequest: string) {
  try {
    const response = await fetch(evolutionRequest)

    if (!response.ok) {
      throw new Error('Failed to fetch')
    }

    const evolution = await response.json()
    return evolution
  } catch (error) {
    console.error('Error fetching data:', error)
    return []
  }
}
