import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function persAcc() {
    const [input, setInput] = useState({ cardName: '', stepen: '', city: '', price: '', avatar: null });
    const navigate = useNavigate();
    const changeHandler2 = (e) => setInput((prev) => ({ ...prev, [e.target.name]: e.target.files[0] }));
    const changeHandler = (e) => setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    const submitHandler = (e) => {
        e.preventDefault();
        const data = new FormData()
        data.append('cardName', input.cardName)
        data.append('stepen', input.stepen)
        data.append('city', input.city)
        data.append('price', input.price)
        data.append('avatar', input.avatar)

        console.log(Object.fromEntries(data));

        fetch('/api/v1/cards', {
            method: 'post',
            body: data
        })
            .then(() => navigate('/'))
    }
    return (
        <div className="content">
            <h2 className="accName">тут_будет_Имя_пользователя</h2>
            <div className="persAcc">Личный кабинет</div>
            <div className="container container--cart">
                <form onSubmit={submitHandler}>
                    <label id="choose2" htmlFor="avatar">Выбрать фото карточки</label>
                    <input
                        type="file"
                        id="avatar"
                        name="avatar"
                        onChange={changeHandler2}
                        accept="image/png, image/jpeg" />
                    <div className="form-floating">
                        <input
                            name='cardName'
                            value={input.cardName}
                            onChange={changeHandler}
                            type="text" className="form-control"
                            id="floatingInput"
                            placeholder="Card Name" />
                        <label htmlFor="floatingInput">Название карточки</label>
                    </div>
                    <div className="form-floating">
                        <input name='stepen' value={input.stepen} onChange={changeHandler} type="text" className="form-control" id="floatingCity" placeholder="City" />
                        <label htmlFor="floatingPassword">Степень изношенности карточки</label>
                    </div>
                    <div className="form-floating">
                        <input name='city' value={input.city} onChange={changeHandler} type="text" className="form-control" id="floatingCity" placeholder="Price" />
                        <label htmlFor="floatingPassword">Город продавца</label>
                    </div>
                    <div className="form-floating">
                        <input name='price' value={input.price} onChange={changeHandler} type="text" className="form-control" id="floatingCity" placeholder="Degree of wear" />
                        <label htmlFor="floatingPassword">Цена</label>
                    </div>
                    <div className="col-12">
                        <div className="d-grid gap-2 col-6 mx-auto">
                            <button
                                id="choose"
                                className="btn btn-orange"
                                type="submit"
                            >Выставить на продажу</button>
                        </div>
                    </div>
                </form>
            </div>
        </div >
    )
}