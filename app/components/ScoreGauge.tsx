import { RadialBarChart, RadialBar } from 'recharts'

export default function ScoreGauge({ score }: { score: number }) {
  const data = [{ value: score, fill: '#6366f1' }]

  return (
    <div className="w-48">
      <RadialBarChart width={180} height={180} innerRadius="70%" outerRadius="100%" data={data}>
        <RadialBar dataKey="value" />
        <text x={90} y={100} textAnchor="middle" fill="#fff" fontSize="24">
          {score}
        </text>
      </RadialBarChart>
    </div>
  )
}