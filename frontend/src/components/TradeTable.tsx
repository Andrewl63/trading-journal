
export default function TradeTable() {

  const trades = [
    { ticker: "AAPL", entry: 100, exit: 110 },
    { ticker: "TSLA", entry: 200, exit: 195 }
  ];

  return (
    <table>

      <thead>
        <tr>
          <th>Ticker</th>
          <th>Entry</th>
          <th>Exit</th>
        </tr>
      </thead>

      <tbody>
        {trades.map((trade, index) => (
          <tr key={index}>
            <td>{trade.ticker}</td>
            <td>{trade.entry}</td>
            <td>{trade.exit}</td>
          </tr>
        ))}
      </tbody>

    </table>
  );
}