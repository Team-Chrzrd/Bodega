import React from "react";
import { useDispatch } from 'react-redux';
import {  loadEditedItem} from "../../store/actions/shoppingActions";
import { displayEditor } from "../../store/actions/uiActions.js";

//Update button for shopping list item
const UpdateButton = ({item}) => {
  const dispatch = useDispatch();
  const {_id} = item

  const showModal = () => {
    dispatch(displayEditor(true, true));
  };

  const onEdit = () => {
    dispatch(loadEditedItem(item));
    showModal();
  };
  
  return (
    <>
      <button
        onClick={onEdit}
        type="button"
        className="items-center m-1 w-24 px-3 py-1.5 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Update
      </button>
    </>
  );
};

export default UpdateButton;
