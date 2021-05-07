import React from 'react';
import { useMutation, gql } from '@apollo/react-hooks';
import { SHOPPING_BUY_UP } from '../../Queries/Queries';
import useShoppingActions from '../../hooks/useShoppingActions';

// Increments Required stock QTY
const AddBuyButton = ({ _id }) => {
  const { refreshShoppingItems } = useShoppingActions();

  const [shoppingBuyUp] = useMutation(SHOPPING_BUY_UP, {
    onCompleted: () => {
      refreshShoppingItems();
    },
  });

  const onButtonClick = () => {
    shoppingBuyUp({
      variables: { itemId: _id },
    });
  };

  return (
    <div>
      <span className='relative z-0 inline-flex shadow-md rounded-md'>
        <button
          onClick={onButtonClick}
          id='add-btn'
          type='button'
          className='-ml-px relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-red-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500'
        >
          <span className='sr-only'>Next</span>
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M12 6v6m0 0v6m0-6h6m-6 0H6'
            ></path>
          </svg>
        </button>
      </span>
    </div>
  );
};

export default AddBuyButton;
