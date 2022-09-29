import "./InputForm.css";
import React, { useEffect, useState } from "react";
import Button from "../Button/Button.js";

export default function InputForm({
  formType,
  functionCall,
  showPopUp,
  grocery,
}) {
  const [type, setType] = useState(grocery.type);
  const [name, setName] = useState(grocery.name);
  const [brand, setBrand] = useState(grocery.brand);
  const [dateOpened, setDateOpened] = useState(grocery.dateOpened);
  const [expirationDate, setExpirationDate] = useState(grocery.expirationDate);
  const [daysToConsume, setDaysToConsume] = useState(grocery.daysToConsume);
  const [byDaysLeft, setByDaysLeft] = useState(true);

  const options = [
    { label: "other", value: "other" },
    { label: "leftover", value: "leftover" },
    { label: "produce", value: "produce" },
    { label: "meat", value: "meat" },
    { label: "fish", value: "fish" },
    { label: "dairy", value: "dairy" },
    { label: "grain", value: "grain" },
    { label: "condiment", value: "condiment" },
    { label: "jar/can", value: "jar/can" },
    { label: "snack", value: "snack" },
    { label: "drink", value: "drink" },
    { label: "frozen", value: "frozen" },
  ];

  useEffect(() => {
    if (byDaysLeft) {
      setExpirationDate("yyyy-mm-dd");
    } else setDaysToConsume(0);
  }, [formType, byDaysLeft, daysToConsume, expirationDate]);

  return (
    <div className="pop-up">
      <form className="pop-up-form">
        <div className="from-close">
          <div className="close-cross" onClick={() => showPopUp("close")}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </div>
        <label className="pop-up-input">
          Type:
          <select value={type} onChange={(e) => setType(e.target.value)}>
            {options.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </select>
        </label>
        <label className="pop-up-input">
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label className="pop-up-input">
          Brand:
          <input
            type="text"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          />
        </label>
        <div className="checkbox-section">
          <label>
            <input
              type="checkbox"
              checked={byDaysLeft}
              onChange={() => setByDaysLeft(true)}
            />
            Days Left
          </label>
          <label>
            <input
              type="checkbox"
              checked={!byDaysLeft}
              onChange={() => setByDaysLeft(false)}
            />
            Expiration Date
          </label>
        </div>
        {byDaysLeft ? (
          <label className="pop-up-input">
            Days to Consume:
            <input
              type="text"
              value={daysToConsume}
              onChange={(e) => setDaysToConsume(e.target.value)}
            />
          </label>
        ) : (
          <></>
        )}
        {!byDaysLeft ? (
          <label className="pop-up-input">
            Expiration Date:
            <input
              type="text"
              value={expirationDate}
              onChange={(e) => setExpirationDate(e.target.value)}
            />
          </label>
        ) : (
          <></>
        )}
        {formType === "update" ? (
          <label className="pop-up-input">
            Date Opened:
            <input
              type="text"
              value={dateOpened}
              onChange={(e) => setDateOpened(e.target.value)}
            />
          </label>
        ) : (
          <></>
        )}
        <div className="submit-btn-section">
          <Button
            buttonName="Submit"
            buttonClass="submit-button"
            type="button"
            value="Submit"
            handleClick={() =>
              formType === "update"
                ? functionCall(
                    grocery.id,
                    type,
                    name,
                    brand,
                    dateOpened,
                    daysToConsume,
                    expirationDate
                  )
                : functionCall(type, name, brand, daysToConsume, expirationDate)
            }
          />
        </div>
      </form>
    </div>
  );
}
