/* eslint-disable react/prop-types */
import Image from 'next/image'
import Link from 'next/link'

import {
  PokemonType,
  defaultImage,
  typeImages
} from '../../apirequests/pokemon-image-type'

interface Pokemon {
  id: number
  name: string
  sprites: {
    front_default: string
  }
  types: {
    type: {
      name: PokemonType
    }
  }[]
}

interface RenderPokemonsProps {
  pokemons: Pokemon[]
  regions: Record<string, Region>
  selectedRegion: string
}

const RenderPokemons: React.FC<RenderPokemonsProps> = ({
  pokemons,
  regions,
  selectedRegion
}) => {
  const selectedRegionData = regions[selectedRegion]

  const filteredPokemons = pokemons.filter((pokemon) => {
    const regionStartId = selectedRegionData?.startId
    const regionEndId = selectedRegionData?.endId
    return pokemon.id >= regionStartId && pokemon.id <= regionEndId
  })

  return (
    <>
      {filteredPokemons?.length > 0 ? (
        filteredPokemons.map((pokemon) => {
          const typeImage =
            typeImages[pokemon.types[0].type.name as PokemonType]
          const imageSrc = typeImage ? typeImage : defaultImage

          return (
            <Link
              href={`/pokemons/${pokemon.name}`}
              key={pokemon.id}
              className="p-4 px-0 max-w-sm transform transition-transform duration-300 ease-in-out hover:scale-105 sm:px-4"
            >
              <div className="flex flex-col justify-center items-center bg-gray-100 rounded-lg">
                <div className="bg-white rounded-lg shadow-xl overflow-hidden max-w-lg w-full">
                  <div className="relative">
                    <Image
                      src={imageSrc}
                      alt="Forest Battle"
                      loading="lazy"
                      width={500}
                      height={234}
                      className="h-[234px] aspect-3_2 w-full object-cover"
                    />
                    <img
                      src={`${pokemon.sprites.front_default}`}
                      alt={`Imagem do pokemon ${pokemon.name}`}
                      className="w-full h-[234px] object-contain absolute top-0 left-0"
                      loading="lazy"
                      style={{ zIndex: 1 }}
                    />
                  </div>

                  <div className="p-4">
                    <h2 className="text-2xl font-bold text-gray-800 mb-1 capitalize">
                      {`${pokemon.name} #${pokemon.id}`}
                    </h2>
                    <div className="flex justify-start items-center">
                      {pokemon.types.map((typeData, index) => (
                        <div
                          key={index}
                          className={`bg-type-${typeData.type.name} bg-black-700 text-white text-sm leading-tight mr-2 capitalize px-2 py-1 rounded-lg`}
                        >
                          {typeData.type.name.charAt(0).toUpperCase() +
                            typeData.type.name.slice(1)}
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-between items-center"></div>
                  </div>
                </div>
              </div>
            </Link>
          )
        })
      ) : (
        <>
          <h1 className="text-3xl text-red-500 my-48 mx-auto">
            Pokemon not found in this region
          </h1>
        </>
      )}
    </>
  )
}

export default RenderPokemons
