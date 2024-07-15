'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Page() {

  const [Name, setName] = useState('')

  useEffect(() => {
    console.log('Loading')
  }, [])

  return (
    <>
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8" href="/Contact">
        <Link className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" href="/contact">
          Página Inicial
        </Link>
      </main>
    </>
  )
}
