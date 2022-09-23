import "./InputForm.css";
import React, { useEffect, useState } from "react";

export default function InputForm({ formType, functionCall, grocery }) {
  const [type, setType] = useState(grocery.type);
  const [name, setName] = useState(grocery.name);
  const [brand, setBrand] = useState(grocery.brand);
  const [dateOpened, setDateOpened] = useState(grocery.dateOpened);
  const [expirationDate, setExpirationDate] = useState(grocery.expirationDate);
  const [daysToConsume, setDaysToConsume] = useState(grocery.daysToConsume);
  const [byDaysLeft, setByDaysLeft] = useState(true);

  useEffect(() => {
    if (byDaysLeft) {
      setExpirationDate("yyyy-mm-dd");
    } else setDaysToConsume(0);
  }, [formType, byDaysLeft, daysToConsume, expirationDate]);

  return (
    <div className="pop-up">
      <form
        className="pop-up-form"
        onSubmit={() =>
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
      >
        <label>
          Type:
          <input
            type="text"
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
        </label>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Brand:
          <input
            type="text"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          />
        </label>
        <label>
          <input
            type="checkbox"
            checked={byDaysLeft}
            onChange={(e) => setByDaysLeft(true)}
          />
          Days Left
        </label>
        <label>
          <input
            type="checkbox"
            checked={!byDaysLeft}
            onChange={(e) => setByDaysLeft(false)}
          />
          Expiration Date
        </label>
        {byDaysLeft ? (
          <label>
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
        {formType === "update" ? (
          <label>
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
        {!byDaysLeft ? (
          <label>
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
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
