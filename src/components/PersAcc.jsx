import React from 'react';

export default function Cart() {
    return (
        <div class="content">
            <h2 class="accName">тут_будет_Имя_пользователя</h2>
            <div class="persAcc">Личный кабинет</div>
            <div class="container container--cart">
                <button class="btn btn-orange">
                    <label id="choose2" for="avatar">Выбрать фото карточки</label>
                    <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" />
                </button>
                <div class="form-floating">
                    <input type="text" class="form-control" id="floatingInput" placeholder="Card Name" />
                    <label for="floatingInput">Название карточки</label>
                </div>
                <div class="form-floating">
                    <input type="text" class="form-control" id="floatingCity" placeholder="City" />
                    <label for="floatingPassword">Степень изношенности карточки</label>
                </div>
                <div class="form-floating">
                    <input type="text" class="form-control" id="floatingCity" placeholder="Price" />
                    <label for="floatingPassword">Город продавца</label>
                </div>
                <div class="form-floating">
                    <input type="text" class="form-control" id="floatingCity" placeholder="Degree of wear" />
                    <label for="floatingPassword">Цена</label>
                </div>
                <div class="col-12">
                    <div class="d-grid gap-2 col-6 mx-auto">
                        <button id="choose" class="btn btn-orange" type="button">Выставить на продажу</button>
                    </div>
                </div>
            </div>
        </div>
    )
}