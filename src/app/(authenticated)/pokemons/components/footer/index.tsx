import Image from 'next/image'
import Link from 'next/link'

import pokemon_logo from '../../../../../../public/pokemon-logo.png'

export default function Footer() {
  return (
    <>
      <footer className=" bg-[#000029] shadow">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="flex flex-col gap-6 items-center justify-center">
            <Link href="/">
              <Image
                src={pokemon_logo}
                alt="Pokemon logo"
                // layout="responsive"
                loading="lazy"
                width={500}
                height={234}
                className="h-10 w-auto"
              />
            </Link>

            <ul className="flex flex-wrap gap-2 justify-center items-center text-sm font-medium text-gray-400 sm:mb-0 dark:text-gray-400">
              <li>
                <Link
                  href="/"
                  className="rounded-lg px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white "
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/pokemons"
                  className="rounded-lg px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white "
                >
                  Pokemons
                </Link>
              </li>
              <li>
                <Link
                  href="/regions"
                  className="rounded-lg px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white "
                >
                  Regions
                </Link>
              </li>
              <li>
                <Link
                  href="/types"
                  className="rounded-lg px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white "
                >
                  Types
                </Link>
              </li>
            </ul>
          </div>
          <hr className="my-4 sm:mx-auto border-gray-700 lg:my-6" />
          <span className="block text-sm text-gray-400 text-center">
            Made by{' '}
            <a
              href="https://lucaspereira.vercel.app/"
              className="hover:underline"
            >
              Lucas Pereira
            </a>
          </span>
        </div>
      </footer>
    </>
  )
}
