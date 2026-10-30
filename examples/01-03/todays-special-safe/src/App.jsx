import { useEffect, useState } from 'react';

export default function App() {
  const [special, setSpecial] = useState(null);
  const [error, setError] = useState(null);

  useEffect(function () {
    let ignore = false;
    fetch('/special.json')
      .then(function (response) {
        if (!response.ok) {
          throw new Error('The kitchen answered ' + response.status);
        }
        return response.json();
      })
      .then(function (data) {
        if (!ignore) {
          setSpecial(data);
        }
      })
      .catch(function (problem) {
        if (!ignore) {
          setError(problem.message);
        }
      });
    return function () {
      ignore = true;
    };
  }, []);

  if (error !== null) {
    return <p>❌ No special today: {error}</p>;
  }

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
