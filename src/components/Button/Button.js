import "./Button.css";

export default function Button({ buttonName, buttonClass, handleClick }) {
  return (
    <button type="button" className={buttonClass} onClick={handleClick}>
      {buttonName}
    </button>
  );
}
