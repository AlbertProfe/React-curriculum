function Cherries() {
  return <li>🍒 Cherries · 7 € / kg</li>;
}

function Lemons() {
  return <li>🍋 Lemons · 3 € / kg</li>;
}

export function FruitStall() {
  return (
    <section>
      <h2>Fruit stall</h2>
      <ul>
        <Cherries />
        <Lemons />
      </ul>
    </section>
  );
}

export function FishStall() {
  return (
    <section>
      <h2>Fish stall</h2>
      <p>🐟 Hake · 15 € / kg</p>
    </section>
  );
}
