import { useState } from 'react';
import NameTag from './NameTag.jsx';

export default function App() {
  const [customers, setCustomers] = useState(0);

  function handleArrive() {
    setCustomers(customers + 1);
  }

  return (
    <main>
      <h1>Customers today: {customers}</h1>
      <button onClick={handleArrive}>🛒 One more customer</button>
      <NameTag />
    </main>
  );
}
