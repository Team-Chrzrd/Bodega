import React from "react";
import { useDispatch } from "react-redux";
import { addFromPantry } from "../../store/actions/shoppingActions";

//Adds pantry item to shopping list with proper 
const AddFromPantryBtn = ({ _id, showAlert }) => {
  const dispatch = useDispatch();
  const addToList = () => {
    dispatch(addFromPantry(_id));
    showAlert(true);
  };
  return (
    <>
      <div>
        <button
          onClick={addToList}
          type="button"
          className="inline-flex items-center px-2 py-1 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          style={{ transition: "all .15s ease" }}
        >
          Add to List
        </button>
      </div>
    </>
  );
};


export default AddFromPantryBtn;