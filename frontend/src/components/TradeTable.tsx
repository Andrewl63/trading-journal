export default function TradeTable() {
  return (
    <div className="rounded bg-gray-800 p-6">
      <h2 className="mb-4 text-xl font-bold">Recent Trades</h2>

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
  )
}