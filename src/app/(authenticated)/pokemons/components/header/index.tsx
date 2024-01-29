'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

import pokemon_logo from '../../../../../../public/pokemon-logo.png'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [currentPath, setCurrentPath] = useState<string>(
    window?.location?.pathname
  )
  const [isHeaderFixed, setIsHeaderFixed] = useState<boolean>(false)
  const currentPage = usePathname()

  useEffect(() => {
    setCurrentPath(currentPage || '/')
  }, [currentPage])

  useEffect(() => {
    const handleScroll = () => {
      const isFixed = window.scrollY > 0
      setIsHeaderFixed(isFixed)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenuRedirect = (path: string) => {
    setIsMobileMenuOpen(false)
    setCurrentPath(path)
  }

  const changeCurrentPath = (path: string) => {
    setCurrentPath(path)
  }

  const isActive = (path: string, long_path?: boolean) => {
    if (long_path) {
      return currentPath?.includes(path)
        ? 'bg-gray-900 text-white'
        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
    } else {
      return currentPath === path
        ? 'bg-gray-900 text-white'
        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
    }
  }

  const headerClass = `bg-[#000029] ${
    isHeaderFixed
      ? 'fixed top-0 w-full z-50 transition-all duration-300 ease-in-out shadow-xl'
      : ''
  }`

  return (
    <>
      <div className={`${isHeaderFixed ? ' mt-16 w-full' : ''}`}></div>
      <nav className={headerClass}>
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-[64px] items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-lg p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={toggleMobileMenu}
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>

                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>

                <svg
                  className="hidden h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <Image
                  src={pokemon_logo}
                  alt="Pokemon logo"
                  loading="lazy"
                  width={500}
                  height={234}
                  className="h-10 w-auto"
                />
              </div>
              <div className="hidden sm:ml-6 sm:flex justify-center items-center">
                <div className="flex space-x-4">
                  <Link
                    href="/"
                    className={`rounded-lg px-3 py-2 text-sm font-medium ${isActive(
                      '/'
                    )}`}
                    aria-current="page"
                    onClick={() => changeCurrentPath('/')}
                  >
                    Home
                  </Link>
                  <Link
                    href="/pokemons"
                    className={`rounded-lg px-3 py-2 text-sm font-medium ${isActive(
                      '/pokemons',
                      true
                    )}`}
                    onClick={() => changeCurrentPath('/pokemons')}
                  >
                    Pokemons
                  </Link>
                  <Link
                    href="/regions"
                    className={`rounded-lg px-3 py-2 text-sm font-medium ${isActive(
                      '/regions'
                    )}`}
                    onClick={() => changeCurrentPath('/regions')}
                  >
                    Regions
                  </Link>
                  <Link
                    href="/types"
                    className={`rounded-lg px-3 py-2 text-sm font-medium ${isActive(
                      '/types'
                    )}`}
                    onClick={() => changeCurrentPath('/types')}
                  >
                    Types
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="sm:hidden" id="mobile-menu">
            <div className="space-y-1 px-2 pb-3 pt-2">
              <Link
                href="/"
                className={`text-white block rounded-lg px-3 py-2 text-base font-medium ${isActive(
                  '/'
                )}`}
                aria-current="page"
                onClick={() => closeMobileMenuRedirect('/')}
              >
                Home
              </Link>
              <Link
                href="/pokemons"
                className={`text-white block rounded-lg px-3 py-2 text-base font-medium ${isActive(
                  '/pokemons'
                )}`}
                onClick={() => closeMobileMenuRedirect('/pokemons')}
              >
                Pokemons
              </Link>
              <Link
                href="/regions"
                className={`text-white block rounded-lg px-3 py-2 text-base font-medium ${isActive(
                  '/regions'
                )}`}
                onClick={() => closeMobileMenuRedirect('/regions')}
              >
                Regions
              </Link>
              <Link
                href="/types"
                className={`text-white block rounded-lg px-3 py-2 text-base font-medium ${isActive(
                  '/types'
                )}`}
                onClick={() => closeMobileMenuRedirect('/types')}
              >
                Types
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}
