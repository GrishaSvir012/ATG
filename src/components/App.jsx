import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import NavBarPrivate from './NavBar/NavBarPrivate';
import NavBarPublic from './NavBar/NavBarPublic';
import NavInvisibl from './NavBar/NavInvisibl';

export default function App() {
  return (
    <>
      <NavBarPublic />
      <NavInvisibl />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}
