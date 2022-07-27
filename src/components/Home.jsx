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
    <div className="col">
      <div className="row">
        <AllCards cards={cards} setCards={setCards} />
      </div>
    </div>
  );
}
