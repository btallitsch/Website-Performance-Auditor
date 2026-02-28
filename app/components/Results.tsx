import ScoreGauge from './ScoreGauge'

export default function Results({ data }: any) {
  return (
    <div className="mt-6 space-y-4">
      <ScoreGauge score={data.performance} />
      <List title="Accessibility" items={data.accessibility} />
      <List title="SEO" items={data.seo} />
      <List title="Suggestions" items={data.suggestions} />
    </div>
  )
}

function List({ title, items }: any) {
  return (
    <div>
      <h3 className="font-semibold">{title}</h3>
      <ul className="list-disc ml-6">
        {items.map((i: string, idx: number) => <li key={idx}>{i}</li>)}
      </ul>
    </div>
  )
}