import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header/Header.js";
import Button from "./components/Button/Button.js";
import GroceryCard from "./components/GroceryCard/GroceryCard.js";
import InputForm from "./components/InputForm/InputForm.js";

function App() {
  const [groceries, setGroceries] = useState();
  const [update, setUpdate] = useState(false);
  const [popUp, setPopUp] = useState("close");

  //show popup input form
  async function showPopUp(formType, grocery) {
    console.log(formType);
    if (formType === "add" || formType === "update" || formType === "close") {
      setPopUp(formType);
    } else console.log("Invalid form type");
  }

  //fetch and dispay data
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

  //delete data
  async function deleteGrocery(id) {
    axios
      .delete(
        `https://expiration-date-project.herokuapp.com/api/expirationDate/${id}`
      )
      .then((res) => {
        setUpdate(!update);
      })
      .catch(() => {
        console.log("Error while deleting item " + id);
      });
  }
  //update data
  async function updateGrocery(id) {
    axios
      .delete(
        `https://expiration-date-project.herokuapp.com/api/expirationDate/${id}`
      )
      .then((res) => {
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
      {popUp !== "close" ? <InputForm /> : <></>}
      <Button buttonName="Add" buttonClass="addButton" handleClick={Add} />
      {groceries && (
        <GroceryCard
          groceries={groceries}
          deleteGrocery={deleteGrocery}
          showPopUp={showPopUp}
        />
      )}
    </div>
  );
}

export default App;
