import { useState } from 'react'

export default function UrlForm({ onSubmit }: { onSubmit: (url: string) => void }) {
  const [url, setUrl] = useState('')

  return (
    <form onSubmit={e => {
      e.preventDefault()
      onSubmit(url)
    }}>
      <input
        value={url}
        onChange={e => setUrl(e.target.value)}
        placeholder="https://example.com"
        style={{ width: '70%', padding: '0.5rem' }}
        required
      />
      <button style={{ marginLeft: '1rem', padding: '0.5rem 1rem' }}>
        Audit
      </button>
    </form>
  )
}