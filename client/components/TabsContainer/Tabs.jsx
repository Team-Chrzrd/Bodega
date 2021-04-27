import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTabs } from "../../store/actions/uiActions.js";

//Allows for toggle feature between pantry and shopping list
export const Tabs = () => {
  const dispatch = useDispatch();
  const [showShopping, setShowShopping] = useState(true);
  const [showPantry, setShowPantry] = useState(false);

  const toggle = () => {
    setShowShopping(!showShopping);
    setShowPantry(!showPantry);
  };
  useEffect(() => dispatch(toggleTabs(showShopping, showPantry)), [
    showShopping,
  ]);
  return (
    <div className="flex justify-start ml-4">
      <ul className="tabrow">
        <li className={`${showShopping ? "selected" : null}`} onClick={toggle}>
          Shopping List
        </li>
        <li className={`${showPantry ? "selected" : null}`} onClick={toggle}>
          Pantry
        </li>
        <li className="add ">+</li>
      </ul>
    </div>
  );
};
