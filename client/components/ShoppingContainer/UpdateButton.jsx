import React from 'react';
import { useDispatch } from 'react-redux';
import { loadEditedItem } from '../../store/actions/shoppingActions';
import { displayEditor } from '../../store/actions/uiActions.js';

//Update button for shopping list item
<<<<<<< HEAD
const UpdateButton = ({ item }) => {
  const dispatch = useDispatch();
  const { _id } = item;
=======
const UpdateButton = ({_id, item, item_name}) => {
  const dispatch = useDispatch();
>>>>>>> 2655e1d845f82fc1b2295aab0550be16c3c980ac

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
<<<<<<< HEAD
        type='button'
        className='items-center m-1 w-24 px-3 py-1.5 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
=======
        type="button"
        className={`items-center m-1 w-24 px-3 py-1.5 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 updateButton${item_name}`}
>>>>>>> 2655e1d845f82fc1b2295aab0550be16c3c980ac
      >
        Update
      </button>
    </>
  );
};

export default UpdateButton;
