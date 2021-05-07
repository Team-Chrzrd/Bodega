import React from 'react';
import { useMutation, gql } from '@apollo/react-hooks';
import { PANTRY_QTY_DOWN } from '../../Queries/Queries';
import usePantryActions from '../../hooks/usePantryActions';

// Increments Required stock QTY
const MinusButtonPantry = ({ _id }) => {
  const { refreshPantryItems } = usePantryActions();

  const [pantryQtyDown] = useMutation(PANTRY_QTY_DOWN, {
    onCompleted: () => {
      refreshPantryItems();
    },
  });

  const onButtonClick = () => {
    pantryQtyDown({
      variables: { itemId: _id },
    });
  };

  //Decrements In Stock Qty in pantry

  return (
    <div>
      <span className='relative z-0 inline-flex shadow-md rounded-md'>
        <button
          onClick={onButtonClick}
          id='minus-btn'
          type='button'
          className='relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-500 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500'
        >
          <span className='sr-only'>Previous</span>
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
              d='M20 12H4'
            ></path>
          </svg>
        </button>
      </span>
    </div>
  );
};

export default MinusButtonPantry;
