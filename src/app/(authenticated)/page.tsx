import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import all_pokemons from '../../../public/all_pokemons.jpeg'
import home_wallpaper from '../../../public/home_wallpaper.jpg'
import logo_nextjs from '../../../public/logo_nextjs.png'
import logo_react from '../../../public/logo_react.png'
import logo_tailwindcss from '../../../public/logo_tailwindcss.png'
import logo_typescript from '../../../public/logo_typescript.png'
import pokemon_details from '../../../public/pokemon_details.jpeg'
import pokemon_map from '../../../public/pokemon_map.png'
import psyduck from '../../../public/psyduck.png'

export default function Home() {
  return (
    <>
      <main className="mb-10">
        <div
          className="relative pt-16 pb-32 flex content-center items-center justify-center"
          style={{
            minHeight: '65vh'
          }}
        >
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage: `url(${home_wallpaper.src})`
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>
          <div className="max-w-screen-2xl relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full  px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-[#CE312F] font-semibold text-4xl md:text-5xl">
                    PokeSearch V2
                  </h1>
                  <p className="mt-4 text-lg text-gray-300">
                    Welcome to PokeSearch V2, project made by Lucas Pereira.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="pb-8 lg:pb-16 bg-slate-50 -mt-24">
          <div className="max-w-screen-2xl mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="md:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <Link
                  href="/regions"
                  className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg transform transition-transform duration-300 ease-in-out hover:scale-105"
                >
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-2 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                      <Image
                        src={pokemon_map}
                        alt="Regions"
                        width={48}
                        height={48}
                        className=""
                      />
                    </div>
                    <h6 className="text-xl font-semibold">Regions</h6>
                    <p className="mt-2 mb-4 text-gray-600">
                      Navigate through our regions to explore diverse landscapes
                      of your favorite Pokémon across different territories
                    </p>
                  </div>
                </Link>
              </div>

              <div className="w-full md:w-4/12 px-4 text-center">
                <Link
                  href="/pokemons"
                  className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg transform transition-transform duration-300 ease-in-out hover:scale-105"
                >
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-2 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                      <Image
                        src={psyduck}
                        alt="Psyduck"
                        width={48}
                        height={48}
                        className=""
                      />
                    </div>
                    <h6 className="text-xl font-semibold">Pokémons</h6>
                    <p className="mt-2 mb-4 text-gray-600">
                      Explore our extensive Pokémon database to discover details
                      about Pokémon from all regions. From basic information to
                      evolutionary patterns
                    </p>
                  </div>
                </Link>
              </div>

              <div className="md:pt-6 w-full md:w-4/12 px-4 text-center">
                <Link
                  href="/types"
                  className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg transform transition-transform duration-300 ease-in-out hover:scale-105"
                >
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-2 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-[#FBA64C]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="48"
                        height="48"
                        viewBox="0 0 512 536"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M352.258 395.394C358.584 372.263 346.305 324.71 346.305 324.71C346.305 324.71 337.399 363.449 323.483 377.767C311.611 389.98 297.066 398.451 276.206 400.677C293.261 392.393 304.99 375.12 304.99 355.155C304.99 327.129 281.878 304.409 253.368 304.409C224.858 304.409 201.745 327.129 201.745 355.155C201.745 362.809 203.47 370.068 206.557 376.576C188.725 362.37 185.921 339.594 185.921 339.594C185.921 339.594 166.009 422.264 220.875 461.152C275.74 500.04 383.219 466.614 383.219 466.614C383.219 466.614 229.41 574.837 115.436 457.05C17.2568 355.584 89.8111 222.003 89.8111 222.003C89.8111 222.003 86.6777 234.395 86.6777 248.78C86.6777 263.165 94.477 274.11 94.477 274.11C94.477 274.11 117.742 225.071 135.848 205.128C152.984 186.254 174.465 170.946 193.019 157.724C207.301 147.546 219.849 138.604 227.343 130.223C268.62 84.0687 243.311 0 243.311 0C243.311 0 289.841 41.02 302.831 93.9978C307.783 114.192 304.597 137.169 301.749 157.716C297.125 191.072 293.388 218.025 326.793 216.276C380.775 213.449 333.866 130.223 333.866 130.223C333.866 130.223 456.318 194.583 447.17 307.145C438.021 419.707 313.324 445.297 313.324 445.297C313.324 445.297 345.931 418.525 352.258 395.394Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <h6 className="text-xl font-semibold">Pokemon Types</h6>
                    <p className="mt-2 mb-4 text-gray-600">
                      Gain insights into the strengths and weaknesses of each
                      type, and understand how they influence battles. Engage
                      with our detailed information
                    </p>
                  </div>
                </Link>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row items-center mt-4 lg:mt-16">
              <div className="w-full lg:w-5/12 px-4 text-center lg:text-left mr-auto ml-auto">
                <h3 className="text-2xl sm:text-4xl text-[#CE312F] mb-2 font-semibold leading-normal">
                  All Pokemons
                </h3>
                <p className="text-sm sm:text-lg font-light leading-relaxed mb-4 text-gray-800">
                  Explore our extensive Pokémon repertoire, featuring fictional
                  creatures from the Pokémon universe.
                </p>

                <Link href="/pokemons" className="font-bold me-4 mb-4 md:me-6">
                  See Pokemons
                </Link>
              </div>

              <div className="w-full md:max-w-[600px] lg:px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mt-4 lg:mt-0 mb-6 shadow-lg rounded-lg ">
                  <Image
                    src={all_pokemons}
                    alt="Pokemons"
                    width={1920}
                    height={1080}
                    className="aspect-3_2 w-full object-cover align-middle rounded-lg"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col-reverse lg:flex-row items-center mt-4 lg:mt-16">
              <div className="w-full md:max-w-[600px] lg:px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg">
                  <Image
                    src={pokemon_details}
                    alt="Pokemon details"
                    width={1920}
                    height={1080}
                    className="aspect-3_2 w-full object-cover align-middle rounded-lg"
                  />
                </div>
              </div>

              <div className="w-full lg:w-5/12 px-4 mr-auto ml-auto text-center lg:text-right">
                <h3 className="text-2xl sm:text-4xl text-[#CE312F] mb-2 font-semibold leading-normal">
                  Pokemons details
                </h3>

                <p className="text-sm sm:text-lg font-light leading-relaxed mt-0 mb-4 text-gray-800">
                  You will be able to see all the details of the Pokémon you
                  desire, including key attributes and evolutions.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50">
          <div className="max-w-screen-2xl mx-auto px-4 lg:pb-10">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-2xl sm:text-4xl font-semibold text-gray-800">
                  Latest technologies
                </h2>
                <p className="text-sm sm:text-lg leading-relaxed mt-4 mb-4 text-gray-500">
                  Harnessing the power of the latest and most advanced
                  technologies, I´ve crafted a solid and visually stunning
                  experience for you. This project stands as a testament of what
                  I´m able to do
                </p>
              </div>
            </div>
            <div className="flex flex-wrap mt-6 lg:mt-12 justify-center">
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-gray-800 p-2 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <Image
                    src={logo_react}
                    alt="Logo Pokémon"
                    width={48}
                    height={48}
                    className=""
                  />
                </div>
                <h6 className="text-xl mt-5 font-semibold text-gray-800">
                  React
                </h6>
                <p className="text-sm sm:text-md mt-2 mb-4 text-gray-500">
                  A powerful JavaScript library for building dynamic and
                  interactive interfaces. React ensures seamless integration and
                  real-time updates, providing a smooth experience.
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-gray-800 p-2 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <Image
                    src={logo_nextjs}
                    alt="Logo Pokémon"
                    width={48}
                    height={48}
                    className=""
                  />
                </div>
                <h5 className="text-xl mt-5 font-semibold text-gray-800">
                  Next.js
                </h5>
                <p className="text-sm sm:text-md mt-2 mb-4 text-gray-500">
                  A powerful framework that enhances performance and
                  scalability. Facilitating server-side rendering and efficient
                  routing.
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-gray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <Image
                    src={logo_typescript}
                    alt="Logo Pokémon"
                    width={48}
                    height={48}
                    className=""
                  />
                </div>
                <h5 className="text-xl mt-5 font-semibold text-gray-800">
                  Typescript
                </h5>
                <p className="text-sm sm:text-md mt-2 mb-4 text-gray-500">
                  Accelerating the development process and ensure code quality
                  with TypeScript. As a statically typed superset of JavaScript,
                  TypeScript brings robustness to the codebase, reducing errors
                  and enhancing overall development efficiency.
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-gray-800 p-2 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <Image
                    src={logo_tailwindcss}
                    alt="Logo Pokémon"
                    width={48}
                    height={48}
                    className=""
                  />
                </div>
                <h5 className="text-xl mt-5 font-semibold text-gray-800">
                  Tailwindcss
                </h5>
                <p className="text-sm sm:text-md mt-2 mb-4 text-gray-500">
                  A utility-first CSS framework. Tailwind CSS streamlines the
                  process of creating visually stunning and responsive user
                  interfaces with a consistent and efficient design system.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
