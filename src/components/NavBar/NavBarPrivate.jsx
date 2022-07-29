import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function NavBarPrivate() {
  return (
    <nav className="navbar bg-light fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">MTG</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Оглавление</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/percAcc">Личный кабинет</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cart">Корзина</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/logout">Выход</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
