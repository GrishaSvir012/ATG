import React from 'react';
import Card from './Card';

export default function AllCards({
  cards, setCards, cardsCart, setCardsCart, authUser
}) {
  return (

    <div className="d-flex justify-content-between flex-wrap">

      {
        cards
          ? cards.map((card) => (
            <Card
              card={card}
              setCards={setCards}
              key={card.id}
              cardsCart={cardsCart}
              setCardsCart={setCardsCart}
              authUser={authUser}
            />
          ))
          : 'ЧОРТ!'
      }
    </div>

  );
}
