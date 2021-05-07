import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import { PANTRY_PAR_UP } from '../../Queries/Queries';
import usePantryActions from '../../hooks/usePantryActions';

//Increments Required Qty in pantry
<<<<<<< HEAD
const AddParPantry = ({ _id }) => {
  const { refreshPantryItems } = usePantryActions();

  const [pantryParUp] = useMutation(PANTRY_PAR_UP, {
    onCompleted: () => {
      refreshPantryItems();
    },
  });

  const onButtonClick = () => {
    pantryParUp({
      variables: { itemId: _id },
    });
  };
=======
const AddParPantry = ({ _id, item_name}) => {
  const dispatch = useDispatch();
>>>>>>> 2655e1d845f82fc1b2295aab0550be16c3c980ac

  return (
    <div>
      <span className='relative z-0 inline-flex shadow-md rounded-md'>
        <button
<<<<<<< HEAD
          onClick={onButtonClick}
          id='add-btn'
          type='button'
          className='-ml-px relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-red-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500'
=======
          onClick={() => dispatch(addPar(_id))}
          id="add-btn"
          type="button"
          className={`-ml-px relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-red-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 pantryReqStockAdd${item_name}`}
>>>>>>> 2655e1d845f82fc1b2295aab0550be16c3c980ac
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

export default AddParPantry;
