import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Home from './Home';
import Cart from './Cart';
import NavBarPrivate from './NavBar/NavBarPrivate';
import NavBarPublic from './NavBar/NavBarPublic';
import NavInvisibl from './NavBar/NavInvisibl';
import SignUpForm from './signUpForm/SignUpForm';
import SignInForm from './SignInForm/SignInForm';
import PersAcc from './PersAcc';
import Card from './Card';
import Logout from './logout/logout';

export default function App({ userId, usernameSession }) {
  const [authUser, setAuthUser] = useState({ userId, usernameSession });
  console.log(authUser);
  const [cards, setCards] = useState(null);
  const [cardsCart, setCardsCart] = useState([]);

  useEffect(() => {
    axios.get('/api/v1/cards')
      .then((res) => setCards(res.data));
  }, []);
  // useEffect(() => {
  //   console.log(authUser)
  // })

  return (
    <div>
      {authUser.userId ? <NavBarPrivate /> : <NavBarPublic />}
      <NavInvisibl />
      <Routes>
        <Route path="/" element={<Home cards={cards} setCards={setCards} cardsCart={cardsCart} authUser={authUser} setCardsCart={setCardsCart} />} />
        <Route path="/percAcc" element={<PersAcc />} />
        <Route path="/cart" element={<Cart cards={cards} setCards={setCards} cardsCart={cardsCart} authUser={authUser} setCardsCart={setCardsCart} />} />
        <Route path="/signup" element={<SignUpForm setAuthUser={setAuthUser} authUser={authUser} />} />
        <Route path="/signin" element={<SignInForm setAuthUser={setAuthUser} />} />
        <Route path="/logout" element={<Logout setAuthUser={setAuthUser}/>} />

      </Routes>
    </div>
  );
}
