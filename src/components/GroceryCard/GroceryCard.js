import "./GroceryCard.css";
import Button from "../Button/Button.js";
import Icon from "../Icon/Icon.js";

export default function GroceryCard({ groceries, deleteGrocery, showPopUp }) {
  function checkExpire(daysLeft) {
    return daysLeft < 0;
  }

  function checkExpireToday(daysLeft) {
    return daysLeft === 0;
  }

  return (
    <div className="grocery-card-list">
      {groceries.map((grocery) => (
        <div key={grocery.id} grocery-id={grocery.id} className="grocery-item">
          <div className="grocery-card">
            <Icon type={grocery.type} />
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
            <Icon
              type={"update"}
              handleClick={() => showPopUp("update", grocery)}
            />
            <Icon
              type={"delete"}
              handleClick={() => deleteGrocery(grocery.id)}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
