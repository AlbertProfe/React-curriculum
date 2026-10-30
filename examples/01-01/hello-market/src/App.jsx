function Tomatoes() {
  return <li>🍅 Tomatoes · 2.50 € / kg</li>;
}

function Artichokes() {
  return <li>🌿 Artichokes · 3.20 € / kg</li>;
}

export default function App() {
  const stallName = "Tom's vegetable stall";

  return (
    <main>
      <h1>{stallName}</h1>
      <ul>
        <Tomatoes />
        <Artichokes />
      </ul>
    </main>
  );
}
