'use client'
import { useState } from 'react'
import Results from './Results'

export default function UrlForm() {
  const [url, setUrl] = useState('')
  const [data, setData] = useState<any>(null)

  async function runAudit() {
    const res = await fetch('/api/audit?url=' + url)
    setData(await res.json())
  }

  return (
    <div>
      <div className="flex gap-2">
        <input className="flex-1 p-2 rounded bg-slate-800"
          placeholder="https://example.com"
          value={url}
          onChange={e => setUrl(e.target.value)}
        />
        <button onClick={runAudit}
          className="bg-indigo-600 px-4 rounded">Audit</button>
      </div>
      {data && <Results data={data} />}
    </div>
  )
}