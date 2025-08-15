import React, { useEffect, useState } from 'react';

export default function Kitchens() {
  const [kitchens, setKitchens] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/kitchens')
      .then((res) => res.json())
      .then(setKitchens);
  }, []);

  const placeOrder = (kitchenId) => {
    fetch('http://localhost:5000/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId: 1, kitchenId, items: [] }),
    })
      .then((res) => res.json())
      .then((data) => alert(`Order ${data.id} placed`));
  };

  return (
    <div className="container fade-in">
      <h2>Kitchens</h2>
      <ul>
        {kitchens.map((k) => (
          <li key={k.id}>
            {k.name}
            <button onClick={() => placeOrder(k.id)}>Order</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
