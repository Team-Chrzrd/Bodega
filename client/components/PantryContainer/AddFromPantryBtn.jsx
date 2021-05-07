import React from 'react';
import { useMutation, gql } from '@apollo/react-hooks';
import { ADD_FROM_PANTRY } from '../../Queries/Queries';
import useShoppingActions from '../../hooks/useShoppingActions';

<<<<<<< HEAD
// Increments Required stock QTY
const AddFromPantryBtn = ({ _id, showAlert, qty, par }) => {
  const { refreshShoppingItems } = useShoppingActions();

  const [shoppingAddFromPantry] = useMutation(ADD_FROM_PANTRY, {
    onCompleted: () => {
      showAlert(true);
      refreshShoppingItems();
    },
  });

  const onButtonClick = () => {
    shoppingAddFromPantry({
      variables: { itemId: _id, qty, par },
    });
=======
//Adds pantry item to shopping list with proper 
const AddFromPantryBtn = ({ _id, showAlert, item_name}) => {
  const dispatch = useDispatch();
  const addToList = () => {
    dispatch(addFromPantry(_id));
    showAlert(true);
>>>>>>> 2655e1d845f82fc1b2295aab0550be16c3c980ac
  };

  //Adds pantry item to shopping list with proper
  return (
    <>
      <div>
        <button
<<<<<<< HEAD
          onClick={onButtonClick}
          type='button'
          className='inline-flex items-center px-2 py-1 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
          style={{ transition: 'all .15s ease' }}
=======
          onClick={addToList}
          type="button"
          className= {`inline-flex items-center px-2 py-1 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 pantryReqStockAdd${item_name}`}
          style={{ transition: "all .15s ease" }}
>>>>>>> 2655e1d845f82fc1b2295aab0550be16c3c980ac
        >
          Add to List
        </button>
      </div>
    </>
  );
};

export default AddFromPantryBtn;
