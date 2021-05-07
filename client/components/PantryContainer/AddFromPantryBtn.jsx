import React from 'react';
import { useMutation, gql } from '@apollo/react-hooks';
import { ADD_FROM_PANTRY } from '../../Queries/Queries';
import useShoppingActions from '../../hooks/useShoppingActions';

// Increments Required stock QTY
const AddFromPantryBtn = ({ _id, showAlert, qty, par, item_name }) => {
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
  };

  //Adds pantry item to shopping list with proper
  return (
    <>
      <div>
        <button
          onClick={onButtonClick}
          type='button'
          className={`inline-flex items-center px-2 py-1 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 pantryReqStockAdd${item_name}`}
          style={{ transition: 'all .15s ease' }}
        >
          Add to List
        </button>
      </div>
    </>
  );
};

export default AddFromPantryBtn;
