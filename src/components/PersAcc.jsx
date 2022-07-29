import axios from 'axios';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function PersAcc({ setAuthUser }) {
  const location = useLocation();
  const navigate = useNavigate();
  const { card } = location.state;
  console.log(card);
  const [input, setInput] = useState({
    name: card.nameCard, status: card.status, city: card.city, cost: card.cost,
  });
  const changeName = (e) => setInput((prev) => ({ ...prev, name: e.target.value }));
  const changeStatus = (e) => setInput((prev) => ({ ...prev, status: e.target.value }));
  const changeCity = (e) => setInput((prev) => ({ ...prev, city: e.target.value }));
  const changeCost = (e) => setInput((prev) => ({ ...prev, cost: e.target.value }));
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(input);
    if (input.nameCard !== '' && input.status !== '' && input.city !== '' && input.cost !== '') {
      axios.post('/api/v1', input)
        .then(() => navigate('/cart'));
    }
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="content">
        <h2 className="accName">тут_будет_Имя_пользователя</h2>
        <div className="persAcc">Личный кабинет</div>
        <div className="container container--cart">
          <button type="button" className="btn btn-orange">
            <label id="choose2" htmlFor="avatar">Выбрать фото карточки</label>
            <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" />
          </button>
          <div className="form-floating">
            <input
              value={input.nameCard}
              onChange={changeName}
              name="name"
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Card Name"
            />
            <label htmlFor="floatingInput">Название карточки</label>
          </div>
          <div className="form-floating">
            <input value={input.status} onChange={changeStatus} type="text" name="status" className="form-control" id="floatingCity" placeholder="City" />
            <label htmlFor="floatingPassword">{card.status}</label>
          </div>
          <div className="form-floating">
            <input value={input.city} onChange={changeCity} type="text" name="city" className="form-control" id="floatingCity" placeholder="Price" />
            <label htmlFor="floatingPassword">{card.city}</label>
          </div>
          <div className="form-floating">
            <input value={input.cost} onChange={changeCost} type="text" name="cost" className="form-control" id="floatingCity" placeholder="Degree of wear" />
            <label htmlFor="floatingPassword">{card.cost}</label>
          </div>
          <div className="col-12">
            <div className="d-grid gap-2 col-6 mx-auto">
              <button id="choose" className="btn btn-orange" type="button">Выставить на продажу</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
