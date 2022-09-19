import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header.js';
import Button from './components/Button/Button.js';
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

  function buttonClick(){
    console.log("clicked");
  }

  return(
    <div>
      <header>
        <Header />
      </header>
      <Button buttonName="red" buttonClass="redButton" handleClick={buttonClick}/>
      {groceries && <GroceryCard groceries={groceries} />}
    </div>
  )
};

export default App;
