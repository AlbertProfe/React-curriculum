import { useEffect, useState } from 'react';

async function loadSpecial() {
  const response = await fetch('/special.json');
  return response.json();
}

export default function App() {
  const [special, setSpecial] = useState(null);

  useEffect(function () {
    loadSpecial().then(setSpecial);
  }, []);

  if (special === null) {
    return <p>⏳ Asking the kitchen…</p>;
  }

  return (
    <main>
      <h1>Today's special 🐟</h1>
      <h2>{special.dish}</h2>
      <p>
        {special.price} € at {special.stall}
      </p>
    </main>
  );
}
