import React from 'react';

export default function Cart() {
    return (
        <div className="content">
            <h2 className="accName">тут_будет_Имя_пользователя</h2>
            <div className="persAcc">Личный кабинет</div>
            <div className="container container--cart">
                <button className="btn btn-orange">
                    <label id="choose2" for="avatar">Выбрать фото карточки</label>
                    <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" />
                </button>
                <div className="form-floating">
                    <input type="text" className="form-control" id="floatingInput" placeholder="Card Name" />
                    <label for="floatingInput">Название карточки</label>
                </div>
                <div className="form-floating">
                    <input type="text" className="form-control" id="floatingCity" placeholder="City" />
                    <label for="floatingPassword">Степень изношенности карточки</label>
                </div>
                <div className="form-floating">
                    <input type="text" className="form-control" id="floatingCity" placeholder="Price" />
                    <label for="floatingPassword">Город продавца</label>
                </div>
                <div className="form-floating">
                    <input type="text" className="form-control" id="floatingCity" placeholder="Degree of wear" />
                    <label for="floatingPassword">Цена</label>
                </div>
                <div className="col-12">
                    <div className="d-grid gap-2 col-6 mx-auto">
                        <button id="choose" className="btn btn-orange" type="button">Выставить на продажу</button>
                    </div>
                </div>
            </div>
        </div>
    )
}