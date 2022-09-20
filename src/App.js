import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header/Header.js";
import Button from "./components/Button/Button.js";
import GroceryCard from "./components/GroceryCard/GroceryCard.js";


function App() {
  const [groceries, setGroceries] = useState();
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    fetch("https://expiration-date-project.herokuapp.com/api/expirationDate")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setGroceries(data);
      });
  },[update]);

  function Add() {
    console.log("add");
  }

  async function deleteGrocery(id) {
    axios.delete(`https://expiration-date-project.herokuapp.com/api/expirationDate/${id}`)
    .then(res => {
      setUpdate(!update);
    })
    .catch(() => {
      console.log("Error while deleting item " + id);
    });
  }

  return (
    <div>
      <header>
        <Header />
      </header>
      <Button buttonName="Add" buttonClass="addButton" handleClick={Add} />
      {groceries && <GroceryCard groceries={groceries} deleteGrocery={deleteGrocery}/>}
    </div>
  );
}

export default App;
