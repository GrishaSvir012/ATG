import React from 'react';
import { image } from '../../public/img';

export default function Card({ card, setCards }) {
  return (
    <div className="card" style="width: 18rem;">
      {/* <img src={image} className="card-img-top" alt="Картинка" /> */}
      <div className="card-body">
        <h5 className="card-title">{card.nameCard}</h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{card.cost}</li>
        <li className="list-group-item">{card.status}</li>
      </ul>
      <div className="card-body">
        <button type="button">Купить</button>
      </div>
    </div>
  );
}
