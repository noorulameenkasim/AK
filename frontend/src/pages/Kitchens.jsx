import React from 'react';
import '../App.css';

const kitchens = [
  {
    id: 1,
    name: 'Italian Bistro',
    image: 'https://via.placeholder.com/400x300?text=Italian+Bistro',
    rating: 4.2,
    cuisines: ['Italian', 'Pizza']
  },
  {
    id: 2,
    name: 'Sushi House',
    image: 'https://via.placeholder.com/400x300?text=Sushi+House',
    rating: 4.8,
    cuisines: ['Japanese', 'Sushi']
  },
  {
    id: 3,
    name: 'Spicy Thai',
    image: 'https://via.placeholder.com/400x300?text=Spicy+Thai',
    rating: 4.5,
    cuisines: ['Thai', 'Spicy']
  }
];

export default function Kitchens() {
  return (
    <div className="kitchen-grid">
      {kitchens.map((kitchen) => (
        <div key={kitchen.id} className="kitchen-card">
          <img src={kitchen.image} alt={kitchen.name} />
          <div className="kitchen-details">
            <h3>{kitchen.name}</h3>
            <div className="rating">⭐ {kitchen.rating.toFixed(1)}</div>
            <div className="cuisines">
              {kitchen.cuisines.map((cuisine) => (
                <span key={cuisine}>{cuisine}</span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
