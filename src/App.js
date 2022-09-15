import './App.css';
import React, { useState, useEffect } from 'react';

import GroceryCard from './components/GroceryCard/GroceryCard.js';

function App() {
  let [groceries, setGroceries] = useState();
  let update = true;

  useEffect(() => {
    fetch('https://expiration-date-project.herokuapp.com/api/expirationDate')
    .then(res => {
      return res.json();
    })
    .then(data => {
      console.log(data);
      setGroceries(data);
    })
  }, [update]);

  return(
    <div>
      {groceries && <GroceryCard groceries={groceries} />}
    </div>
  )
};

export default App;
