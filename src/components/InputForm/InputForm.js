import "./InputForm.css";
import React, { useState } from "react";

export default function UpdateForm() {
  const [name, setName] = useState("name");
  const [brand, setBrand] = useState("brand");
  const [expirationDate, setExpirationDate] = useState("yyyy/mm/dd");
  const [dateOpened, setDateOpened] = useState("yyyy/mm/dd");
  const [daysToConsume, setDaysToConsume] = useState(0);

  return (
    <div className="pop-up">
      <form className="pop-up-form">
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
