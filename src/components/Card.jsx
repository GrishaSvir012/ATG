/* eslint-disable react/prop-types */
import React from 'react';

export default function Card({ card, setCards }) {
  return (
    <div
      className="card col"
      style={{ width: '18rem', backgroundColor: 'purple' }}
    >
      <img src={`../../img/${card.img}`} className="card-img-top" alt="Картинка" />
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
