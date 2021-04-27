import React from "react";
import { deleteShoppingItem } from "../../store/actions/shoppingActions";
import { useDispatch } from 'react-redux';

//Deletes single item from shopping list
const DeleteButton = ({ _id }) => {
  const dispatch = useDispatch();

  return (
    <>
      <button
        onClick={() => dispatch(deleteShoppingItem(_id))}
        type="button"
        className=" items-center w-24 m-1 px-3 py-1.5 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-opacity-100 bg-yellow-500 hover:bg-red-00 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Delete
      </button>
    </>
  );
};


export default DeleteButton;