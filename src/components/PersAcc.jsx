import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
  const [input, setInput] = useState({
    cardName: '', stepen: '', city: '', price: '',
  });
  const navigate = useNavigate();
  const changeHandler = (e) => setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(input);
    if (input.cardName !== '' && input.stepen !== '' && input.city !== '' && input.price !== '') {
      axios.post('/api/v1', input)
        .then((res) => setAuthUser(res.data));
      navigate('/');
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
              value={input.cardName}
              onChange={changeHandler}
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Card Name"
            />
            <label htmlFor="floatingInput">Название карточки</label>
          </div>
          <div className="form-floating">
            <input value={input.stepen} onChange={changeHandler} type="text" className="form-control" id="floatingCity" placeholder="City" />
            <label htmlFor="floatingPassword">Степень изношенности карточки</label>
          </div>
          <div className="form-floating">
            <input value={input.city} onChange={changeHandler} type="text" className="form-control" id="floatingCity" placeholder="Price" />
            <label htmlFor="floatingPassword">Город продавца</label>
          </div>
          <div className="form-floating">
            <input value={input.price} onChange={changeHandler} type="text" className="form-control" id="floatingCity" placeholder="Degree of wear" />
            <label htmlFor="floatingPassword">Цена</label>
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
