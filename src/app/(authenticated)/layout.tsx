/* eslint-disable react-hooks/rules-of-hooks */
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import '../styles/globals.css'

import NextTopLoader from 'nextjs-toploader'

import Footer from './pokemons/components/footer'
import Header from './pokemons/components/header'

const poppins = Poppins({
  subsets: ['latin'],
  weight: '400'
})

export const metadata: Metadata = {
  title: 'PokeSearch v2',
  description: 'New pokeSearch v2'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${poppins.className} flex flex-col min-h-screen`}>
        <NextTopLoader
          color="#CE312F"
          showSpinner={false}
          shadow="0 0 10px #CE312F,0 0 5px #CE312F"
        />
        <Header />
        <div className="flex-1 bg-slate-50">
          <div className="h-full">{children}</div>
        </div>
        <Footer />
      </body>
    </html>
  )
}
