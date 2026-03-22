import Sidebar from '../components/Sidebar'
import StatsCard from '../components/StatsCard'
import TradeTable from '../components/TradeTable'

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      <Sidebar />

      <div className="flex-1 p-8">
        <h1 className="mb-8 text-3xl font-bold">Dashboard</h1>

        <div className="mb-10 grid grid-cols-3 gap-6">
          <StatsCard title="Total P/L" value="$0" />
          <StatsCard title="Win Rate" value="0%" />
          <StatsCard title="Trades" value="0" />
        </div>

        <TradeTable />
      </div>
    </div>
  )
}