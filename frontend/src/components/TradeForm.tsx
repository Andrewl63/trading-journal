import React, { useState } from "react";

export default function TradeForm() {

  const [ticker, setTicker] = useState("");
  const [entry, setEntry] = useState("");
  const [exit, setExit] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const trade = {
      ticker,
      entry,
      exit
    };

    console.log("Trade added:", trade);
  };

  return (
    <form onSubmit={handleSubmit}>

      <h2>Add Trade</h2>

      <input
        placeholder="Ticker"
        value={ticker}
        onChange={(e) => setTicker(e.target.value)}
      />

      <input
        placeholder="Entry Price"
        value={entry}
        onChange={(e) => setEntry(e.target.value)}
      />

      <input
        placeholder="Exit Price"
        value={exit}
        onChange={(e) => setExit(e.target.value)}
      />

      <button type="submit">Save Trade</button>

    </form>
  );
}