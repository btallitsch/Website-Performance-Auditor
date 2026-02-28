'use client'
import { useState } from 'react'
import Results from './Results'

export default function UrlForm() {
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
    <div className="space-y-4">
      <div className="flex gap-2">
        <input
          className="flex-1 p-2 rounded bg-slate-800 border border-slate-700"
          placeholder="https://example.com"
          value={url}
          onChange={e => setUrl(e.target.value)}
        />
        <button
          onClick={runAudit}
          disabled={loading}
          className="bg-indigo-600 px-4 rounded disabled:opacity-50"
        >
          {loading ? 'Running audit…' : 'Audit'}
        </button>
      </div>

      {error && (
        <p className="text-sm text-red-400">{error}</p>
      )}

      {data && <Results data={data} />}
    </div>
  )
}
