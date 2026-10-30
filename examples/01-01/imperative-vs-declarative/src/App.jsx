import { useState } from 'react';

export default function App() {
  const [stock, setStock] = useState(5);

  function handleSell() {
    setStock(stock - 1);
  }

  return (
    <section>
      <h2>Tomatoes (declarative)</h2>
      <p>In stock: {stock} kg</p>
      <button onClick={handleSell} disabled={stock === 0}>
        Sell 1 kg
      </button>
    </section>
  );
}
