import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header.js";
import Button from "./components/Button/Button.js";
import GroceryCard from "./components/GroceryCard/GroceryCard.js";

function App() {
  const [groceries, setGroceries] = useState();
  let update = true;

  useEffect(() => {
    fetch("https://expiration-date-project.herokuapp.com/api/expirationDate")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setGroceries(data);
      });
  }, [update]);

  function Add() {
    console.log("add");
  }

  return (
    <div>
      <header>
        <Header />
      </header>
      <Button buttonName="Add" buttonClass="addButton" handleClick={Add} />
      {groceries && <GroceryCard groceries={groceries} />}
    </div>
  );
}

export default App;
