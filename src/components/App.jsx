import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import NavBarPrivate from './NavBar/NavBarPrivate';

export default function App() {
  return (
    <>
      <NavBarPrivate />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}
