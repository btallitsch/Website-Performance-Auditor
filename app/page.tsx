// import UrlForm from './components/UrlForm'

// export default function Home() {
//   return (
//     <main className="max-w-3xl mx-auto p-6">
//       <h1 className="text-3xl font-bold mb-4">Website Performance Auditor</h1>
//       <UrlForm />
//     </main>
//   )
// }
'use client'

import { useState } from 'react'
import Results from './Results'
import Link from 'next/link'

export default function HomePage() {
  const [url, setUrl] = useState('')
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function runAudit() {
    setError(null)

    if (!url.trim()) {
      setError('Please enter a URL')
      return
    }

    let normalizedUrl = url
    if (!/^https?:\/\//i.test(normalizedUrl)) {
      normalizedUrl = `https://${normalizedUrl}`
    }

    try {
      setLoading(true)
      const res = await fetch(`/api/audit?url=${encodeURIComponent(normalizedUrl)}`)
      const json = await res.json()
      setData(json)
    } catch {
      setError('Failed to run audit. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 bg-slate-900 text-white">
      <h1 className="text-4xl font-bold mb-4">Website Performance Auditor</h1>
      <p className="mb-8 text-center max-w-xl text-slate-300">
        Enter a URL to get a performance, accessibility, and SEO audit.
      </p>

      {/* Audit Form */}
      <div className="w-full max-w-md">
        <div className="flex gap-2">
          <input
            className="flex-1 p-3 rounded bg-slate-800 border border-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="https://example.com"
            value={url}
            onChange={e => setUrl(e.target.value)}
          />
          <button
            onClick={runAudit}
            disabled={loading}
            className="bg-indigo-600 px-4 rounded disabled:opacity-50 hover:bg-indigo-500 transition"
          >
            {loading ? 'Running audit…' : 'Audit'}
          </button>
        </div>

        {error && <p className="text-sm text-red-400 mt-2">{error}</p>}
      </div>

      {/* Results */}
      {data && <div className="mt-8 w-full max-w-3xl"><Results data={data} /></div>}

      {/* About link */}
      <div className="mt-6 text-sm text-slate-400">
        <Link href="/about" className="underline hover:text-white transition">
          About this project
        </Link>
      </div>
    </main>
  )
}
