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
  const [form, setForm] = useState("close");
  const [grocery, setGrocery] = useState({});

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

  //show popup input form with grocery data fields
  async function showPopUp(formType, newGrocery) {
    console.log(formType);

    if (formType === "add" || formType === "update" || formType === "close") {
      if (formType === "add") {
        setGrocery({
          type: "type",
          name: "Key",
          brand: "brand",
          daysToConsume: "0",
          expirationDate: "yyyy/mm/dd",
        });
      } else {
        setGrocery(newGrocery);
      }
      setForm(formType);
    } else console.log("Invalid form type");
  }

  async function addGrocery(type, name, brand, daysToConsume, expirationDate) {
    let article;
    if (expirationDate !== "yyyy/mm/dd") {
      article = {
        type: type,
        name: name,
        brand: brand,
        expirationDate: expirationDate,
      };
    } else {
      article = {
        type: type,
        name: name,
        brand: brand,
        daysToConsume: daysToConsume,
      };
    }
    axios
      .post(
        `https://expiration-date-project.herokuapp.com/api/expirationDate/`,
        article
      )
      .then(() => {
        setUpdate(!update);
      })
      .catch(() => {
        console.log("Error while adding new item " + article.map);
      });
  }

  //delete data
  async function deleteGrocery(id) {
    axios
      .delete(
        `https://expiration-date-project.herokuapp.com/api/expirationDate/${id}`
      )
      .then(() => {
        setUpdate(!update);
      })
      .catch(() => {
        console.log("Error while deleting item " + id);
      });
  }
  //update data
  async function updateGrocery(id) {
    const article = {};
    axios
      .post(
        `https://expiration-date-project.herokuapp.com/api/expirationDate/`,
        article
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
      {form !== "close" ? (
        <InputForm
          formType={form}
          functionCall={form === "add" ? addGrocery : updateGrocery}
          grocery={grocery}
        />
      ) : (
        <></>
      )}
      <Button
        buttonName="Add"
        buttonClass="addButton"
        handleClick={() => showPopUp("add")}
      />
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
