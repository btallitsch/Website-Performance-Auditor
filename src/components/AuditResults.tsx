type Result = {
  performance: number
  accessibility: string[]
  seo: string[]
  suggestions: string[]
}

export default function AuditResults({ results }: { results: Result }) {
  return (
    <div style={{ marginTop: '2rem' }}>
      <h2>Results</h2>
      <p><strong>Performance Score:</strong> {results.performance}/100</p>

      <Section title="Accessibility Issues" items={results.accessibility} />
      <Section title="SEO Checks" items={results.seo} />
      <Section title="Suggestions" items={results.suggestions} />
    </div>
  )
}

function Section({ title, items }: { title: string; items: string[] }) {
  return (
    <div style={{ marginTop: '1rem' }}>
      <h3>{title}</h3>
      <ul>
        {items.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
    </div>
  )
}