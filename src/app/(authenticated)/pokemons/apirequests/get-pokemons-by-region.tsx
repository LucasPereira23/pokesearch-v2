export async function getAllRegions() {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/region`)

    if (!response.ok) {
      throw new Error('Failed to fetch')
    }

    const region = await response.json()
    return region.results
  } catch (error) {
    console.error('Error fetching data:', error)
    return []
  }
}
