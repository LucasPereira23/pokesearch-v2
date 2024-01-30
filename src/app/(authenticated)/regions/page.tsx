import Image from 'next/image'
import React from 'react'

import home_wallpaper from '../../../../public/home_wallpaper.jpg'
import region_alola from '../../../../public/region_alola.png'
import region_galar from '../../../../public/region_galar.png'
import region_hoenn from '../../../../public/region_hoenn.png'
import region_johto from '../../../../public/region_johto.png'
import region_kalos from '../../../../public/region_kalos.png'
import region_kanto from '../../../../public/region_kanto.png'
import region_sinnoh from '../../../../public/region_sinnoh.png'
import region_unova from '../../../../public/region_unova.png'

export default function Regions() {
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
                    Regions
                  </h1>
                  <p className="mt-4 text-lg text-gray-300">
                    Discover more about the regions of Pokémon
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="pb-8 lg:pb-16 bg-slate-50 -mt-36">
          <div className="max-w-screen-2xl mx-auto px-4">
            <div className="flex flex-wrap justify-center">
              <div className="relative flex justify-center items-center bg-red-400 w-[300px] h-[300px] shadow-lg rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  id="Layer_1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 48 48"
                  xmlSpace="preserve"
                  className="h-3/5 w-3/5"
                >
                  <g>
                    <path
                      style={{ fill: '#CFD8DC' }}
                      d="M24,45c8.04-8.009,14-19.893,14-27c0-2.601-0.254-4.899-0.921-6.315C35.467,6.569,30.119,3,24.057,3   c-6.061,0-11.407,3.57-13.017,8.685C10.369,13.104,10,15.401,10,18C10,25.17,15.961,36.991,24,45z"
                    />
                  </g>
                  <circle style={{ fill: '#FFFFFF' }} cx="24" cy="17" r="8" />
                  <path
                    style={{ fill: '#FF3D00' }}
                    d="M32,17H16c0-4.418,3.582-8,8-8S32,12.582,32,17z"
                  />
                  <path
                    style={{ fill: '#455A64' }}
                    d="M16,17c0,0.339,0.028,0.672,0.069,1h15.862C31.972,17.672,32,17.339,32,17s-0.028-0.672-0.069-1  H16.069C16.028,16.328,16,16.661,16,17z"
                  />
                  <circle style={{ fill: '#455A64' }} cx="24" cy="17" r="4" />
                  <circle style={{ fill: '#FFFFFF' }} cx="24" cy="17" r="2" />
                </svg>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row items-center mt-4 lg:mt-16">
              <div className="w-full lg:w-5/12 px-4 text-center lg:text-left mr-auto ml-auto">
                <h3 className="text-4xl text-[#CE312F] mb-2 font-semibold leading-normal">
                  Kanto
                </h3>
                <p className="text-sm lg:text-lg font-light leading-relaxed mb-4 text-gray-800">
                  The Kanto region is the birthplace of the Pokémon adventure,
                  featuring iconic cities such as Pallet Town and Cerulean City.
                  Trainers embark on their journey from Professor Oak´s lab,
                  encountering classic Pokémon like Pikachu and Charmander.
                  Kanto is known for its diverse landscapes, from the dense
                  Viridian Forest to the volcanic Mt. Moon, providing a rich
                  backdrop for trainers to explore.
                </p>
              </div>

              <div className="w-full md:max-w-[600px] px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mt-4 lg:mt-0 mb-6 shadow-lg rounded-lg ">
                  <Image
                    src={region_kanto}
                    alt="Kanto"
                    width={1920}
                    height={1080}
                    className="aspect-3_2 w-full object-cover align-middle rounded-lg"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col-reverse lg:flex-row items-center mt-4 lg:mt-16">
              <div className="w-full md:max-w-[600px] px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg">
                  <Image
                    src={region_johto}
                    alt="Region johto"
                    width={1920}
                    height={1080}
                    className="aspect-3_2 w-full object-cover align-middle rounded-lg"
                  />
                </div>
              </div>

              <div className="w-full lg:w-5/12 px-4 mr-auto ml-auto text-center lg:text-right">
                <h3 className="text-4xl text-[#CE312F] mb-2 font-semibold leading-normal">
                  Johto
                </h3>

                <p className="text-sm lg:text-lg font-light leading-relaxed mt-0 mb-4 text-gray-800">
                  Johto, situated to the west of Kanto, is known for its
                  seamless blend of tradition and modernity. With cities like
                  Goldenrod and Ecruteak, Johto offers a unique mix of
                  architecture and culture. The region is home to the legendary
                  Pokémon trio, Raikou, Entei, and Suicune, adding a mystical
                  element to the journey. The interconnectedness with Kanto
                  showcases the continuity of the Pokémon world.
                </p>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row items-center mt-4 lg:mt-16">
              <div className="w-full lg:w-5/12 px-4 text-center lg:text-left mr-auto ml-auto">
                <h3 className="text-4xl text-[#CE312F] mb-2 font-semibold leading-normal">
                  Hoenn
                </h3>
                <p className="text-sm lg:text-lg font-light leading-relaxed mb-4 text-gray-800">
                  Hoenn, an expansive region surrounded by ocean, is renowned
                  for its diverse ecosystems. From the bustling metropolis of
                  Mauville City to the volcanic slopes of Mt. Chimney, trainers
                  navigate through a variety of terrains. Hoenn introduces
                  unique features like Pokémon Contests and the Battle Frontier,
                  enhancing the overall gameplay experience and showcasing the
                  region´s distinct charm.
                </p>
              </div>

              <div className="w-full md:max-w-[600px] px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mt-4 lg:mt-0 mb-6 shadow-lg rounded-lg ">
                  <Image
                    src={region_hoenn}
                    alt="Region hoenn"
                    width={1920}
                    height={1080}
                    className="aspect-3_2 w-full object-cover align-middle rounded-lg"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col-reverse lg:flex-row items-center mt-4 lg:mt-16">
              <div className="w-full md:max-w-[600px] px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg">
                  <Image
                    src={region_sinnoh}
                    alt="Region sinnoh"
                    width={1920}
                    height={1080}
                    className="aspect-3_2 w-full object-cover align-middle rounded-lg"
                  />
                </div>
              </div>

              <div className="w-full lg:w-5/12 px-4 mr-auto ml-auto text-center lg:text-right">
                <h3 className="text-4xl text-[#CE312F] mb-2 font-semibold leading-normal">
                  Sinnoh
                </h3>

                <p className="text-sm lg:text-lg font-light leading-relaxed mt-0 mb-4 text-gray-800">
                  Sinnoh is marked by its picturesque landscapes and ancient
                  history. With cities like Jubilife and Veilstone, trainers
                  explore the Great Marsh and challenge the Pokémon League at
                  the Spear Pillar. The mythology surrounding Sinnoh´s legendary
                  Pokémon, Dialga, Palkia, and Giratina, adds an intriguing
                  dimension to the region´s narrative, making it a memorable
                  adventure for trainers.
                </p>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row items-center mt-4 lg:mt-16">
              <div className="w-full lg:w-5/12 px-4 text-center lg:text-left mr-auto ml-auto">
                <h3 className="text-4xl text-[#CE312F] mb-2 font-semibold leading-normal">
                  Unova
                </h3>
                <p className="text-sm lg:text-lg font-light leading-relaxed mb-4 text-gray-800">
                  Unova, inspired by the diverse culture of New York City,
                  introduces a fresh perspective to the Pokémon world. The
                  bustling Castelia City and the technologically advanced
                  Driftveil City showcase the urban side of Unova. The region is
                  known for its extensive bridges, like the Skyarrow Bridge, and
                  introduces the concept of seasonal changes, providing a
                  dynamic and visually appealing environment.
                </p>
              </div>

              <div className="w-full md:max-w-[600px] px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mt-4 lg:mt-0 mb-6 shadow-lg rounded-lg ">
                  <Image
                    src={region_unova}
                    alt="Region unova"
                    width={1920}
                    height={1080}
                    className="aspect-3_2 w-full object-cover align-middle rounded-lg"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col-reverse lg:flex-row items-center mt-4 lg:mt-16">
              <div className="w-full md:max-w-[600px] px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg">
                  <Image
                    src={region_kalos}
                    alt="Region kalos"
                    width={1920}
                    height={1080}
                    className="aspect-3_2 w-full object-cover align-middle rounded-lg"
                  />
                </div>
              </div>

              <div className="w-full lg:w-5/12 px-4 mr-auto ml-auto text-center lg:text-right">
                <h3 className="text-4xl text-[#CE312F] mb-2 font-semibold leading-normal">
                  Kalos
                </h3>

                <p className="text-sm lg:text-lg font-light leading-relaxed mt-0 mb-4 text-gray-800">
                  Kalos, inspired by France, is known for its grand architecture
                  and vibrant cities. Lumiose City stands tall as the
                  centerpiece, while the region features the iconic Tower of
                  Mastery. The introduction of Mega Evolution further enhances
                  the gameplay, offering trainers new strategies to explore.
                  Kalos showcases a mix of history and modernity, creating a
                  visually stunning and immersive Pokémon experience.
                </p>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row items-center mt-4 lg:mt-16">
              <div className="w-full lg:w-5/12 px-4 text-center lg:text-left mr-auto ml-auto">
                <h3 className="text-4xl text-[#CE312F] mb-2 font-semibold leading-normal">
                  Alola
                </h3>
                <p className="text-sm lg:text-lg font-light leading-relaxed mb-4 text-gray-800">
                  Alola, a tropical paradise inspired by Hawaii, introduces the
                  concept of regional forms and the Alolan Pokémon League. With
                  unique trial challenges replacing traditional gyms, trainers
                  explore the islands of Melemele and Akala. The region´s
                  cultural influence is evident in its laid-back atmosphere,
                  diverse wildlife, and the guardian deities, adding a
                  refreshing twist to the traditional Pokémon journey.
                </p>
              </div>

              <div className="w-full md:max-w-[600px] px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mt-4 lg:mt-0 mb-6 shadow-lg rounded-lg ">
                  <Image
                    src={region_alola}
                    alt="Region alola"
                    width={1920}
                    height={1080}
                    className="aspect-3_2 w-full object-cover align-middle rounded-lg"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col-reverse lg:flex-row items-center mt-4 lg:mt-16">
              <div className="w-full md:max-w-[600px] px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg">
                  <Image
                    src={region_galar}
                    alt="Region galar"
                    width={1920}
                    height={1080}
                    className="aspect-3_2 w-full object-cover align-middle rounded-lg"
                  />
                </div>
              </div>

              <div className="w-full lg:w-5/12 px-4 mr-auto ml-auto text-center lg:text-right">
                <h3 className="text-4xl text-[#CE312F] mb-2 font-semibold leading-normal">
                  Galar
                </h3>

                <p className="text-sm lg:text-lg font-light leading-relaxed mt-0 mb-4 text-gray-800">
                  Galar, inspired by the United Kingdom, is known for its
                  industrial cities like Hammerlocke and the dynamic Wild Area.
                  The region features the Galarian forms of certain Pokémon,
                  showcasing adaptations to the new environment. Galar
                  introduces the concept of Dynamax and Gigantamax, transforming
                  Pokémon battles into epic encounters in stadiums filled with
                  cheering fans.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
