import React from 'react';
import { useDispatch } from 'react-redux';
import { checkoutBtn } from '../../store/actions/shoppingActions.js';
import { useMutation, gql } from '@apollo/react-hooks';
import { SHOPPING_CHECKOUT } from '../../Queries/Queries';
import useShoppingActions from '../../hooks/useShoppingActions';

//Checkout button for shopping list
//Sends POST to /api/shopping/checkout
const CheckoutButton = () => {
  const { refreshShoppingItems } = useShoppingActions();

  const [shoppingCheckout] = useMutation(SHOPPING_CHECKOUT, {
    onCompleted: () => {
      refreshShoppingItems();
    },
  });

  const onButtonClick = () => {
    shoppingCheckout();
  };

  return (
    <div>
      <button
        onClick={onButtonClick}
        type='button'
        className='inline-flex items-center px-5 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 checkOut'
        style={{ transition: 'all .15s ease' }}
      >
        Checkout
      </button>
    </div>
  );
};

export default CheckoutButton;
