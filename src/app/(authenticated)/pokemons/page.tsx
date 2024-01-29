'use client'
import { useEffect, useState } from 'react'

import RenderPokemons from './components/render-pokemons/index' // Update the path accordingly

import { getPokemonDetails } from './apirequests/get-pokemon-by-name'
import { getPokemons } from './apirequests/get-pokemons'

interface Pokemon {
  id: number
  name: string
}

interface Region {
  name: string
  startId: number
  endId: number
}

const regions: Record<string, Region> = {
  all: { name: 'All regions', startId: 1, endId: 898 },
  kanto: { name: 'Kanto', startId: 1, endId: 151 },
  johto: { name: 'Johto', startId: 152, endId: 251 },
  hoenn: { name: 'Hoenn', startId: 252, endId: 386 },
  sinnoh: { name: 'Sinnoh', startId: 387, endId: 493 },
  unova: { name: 'Unova', startId: 494, endId: 649 },
  kalos: { name: 'Kalos', startId: 650, endId: 721 },
  alola: { name: 'Alola', startId: 722, endId: 809 },
  galar: { name: 'Galar', startId: 810, endId: 898 }
}

export default function Pokemons() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([])
  const [filteredPokemons, setFilteredPokemons] = useState<Pokemon[]>([])
  const [searchInput, setSearchInput] = useState('')
  const [pokemonNotFound, setPokemonNotFound] = useState(false)
  const [selectedRegion, setSelectedRegion] = useState<string>('all')
  const [loadingIndex, setLoadingIndex] = useState(0)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchPokemons = async () => {
      const initialPokemons = await getPokemons(27, 0)
      setPokemons(initialPokemons)
    }

    fetchPokemons()
  }, [])

  useEffect(() => {
    fetchPokemonsByRegion(27, regions[selectedRegion]?.startId - 1 || 0)
  }, [selectedRegion])

  const fetchPokemonsByRegion = async (count: number, index: number) => {
    setLoading(true)
    setLoadingIndex(index)
    const newPokemons = await getPokemons(count, index)
    setPokemons(newPokemons)
    setLoading(false)
  }

  const handleSearch = async () => {
    setLoading(true)

    if (searchInput.trim() !== '') {
      await handleSearchWithInput()
    } else {
      await handleSearchWithoutInput()
    }

    setLoading(false)
  }

  const handleSearchWithInput = async () => {
    setLoading(true)

    const pokemonDetails = await getPokemonDetails(searchInput.toLowerCase())
    const pokemonArray = pokemonDetails.length === 0 ? null : [pokemonDetails]

    if (pokemonArray !== null) {
      setFilteredPokemons(pokemonArray)
      setPokemonNotFound(false)
    } else {
      setFilteredPokemons([])
      setPokemonNotFound(true)
    }
    setLoading(false)
  }

  const handleSearchWithoutInput = async () => {
    setLoading(true)

    const regionStartId = regions[selectedRegion]?.startId - 1 || 0
    const newPokemons = await getPokemons(27, regionStartId)

    setPokemons(newPokemons)
    setFilteredPokemons([])
    setPokemonNotFound(false)

    setLoading(false)
  }

  const handleKeyPress = ({ key }: { key: string }) => {
    if (key === 'Enter') {
      handleSearch()
    }
  }

  const handleRegionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const region = e.target.value
    setSelectedRegion(region)
  }

  const handleLoadMore = async () => {
    const newLoadingIndex = loadingIndex + 27
    setLoading(true)
    setLoadingIndex(newLoadingIndex)
    const newPokemons = await getPokemons(27, newLoadingIndex)
    setPokemons((prevPokemons) => [...prevPokemons, ...newPokemons])
    setLoading(false)
  }

  const renderContent = () => {
    if (filteredPokemons.length > 0 && !pokemonNotFound) {
      return (
        <RenderPokemons
          pokemons={filteredPokemons}
          regions={regions}
          selectedRegion={selectedRegion}
          handleLoadMore={handleLoadMore}
          loading={loading}
          filtered={true}
        />
      )
    } else if (pokemons.length > 0 && !pokemonNotFound) {
      return (
        <RenderPokemons
          pokemons={pokemons}
          regions={regions}
          selectedRegion={selectedRegion}
          handleLoadMore={handleLoadMore}
          loading={loading}
          filtered={false}
        />
      )
    } else if (loading) {
      return <LoadingSpinner />
    } else if (pokemonNotFound && !loading) {
      return <NotFoundMessage />
    } else {
      return null
    }
  }

  const LoadingSpinner = () => (
    <div className="my-48 border-gray-300 h-12 w-12 animate-spin rounded-full border-4 border-t-[#CE312F]" />
  )

  const NotFoundMessage = () => (
    <h1 className="text-3xl text-red-500 my-48 mx-auto">Pokemon not found</h1>
  )

  return (
    <>
      <div className="max-w-screen-xl my-10 mx-auto px-4 sm:px-8">
        <div className="md:mx-[50px]">
          <div className="flex flex-row justify-center sm:justify-between items-center flex-wrap gap-2">
            <div className="flex flex-row gap-2">
              <input
                type="text"
                id="name"
                placeholder="Pokemon name/id"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                onKeyDown={handleKeyPress}
                className="block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-[#CE312F] focus:ring focus:ring-[#CE312F] focus:ring-opacity-50"
              />

              <button
                onClick={handleSearch}
                className="active:scale-95 rounded-lg bg-[#CE312F] px-8 py-2 font-medium text-white outline-none hover:opacity-90"
              >
                Search
              </button>
            </div>

            <div className="flex w-full max-w-[363px] sm:max-w-none sm:w-auto">
              <select
                id="status"
                value={selectedRegion}
                onChange={handleRegionChange}
                className="block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-[#CE312F] focus:ring focus:ring-[#CE312F] focus:ring-opacity-50"
              >
                {Object.entries(regions).map(([key, region]) => (
                  <option key={key} value={key} className="capitalize">
                    {region.name.charAt(0).toUpperCase() + region.name.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center">{renderContent()}</div>
      </div>
    </>
  )
}
