import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import { PANTRY_PAR_DOWN } from '../../Queries/Queries';
import usePantryActions from '../../hooks/usePantryActions';

//Decrements Required Qty in pantry
const MinusParPantry = ({ _id, item_name }) => {
  const { refreshPantryItems } = usePantryActions();

  const [pantryParDown] = useMutation(PANTRY_PAR_DOWN, {
    onCompleted: () => {
      refreshPantryItems();
    },
  });

  const onButtonClick = () => {
    pantryParDown({
      variables: { itemId: _id },
    });
  };

  return (
    <div>
      <span className='relative z-0 inline-flex shadow-md rounded-md'>
        <button
          onClick={onButtonClick}
          id='minus-btn'
          type='button'
          className={`relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-500 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 pantryReqStockMinus${item_name}`}
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

export default MinusParPantry;
