import Image from 'next/image'
import Link from 'next/link'

import PokemonEvolution from '../components/pokemon-evolution'

import {
  getPokemonSpecies,
  getPokemonDetails
} from '../apirequests/get-pokemon-by-name'
import {
  PokemonType,
  defaultImage,
  typeImages
} from '../apirequests/pokemon-image-type'

export default async function PokemonDetails({
  params
}: {
  params: { pokemonName: string }
}) {
  const pokemonSpecie = await getPokemonSpecies(params.pokemonName)
  const pokemonDetails = await getPokemonDetails(params.pokemonName)

  const typeImage = typeImages[pokemonDetails.types[0].type.name as PokemonType]
  const imageSrc = typeImage ? typeImage : defaultImage

  const englishDescriptions = pokemonSpecie.flavor_text_entries?.filter(
    (entry: { language: { name: string } }) => entry.language.name === 'en'
  )

  const lastEnglishDescription =
    englishDescriptions?.length > 0 &&
    englishDescriptions[englishDescriptions.length - 1].flavor_text

  const colors = [
    '#ff5833e5',
    '#33FF57e5',
    '#5733FFe5',
    '#FFFF33e5',
    '#33FFFFe5',
    '#FF33FFe5'
  ]

  const renderPokemonDetails = (device: string) => {
    return (
      <div
        className={`bg-[#000029] text-white mt-2 rounded-lg p-4 ${
          device === 'desktop' ? 'hidden lg:flex ' : 'flex lg:hidden '
        } flex-wrap w-full gap-3`}
      >
        <div className="w-2/5 flex-grow">
          <p className="text-xs text-gray-300">Height</p>
          <p className="text-md text-gray-100 text-center mt-1 p-1 border-solid border-2 rounded-lg border-slate-700">{`${
            pokemonDetails.height / 10
          }m`}</p>
        </div>

        <div className="w-2/5 flex-grow">
          <p className="text-xs text-gray-300">Weight</p>
          <p className="text-md text-gray-100 text-center mt-1 p-1 border-solid border-2 rounded-lg border-slate-700">{`${
            pokemonDetails.weight / 10
          }kg`}</p>
        </div>

        <div className="w-2/5 flex-grow">
          <p className="text-xs text-gray-300">Base happiness</p>
          <p className="text-md text-gray-100 text-center mt-1 p-1 border-solid border-2 rounded-lg border-slate-700">
            {pokemonSpecie.base_happiness}
          </p>
        </div>

        <div className="w-2/5 flex-grow">
          <p className="text-xs text-gray-300">Capture rate</p>
          <p className="text-md text-gray-100 text-center mt-1 p-1 border-solid border-2 rounded-lg border-slate-700">{`${pokemonSpecie.capture_rate}%`}</p>
        </div>

        <div className="w-2/5 flex-grow">
          <p className="text-xs text-gray-300">Habitat</p>
          <p className="text-md text-gray-100 text-center mt-1 p-1 border-solid border-2 rounded-lg border-slate-700 capitalize">
            {pokemonSpecie.habitat?.name
              ? pokemonSpecie.habitat.name
              : 'Unknown'}
          </p>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="relative max-w-screen-xl my-8 mb-10 mx-auto px-4 sm:px-8 overflow-hidden">
        <div className="flex flex-row justify-between items-center">
          {pokemonDetails.id - 1 > 0 ? (
            <>
              <Link
                href={`/pokemons/${pokemonDetails.id - 1}`}
                className="flex flex-row justify-center items-center lg:absolute top-1/2 left-[-10px] mr-auto"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#000029"
                  viewBox="0 0 256 256"
                  className="w-8 h-8 lg:w-14 lg:h-14"
                >
                  <path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z" />
                </svg>
                <p className="text-sm text-[#000029] lg:hidden">Previous</p>
              </Link>
            </>
          ) : (
            ''
          )}
          {pokemonDetails.id + 1 < 899 ? (
            <>
              <Link
                href={`/pokemons/${pokemonDetails.id + 1}`}
                className="flex flex-row justify-center items-center lg:absolute top-1/2 right-[-10px] ml-auto"
              >
                <p className="text-sm text-[#000029] lg:hidden">Next</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#000029"
                  viewBox="0 0 256 256"
                  className="w-8 h-8 lg:w-14 lg:h-14"
                >
                  <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z" />
                </svg>
              </Link>
            </>
          ) : (
            ''
          )}
        </div>
        <div className="w-full lg:flex overflow-hidden gap-1">
          <div className="p-2 w-full lg:w-2/5">
            <div className="relative mb-2">
              <Image
                src={imageSrc}
                alt="Background based on pokemon type"
                loading="lazy"
                width={500}
                height={234}
                className="h-[234px] aspect-3_2 w-full object-cover rounded-lg"
              />
              <img
                src={`${pokemonDetails.sprites.front_default}`}
                alt={`Image of the pokemon ${pokemonDetails.name}`}
                className="w-full h-[234px] object-contain absolute top-0 left-0 rounded-lg"
                loading="lazy"
                style={{ zIndex: 1 }}
              />
            </div>
            {renderPokemonDetails('desktop')}
          </div>

          <div className="p-2 flex flex-col justify-between leading-normal w-full lg:w-3/5">
            <div className="mb-8">
              <div>
                <h2 className="text-4xl font-bold text-gray-800 mb-1 capitalize">
                  {`${pokemonDetails.name} #${pokemonDetails.id}`}
                </h2>

                <p className="text-grey-darker text-base ml-1">
                  {lastEnglishDescription}
                </p>
              </div>

              <div className="my-2 w-full sm:w-3/5">
                <h2 className="text-2xl text-gray-800 my-2">Type</h2>
                <div className="flex justify-start items-center ml-1 w-full">
                  {pokemonDetails.types.map(
                    (typeData: { type: { name: string } }, index: number) => (
                      <div
                        key={index}
                        className={`bg-type-${typeData.type.name} bg-black-700 text-white text-md text-center leading-tight mr-2 capitalize px-2 py-1 rounded-lg w-2/6`}
                      >
                        {typeData.type.name.charAt(0).toUpperCase() +
                          typeData.type.name.slice(1)}
                      </div>
                    )
                  )}
                </div>
              </div>

              {renderPokemonDetails('mobile')}

              <div className="my-2 w-full">
                <h2 className="text-2xl text-gray-800 my-2">Status</h2>
                <div className="text-white mt-2 ml-1 rounded-lg flex flex-wrap w-full  gap-2">
                  <div className="pr-3 flex flex-col gap-2 border-r-2 border-gray-300">
                    {pokemonDetails.stats.map(
                      (
                        statInfo: { base_stat: number; stat: { name: string } },
                        index: number
                      ) => (
                        <div
                          key={index}
                          className="w-full flex flex-col sm:flex-row justify-start items-start sm:items-center"
                        >
                          <div className="text-md text-gray-800 font-bold w-auto mr-1 capitalize">
                            {statInfo.stat.name.replace('special-', 'S. ')}
                          </div>
                        </div>
                      )
                    )}
                  </div>
                  <div className="pl-2 flex flex-col gap-2 md:mr-4 flex-grow">
                    {pokemonDetails.stats.map(
                      (
                        statInfo: { base_stat: number; stat: { name: string } },
                        index: number
                      ) => (
                        <div
                          key={index}
                          className="w-full flex flex-col sm:flex-row justify-center items-start sm:items-center h-6"
                        >
                          <div className="text-sm text-gray-800 w-12 capitalize">
                            {statInfo.base_stat}
                          </div>
                          <div className="relative w-full flex justify-start items-center rounded-lg bg-gray-300">
                            <div
                              style={{
                                height: 12,
                                width: `${(statInfo.base_stat / 255) * 100}%`,
                                backgroundColor: colors[index % colors.length]
                              }}
                              className="rounded-lg px-2 text-sm bg-slate-700 text-gray-800 flex justify-start items-center w-20 capitalize"
                            ></div>
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <PokemonEvolution
          pokemonEvolution={pokemonSpecie.evolution_chain?.url}
        />
      </div>
    </>
  )
}
