/* eslint-disable react-hooks/rules-of-hooks */
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'

import NextTopLoader from 'nextjs-toploader'

import Footer from './pokemons/components/footer'
import Header from './pokemons/components/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pokedex v2',
  description: 'New pokedex v2'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <NextTopLoader
          color="#CE312F"
          showSpinner={false}
          shadow="0 0 10px #CE312F,0 0 5px #CE312F"
        />
        <Header />
        <div className="flex-1">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-8 h-full">
            {children}
          </div>
        </div>
        <Footer />
      </body>
    </html>
  )
}
