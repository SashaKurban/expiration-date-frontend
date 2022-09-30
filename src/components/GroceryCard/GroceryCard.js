import "./GroceryCard.css";
import Button from "../Button/Button.js";
import FoodIcon from "../Food Icon/FoodIcon.js";

export default function GroceryCard({ groceries, deleteGrocery, showPopUp }) {
  function checkExpire(daysLeft) {
    return daysLeft < 0;
  }

  function checkExpireToday(daysLeft) {
    return daysLeft === 0;
  }

  function sortByDaysLeft(data) {
    const copyData = []
      .concat(data)
      .sort((a, b) => (a.daysLeft > b.daysLeft ? 1 : -1));
    return copyData;
  }

  return (
    <div className="grocery-card-list">
      {sortByDaysLeft(groceries).map((grocery) => (
        <div key={grocery.id} grocery-id={grocery.id} className="grocery-item">
          <div className="grocery-card">
            <FoodIcon type={grocery.type} />
            <div className="grocery-card-inner">
              <h2 className="grocery-name">{grocery.name}</h2>
              <p className="grocery-brand">"{grocery.brand}"</p>
              <p className="dateOpened">opened: {grocery.dateOpened}</p>
              <p className="expirationDate">
                expires: {grocery.expirationDate}
              </p>
            </div>
            <div className="days-left">
              {checkExpireToday(grocery.daysLeft) ? (
                <h2> Last day</h2>
              ) : (
                <>
                  {checkExpire(grocery.daysLeft) ? (
                    <h2>Expired</h2>
                  ) : (
                    <div>
                      <h2>{grocery.daysLeft}</h2>
                      <p>days left</p>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
          <div className="grocery-buttons">
            <Button
              buttonName="Update"
              buttonClass="update-button"
              handleClick={() => showPopUp("update", grocery)}
            />
            <Button
              buttonName="Delete"
              buttonClass="delete-button"
              handleClick={() => deleteGrocery(grocery.id)}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
