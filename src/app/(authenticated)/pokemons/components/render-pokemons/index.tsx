/* eslint-disable react/prop-types */
import Image from 'next/image'
import Link from 'next/link'
import { Key } from 'react'

import {
  Pokemon,
  defaultImage,
  typeImages
} from '../../apirequests/pokemon-image-type'

interface PokemonsProps {
  pokemons: Pokemon[]
  regions: Record<string, { startId: number; endId: number }>
  selectedRegion: string
}

interface RenderPokemonsProps
  extends Pick<PokemonsProps, 'pokemons' | 'regions' | 'selectedRegion'> {
  handleLoadMore: () => Promise<void>
  loading: boolean
  filtered: boolean
}

const RenderPokemons: React.FC<RenderPokemonsProps> = ({
  pokemons,
  regions,
  selectedRegion,
  handleLoadMore,
  loading,
  filtered
}) => {
  const { startId, endId } = regions[selectedRegion] || {}
  const filteredPokemons = pokemons.filter(
    (pokemon: Pokemon) => pokemon.id >= startId && pokemon.id <= endId
  )

  const canLoadMore =
    filteredPokemons.length > 0 && filteredPokemons.length % 27 === 0

  return (
    <>
      {filteredPokemons?.length > 0 ? (
        filteredPokemons.map((pokemon: Pokemon) => {
          const imageSrc =
            typeImages[pokemon.types[0]?.type.name] || defaultImage

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
                      {pokemon.types.map(
                        (
                          typeData: { type: { name: string } },
                          index: Key | null | undefined
                        ) => (
                          <div
                            key={index}
                            className={`bg-type-${typeData.type.name} bg-black-700 text-white text-sm leading-tight mr-2 capitalize px-2 py-1 rounded-lg`}
                          >
                            {typeData.type.name.charAt(0).toUpperCase() +
                              typeData.type.name.slice(1)}
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          )
        })
      ) : loading ? (
        <div className="my-48 border-gray-300 h-12 w-12 animate-spin rounded-full border-4 border-t-[#CE312F]" />
      ) : (
        <>
          <h1 className="text-3xl text-red-500 my-48 mx-auto">
            Pokemon not found in this region
          </h1>
        </>
      )}
      {!filtered && filteredPokemons?.length > 0 && canLoadMore && (
        <>
          <div className="flex min-w-full justify-center mt-4">
            <button
              onClick={handleLoadMore}
              className={`bg-[#CE312F] ${
                loading ? 'text-[#CE312F]' : 'text-white'
              } px-6 py-2 rounded-md hover:opacity-90 relative ${
                loading ? 'opacity-70 cursor-not-allowed' : ''
              }`}
              disabled={loading}
            >
              {loading && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="border-white h-6 w-6 animate-spin rounded-full border-4 border-t-[#CE312F]" />
                </div>
              )}
              Load more
            </button>
          </div>
        </>
      )}
    </>
  )
}

export default RenderPokemons
