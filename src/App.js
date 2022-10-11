import "./App.css";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header/Header.js";
import InputForm from "./components/InputForm/InputForm.js";
import GroceryList from "./components/GroceryList/GroceryList";
import FilterInput from "./components/FilterInput/FilterInput";

function App() {
  const [groceries, setGroceries] = useState();
  const [update, setUpdate] = useState(false);
  const [form, setForm] = useState("close");
  const [grocery, setGrocery] = useState({});
  const [noScroll, setNoScroll] = useState(false);
  const [filter, setFilter] = useState("none");
  const [order, setOrder] = useState("increasing");

  noScroll ? disableBodyScroll(document) : enableBodyScroll(document);

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
      if (formType === "add" || formType === "update") {
        setNoScroll(true);
      } else setNoScroll(false);
    } else console.log("Invalid form type");
  }

  async function addGrocery(type, name, brand, daysToConsume, expirationDate) {
    setForm("close");
    setNoScroll(false);
    let article;
    if (expirationDate === null || expirationDate !== "yyyy-mm-dd") {
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
      .catch((error) => {
        console.log(error);
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
      .catch((error) => {
        console.log(error);
      });
  }
  //update data
  async function updateGrocery(
    id,
    type,
    name,
    brand,
    dateOpened,
    daysToConsume,
    expirationDate
  ) {
    setForm("close");
    setNoScroll(false);
    axios
      .put(
        expirationDate === "yyyy-mm-dd"
          ? `https://expiration-date-project.herokuapp.com/api/expirationDate/${id}?name=${name}&type=${type}&brand=${brand}&dateOpened=${dateOpened}&daysToConsume=${daysToConsume}`
          : `https://expiration-date-project.herokuapp.com/api/expirationDate/${id}?name=${name}&type=${type}&brand=${brand}&dateOpened=${dateOpened}&expirationDate=${expirationDate}`
      )
      .then(() => {
        setUpdate(!update);
        console.log(form);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div>
      <header>
        <Header showPopUp={showPopUp} />
      </header>
      <FilterInput
        filter={filter}
        order={order}
        setFilter={setFilter}
        setOrder={setOrder}
      />
      {form !== "close" ? (
        <InputForm
          formType={form}
          functionCall={form === "add" ? addGrocery : updateGrocery}
          showPopUp={showPopUp}
          grocery={grocery}
        />
      ) : (
        <></>
      )}
      {groceries && (
        <GroceryList
          data={groceries}
          filter={filter}
          order={order}
          deleteGrocery={deleteGrocery}
          showPopUp={showPopUp}
        />
      )}
    </div>
  );
}

export default App;
