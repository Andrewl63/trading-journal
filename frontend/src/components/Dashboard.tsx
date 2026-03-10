
export default function Dashboard() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Trading Dashboard</h1>

      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        
        <div style={{ border: "1px solid #ccc", padding: "20px", flex: 1 }}>
          <h3>Total Profit</h3>
          <p>$0.00</p>
        </div>

        <div style={{ border: "1px solid #ccc", padding: "20px", flex: 1 }}>
          <h3>Win Rate</h3>
          <p>0%</p>
        </div>

        <div style={{ border: "1px solid #ccc", padding: "20px", flex: 1 }}>
          <h3>Total Trades</h3>
          <p>0</p>
        </div>

      </div>
    </div>
  );
}