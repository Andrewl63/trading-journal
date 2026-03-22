type StatsCardProps = {
  title: string
  value: string
}

export default function StatsCard({ title, value }: StatsCardProps) {
  return (
    <div className="rounded bg-gray-800 p-6">
      <p className="text-gray-400">{title}</p>
      <h2 className="text-2xl font-bold">{value}</h2>
    </div>
  )
}