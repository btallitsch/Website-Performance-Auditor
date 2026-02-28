import { useState } from 'react'
import UrlForm from './components/UrlForm'
import AuditResults from './components/AuditResults'
import { runAudit } from './logic/auditEngine'

export default function App() {
  const [results, setResults] = useState(null)

  const handleAudit = async (url: string) => {
    const data = await runAudit(url)
    setResults(data)
  }

  return (
    <div style={{ maxWidth: 800, margin: '2rem auto', fontFamily: 'sans-serif' }}>
      <h1>Website Performance Auditor</h1>
      <UrlForm onSubmit={handleAudit} />
      {results && <AuditResults results={results} />}
    </div>
  )
}