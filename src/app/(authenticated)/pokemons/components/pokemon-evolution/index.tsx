import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { getPokemonDetails } from '../../apirequests/get-pokemon-by-name'
import { getPokemonEvolution } from '../../apirequests/get-pokemon-evolution'
import {
  PokemonType,
  defaultImage,
  typeImages
} from '../../apirequests/pokemon-image-type'

type Evolution = {
  species: { name: string; url: string }
  evolves_to?: Evolution[]
}

type EvolutionDetails = {
  chain: Evolution
}

type Props = {
  pokemonEvolution: string
}

type PokemonDetails = {
  id: number
  types: { type: { name: string } }[]
  sprites: { front_default: string }
  name: string
  height: number
  weight: number
}

export default function PokemonEvolution({ pokemonEvolution }: Props) {
  const fetchEvolutionDetails = async (
    pokemonName: string
  ): Promise<EvolutionDetails> => {
    const evolutionDetails = await getPokemonEvolution(pokemonName)
    return evolutionDetails
  }

  const fetchPokemonDetails = async (
    pokemonName: string
  ): Promise<PokemonDetails> => {
    const pokemonDetails = await getPokemonDetails(pokemonName)
    return pokemonDetails
  }

  const renderPokemonDetails = async (details: PokemonDetails) => {
    const typeImage = typeImages[details?.types[0]?.type?.name as PokemonType]
    const imageSrc = typeImage ? typeImage : defaultImage

    return (
      <div className="m-2">
        <div
          className="aspect-3_3 relative overflow-hidden max-w-[240px] md:max-w-none md:min-w-[160px] border-8 border-solid border-white"
          style={{ borderRadius: '100%' }}
        >
          <Image
            src={imageSrc}
            alt="Background based on pokemon type"
            loading="lazy"
            width={500}
            height={234}
            className="aspect-3_3 md:h-[192px] md:w-[192px] object-cover rounded-lg"
          />
          <img
            src={`${details.sprites.front_default}`}
            alt={`Image of the pokemon ${details.name}`}
            className="aspect-3_3 w-4/5 md:h-[160px] md:w-[160px] object-contain absolute inset-0 m-auto rounded-lg"
            loading="lazy"
            style={{ zIndex: 1 }}
          />
        </div>
        <p className="text-white text-md text-center capitalize m-1">
          {details.name} #{details.id}
        </p>

        <div className="flex justify-center items-center flex-wrap w-full gap-1">
          {details.types.map(
            (typeData: { type: { name: string } }, index: number) => (
              <div
                key={index}
                className={`bg-type-${typeData.type.name} bg-black-700 text-white text-sm text-center leading-tight capitalize px-2 py-1 rounded-lg`}
              >
                {typeData.type.name.charAt(0).toUpperCase() +
                  typeData.type.name.slice(1)}
              </div>
            )
          )}
        </div>
      </div>
    )
  }

  const renderEvolutionChain = async (chain: Evolution) => {
    const details = await fetchPokemonDetails(chain.species.name)
    const evolutionChain = (
      <div
        key={chain.species.name}
        className=" bg-[#000029] text-white m-2 p-4 rounded-lg"
      >
        <h2 className="text-2xl mb-3">Evolutions</h2>
        <div className="flex flex-col lg:flex-row flex-wrap lg:flex-nowrap justify-center items-center text-center">
          <Link href={`/pokemons/${chain.species.name}`} passHref>
            {renderPokemonDetails(details)}
          </Link>

          {chain.evolves_to && (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="52"
                height="52"
                fill="#FFFFFF"
                viewBox="0 0 256 256"
                className="rotate-90 lg:rotate-0"
              >
                <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
              </svg>
            </>
          )}
          <div className="flex justify-center items-center flex-wrap">
            {chain.evolves_to &&
              (await Promise.all(
                chain.evolves_to.map(async (evolution, index) => {
                  const subDetails = await fetchPokemonDetails(
                    evolution.species.name
                  )
                  const subDetailsComponent = (
                    <div
                      key={evolution.species.name}
                      className="flex flex-col lg:flex-row flex-wrap justify-center items-center"
                    >
                      <Link
                        key={evolution.species.name}
                        href={`/pokemons/${evolution.species.name}`}
                        passHref
                      >
                        {renderPokemonDetails(subDetails)}
                      </Link>

                      <div className="flex flex-row lg:flex-col">
                        {evolution.evolves_to &&
                          (await Promise.all(
                            evolution.evolves_to.map(async (subEvolution) => {
                              const subSubDetails = await fetchPokemonDetails(
                                subEvolution.species.name
                              )
                              return (
                                <div
                                  className="flex flex-col lg:flex-row flex-wrap justify-center items-center"
                                  key={subEvolution.species.name}
                                >
                                  {index === 0 && (
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="52"
                                      height="52"
                                      fill="#FFFFFF"
                                      viewBox="0 0 256 256"
                                      className="rotate-90 lg:rotate-0"
                                    >
                                      <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
                                    </svg>
                                  )}

                                  <Link
                                    href={`/pokemons/${subEvolution.species.name}`}
                                    passHref
                                  >
                                    {renderPokemonDetails(subSubDetails)}
                                  </Link>
                                </div>
                              )
                            })
                          ))}
                      </div>
                    </div>
                  )
                  return subDetailsComponent
                })
              ))}
          </div>
        </div>
      </div>
    )
    return evolutionChain
  }

  const displayEvolutionChain = async () => {
    const evolutionDetails = await fetchEvolutionDetails(pokemonEvolution)
    return (
      <div>
        {evolutionDetails.chain?.evolves_to?.length !== 0 &&
          (await renderEvolutionChain(evolutionDetails.chain))}
      </div>
    )
  }

  return displayEvolutionChain()
}
