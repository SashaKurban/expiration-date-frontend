import "./Header.css";
import Button from "../Button/Button.js";

export default function Header({ showPopUp }) {
  return (
    <div className="header">
      <div className="nav-items">
        <h1 className="title">Expiration Date</h1>
        <div className="nav-btns">
          <Button
            buttonName="Add"
            buttonClass="add-button"
            handleClick={() => showPopUp("add")}
          />
        </div>
      </div>
    </div>
  );
}
