import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
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

export default function App({usernameSession}) {
  const [authUser, setAuthUser] = useState(usernameSession);

  useEffect(() => {
    console.log(authUser)
  })

  return (
    <div>
      {authUser ? <NavBarPrivate /> : <NavBarPublic />}
      <NavInvisibl />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/persAcc" element={<PersAcc />} />
        <Route path="/card" element={<Card />} />
        <Route path="/signup" element={<SignUpForm setAuthUser={setAuthUser} authUser={authUser} />} />
        <Route path="/signin" element={<SignInForm setAuthUser={setAuthUser}/>} />
        <Route path="/logout" element={<Logout setAuthUser={setAuthUser}/>} />

      </Routes>
    </div>
  );
}
