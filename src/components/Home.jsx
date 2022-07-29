import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AllCards from './AllCards';

export default function Home({ setCards, cards, cardsCart, authUser, setCardsCart }) {
  return (
    // <div className="col-3 mt-5">
    //   <div className="row-3">
    <AllCards cards={cards} setCards={setCards} authUser={authUser} cardsCart={cardsCart} setCardsCart={setCardsCart}/>
    // </div>
    // </div>
  );
}
