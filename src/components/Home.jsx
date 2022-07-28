import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AllCards from './AllCards';

export default function Home() {
  const [cards, setCards] = useState(null);

  useEffect(() => {
    axios.get('/api/v1/cards')
      .then((res) => setCards(res.data));
  }, []);

  return (
    // <div className="col-3 mt-5">
    //   <div className="row-3">
    <AllCards cards={cards} setCards={setCards} />
    // </div>
    // </div>
  );
}
