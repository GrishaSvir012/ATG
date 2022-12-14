import axios from 'axios';
import React from 'react';

export default function CardCart({
  card, setCards, cardsCart, setCardsCart, authUser,
}) {
  console.log(authUser, 'User in Card');
  // const changeBuyCard = () => {
  //   axios.get('/api/v1/basket1', { card, authUser })
  //     .then((res) => setCards(res.data));

  //   setCardsCart();
  // };

  return (
    <div
      className="card"
      style={{ backgroundColor: 'purple', width: 250 }}
    >
      <img src={`../../img/${card.img}`} className="card-img-top" alt="Картинка" />
      <div className="card-body py-0">
        <h5 className="card-title text-light">{card.nameCard}</h5>
        <ul>
          <li className="list-group-item text-info">
            {card.cost}
            $
          </li>
          <li className="list-group-item text-info">
            Uniq:
            {' '}
            {card.status}
          </li>
        </ul>
      </div>
      <div className="card-body py-0">
        <button type="button" className="btn btn-warning">Купить</button>
      </div>
    </div>
  );
}
