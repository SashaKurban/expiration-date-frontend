import "./Icon.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFish,
  faDrumstickBite,
  faJar,
  faAppleWhole,
  faBottleDroplet,
  faWheatAwn,
  faCheese,
  faCookie,
  faBowlFood,
  faWineBottle,
  faCloudMeatball,
  faCubesStacked,
  faPen,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

export default function FoodIcon({ type, handleClick }) {
  function iconType(type) {
    if (type === "meat") return faDrumstickBite;
    else if (type === "fish") return faFish;
    else if (type === "grain") return faWheatAwn;
    else if (type === "snack") return faCookie;
    else if (type === "jar-can") return faJar;
    else if (type === "dairy") return faCheese;
    else if (type === "condiment") return faBottleDroplet;
    else if (type === "produce") return faAppleWhole;
    else if (type === "leftover") return faBowlFood;
    else if (type === "drink") return faWineBottle;
    else if (type === "frozen") return faCubesStacked;
    else if (type === "update") return faPen;
    else if (type === "delete") return faXmark;
    else return faCloudMeatball;
  }

  return (
    <div
      className={
        type === "update" ? "update" : type === "delete" ? "delete" : "icon"
      }
    >
      <FontAwesomeIcon
        icon={iconType(type)}
        className={type}
        onClick={handleClick}
      />
    </div>
  );
}
