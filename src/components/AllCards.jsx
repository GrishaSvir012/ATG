import React from 'react';
import Card from './Card';

export default function AllCards({ cards, setCards }) {
  return (

    <div className="row row-cols-3 position: justify- content - between">
      {
        cards
          ? cards.map((card) => (
            <Card
              card={card}
              setCards={setCards}
              key={card.id}
            />
          ))
          : 'Загрузка блеадь!'
      }
    </div>
  );
}
