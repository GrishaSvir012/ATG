import React from 'react';
import Card from './Card';

export default function AllCards({ cards, setCards }) {
  return (

    <div className="d-flex justify-content-between flex-wrap">

      {
        cards
          ? cards.map((card) => (
            <Card
              card={card}
              setCards={setCards}
              key={card.id}
            />
          ))
          : 'ЧОРТ!'
      }
    </div>

  );
}
