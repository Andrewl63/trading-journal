import { useNavigate } from 'react-router-dom'

export default function Dashboard() {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn')
    navigate('/login')
  }

  return (
    <div className="flex min-h-screen bg-gray-900 text-white">

      {/* Sidebar */}
      <div className="w-64 bg-gray-800 p-6">
        <h2 className="text-2xl font-bold mb-8">Trading Journal</h2>

        <ul className="space-y-4">
          <li className="hover:text-blue-400 cursor-pointer">Dashboard</li>
          <li className="hover:text-blue-400 cursor-pointer">Trades</li>
          <li className="hover:text-blue-400 cursor-pointer">Statistics</li>
          <li className="hover:text-blue-400 cursor-pointer">Settings</li>
        </ul>

        <button
          onClick={handleLogout}
          className="mt-10 w-full bg-red-500 py-2 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>

      {/* Main content */}
      <div className="flex-1 p-8">

        {/* Top bar */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Dashboard</h1>

          <button className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600">
            + Add Trade
          </button>
        </div>

        {/* Stats cards */}
        <div className="grid grid-cols-3 gap-6 mb-10">

          <div className="bg-gray-800 p-6 rounded">
            <p className="text-gray-400">Total P/L</p>
            <h2 className="text-2xl font-bold text-green-400">$0</h2>
          </div>

          <div className="bg-gray-800 p-6 rounded">
            <p className="text-gray-400">Win Rate</p>
            <h2 className="text-2xl font-bold">0%</h2>
          </div>

          <div className="bg-gray-800 p-6 rounded">
            <p className="text-gray-400">Trades</p>
            <h2 className="text-2xl font-bold">0</h2>
          </div>

        </div>

        {/* Trade table */}
        <div className="bg-gray-800 rounded p-6">

          <h2 className="text-xl font-bold mb-4">Recent Trades</h2>

          <table className="w-full text-left">

            <thead>
              <tr className="border-b border-gray-700">
                <th className="py-2">Date</th>
                <th>Symbol</th>
                <th>Side</th>
                <th>P/L</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b border-gray-700">
                <td className="py-3">No trades yet</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr>
            </tbody>

          </table>

        </div>

      </div>
    </div>
  )
}