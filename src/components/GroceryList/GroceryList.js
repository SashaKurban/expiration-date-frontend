import "./GroceryList.css";
import GroceryCard from "../GroceryCard/GroceryCard.js";
import React, { useState, useEffect } from "react";

export default function GroceryList({
  data,
  filter,
  order,
  deleteGrocery,
  showPopUp,
}) {
  const [groceries, setGroceries] = useState(data);

  useEffect(() => {
    const isType = (value) => (value.type === filter ? true : false);
    //ordering
    if (order === "increasing") {
      setGroceries(sortIncreasing(data));
    } else if (order === "decreasing") {
      setGroceries(sortDecreasing(data));
    } else {
      setGroceries(sortRecentlyOpen(data));
    }
    //filtering
    if (filter !== "none") {
      setGroceries(data.filter(isType));
    }
  }, [order, filter, data]);

  function sortIncreasing(data) {
    const copyData = []
      .concat(data)
      .sort((a, b) => (a.daysLeft > b.daysLeft ? 1 : -1));
    return copyData;
  }
  function sortDecreasing(data) {
    const copyData = []
      .concat(data)
      .sort((a, b) => (a.daysLeft <= b.daysLeft ? 1 : -1));
    return copyData;
  }
  function sortRecentlyOpen(data) {
    const copyData = []
      .concat(data)
      .sort((a, b) => (a.dateOpened <= b.dateOpened ? 1 : -1));
    return copyData;
  }

  return (
    <GroceryCard
      groceries={groceries}
      deleteGrocery={deleteGrocery}
      showPopUp={showPopUp}
    />
  );
}
