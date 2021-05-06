import React from 'react';
import { useDispatch } from 'react-redux';
import { useMutation, gql } from '@apollo/react-hooks';

const SHOPPING_REMOVE = gql`
  mutation ShoppingRemove($itemId: Int!) {
    shoppingRemove(itemId: $itemId) {
      success
    }
  }
`;

//Deletes single item from shopping list
const DeleteButton = ({ _id, refreshItems }) => {
  const dispatch = useDispatch();

  const [shoppingRemove] = useMutation(SHOPPING_REMOVE, {
    onCompleted: () => {
      refreshItems();
    },
  });

  const onButtonClick = () => {
    shoppingRemove({
      variables: { itemId: _id },
    });
  };

  return (
    <>
      <button
        onClick={onButtonClick}
        type='button'
        className=' items-center w-24 m-1 px-3 py-1.5 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-opacity-100 bg-yellow-500 hover:bg-red-00 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
      >
        Delete
      </button>
    </>
  );
};

export default DeleteButton;
