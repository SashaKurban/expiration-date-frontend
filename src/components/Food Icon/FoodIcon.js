import "./FoodIcon.css";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFish } from "@fortawesome/free-solid-svg-icons";
import { faDrumstickBite } from "@fortawesome/free-solid-svg-icons";
import { faJar } from "@fortawesome/free-solid-svg-icons";
import { faCarrot } from "@fortawesome/free-solid-svg-icons";
import { faAppleWhole } from "@fortawesome/free-solid-svg-icons";
import { faBottleDroplet } from "@fortawesome/free-solid-svg-icons";
import { faWheatAwn } from "@fortawesome/free-solid-svg-icons";
import { faCheese } from "@fortawesome/free-solid-svg-icons";
import { faCookie } from "@fortawesome/free-solid-svg-icons";
import { faBowlFood } from "@fortawesome/free-solid-svg-icons";
import { faWineBottle } from "@fortawesome/free-solid-svg-icons";
import { faCloudMeatball } from "@fortawesome/free-solid-svg-icons";
import { faCubesStacked } from "@fortawesome/free-solid-svg-icons";

export default function FoodIcon({ type }) {
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
    else return faCloudMeatball;
  }

  return (
    <div className="icon">
      <FontAwesomeIcon icon={iconType(type)} className={type} />
    </div>
  );
}
