import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PantryItem from "./PantryItem.jsx";
import { getPantryItems } from "../../store/actions/pantryActions.js";

//Container for all pantry items
const PantryContainer = () => {
  const pantryItems = useSelector((state) => state.pantry.pantryList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPantryItems());
  }, []);
  const sortItem = (a, b) => {
    if (a.item_name < b.item_name) {
      return -1;
    }
    if (a.item_name > b.item_name) {
      return 1;
    }
    return 0;
  };

  return (
    <div>
      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <ul className="divide-y divide-gray-200">
          {pantryItems
            .sort((a, b) => sortItem(a, b))
            .map((item, i) => {
              return <PantryItem key={`item${i}`} newItem={item} />;
            })}
        </ul>
      </div>
    </div>
  );
};
export default PantryContainer;
