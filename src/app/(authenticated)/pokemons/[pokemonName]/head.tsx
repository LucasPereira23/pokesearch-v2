import { getPokemonById } from '../apirequests/get-pokemon-by-name'

export default async function PokemonDetailsHead({
  params
}: {
  params: { pokemonId: string }
}) {
  const pokemon = await getPokemonById(params.pokemonId)
  const title = `${pokemon.name}`
  return (
    <>
      <title>{title}</title>
    </>
  )
}
