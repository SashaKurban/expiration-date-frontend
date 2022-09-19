import "./GroceryCard.css";
import Button from "../Button/Button.js";

export default function GroceryCard({ groceries }) {
  function Update() {
    console.log("update");
  }
  function Delete() {
    console.log("delete");
  }

  function checkExpire(daysLeft) {
    if (daysLeft < 0) return true; 
    else return false;
  }

  function checkExpireToday(daysLeft) {
    if (daysLeft === 0) return true;
    else return false;
  }

  return (
    <div className="grocery-card-list">
      {groceries.map((grocery) => (
        <div key={grocery.id} className="grocery-item">
          <div className="grocery-card">
            <h2 className="grocery-name">{grocery.name}</h2>
            <div className="days-left">
              {checkExpireToday(grocery.daysLeft) ? (
                <h2> Expires Today</h2>
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
            <p className="grocery-brand">"{grocery.brand}"</p>
            <p className="dateOpened">opened: {grocery.dateOpened}</p>
            <p className="expirationDate">expires: {grocery.expirationDate}</p>
          </div>
          <div className="grocery-buttons">
            <Button
              buttonName="Update"
              buttonClass="update-button"
              handleClick={Update}
            />
            <Button
              buttonName="Delete"
              buttonClass="delete-button"
              handleClick={Delete}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
