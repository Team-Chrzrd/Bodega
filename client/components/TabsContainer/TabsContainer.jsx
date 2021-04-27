import React, { useEffect } from "react";
import { AddItem } from "./AddItem.jsx";
import { SearchBar } from "./SearchBar.jsx";
import { Tabs } from "./Tabs.jsx";
import CheckoutButton from "./CheckoutButton.jsx";
import { useDispatch } from "react-redux";
import { getShoppingItems } from "../../store/actions/shoppingActions.js";

//Container for search bar, Add Item and Checkout Buttons, and tabs
export const TabsContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getShoppingItems());
  });

  return (
    <div>
      <div className="flex flex-row m-4 px-5 justify-between items-baseline bg-gray-200 ">
        <AddItem />
        <SearchBar />
        <div>
          <CheckoutButton />
        </div>
      </div>
      <Tabs />
    </div>
  );
};
