import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Home';

export default function PrivateRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/lk" element={<LK />} />
      <Route path="/cards/:id" element={<Cart />} /> */}
    </Routes>
  );
}