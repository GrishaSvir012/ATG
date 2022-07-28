import React from 'react';
import Card from './Card';

export default function AllCards({ cards, setCards }) {
  return (

    <div className="row-3 p-8">

      {cards
        ? cards.map((card) => (
          <Card
            card={card}
            setCards={setCards}
            key={card.id}
          />
        ))
        : 'Загрузка блеадь!'}
    </div>
  );
}
