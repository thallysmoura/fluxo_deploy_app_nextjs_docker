'use client'

import Link from 'next/link'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello World</h1>
      <Link className="text-sm font-semibold text-gray-900" href="/contact">
              Contact support <span aria-hidden="true">&rarr;</span>
      </Link>
    </main>
  );
}
