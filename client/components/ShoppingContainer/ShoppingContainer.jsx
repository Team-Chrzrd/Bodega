import React, { useEffect } from 'react';
import ShoppingItem from './ShoppingItem.jsx';
import useShoppingActions from '../../hooks/useShoppingActions';

//Container for all shopping list items
const ShoppingContainer = () => {
  // Setup gql query
  const { shoppingItems } = useShoppingActions();

  //Callback used in component render to sort all shopping items alphabetically
  const sortItem = (a, b) => {
    if (a.item_name < b.item_name) {
      return -1;
    }
    if (a.item_name > b.item_name) {
      return 1;
    }
    return 0;
  };
  //Maps out shopping list array using array index as key, sets newItem prop with value of individual list item
  // const shoppingItems = data?.getItems || [];
  return (
    <div>
      <div className='bg-white shadow overflow-hidden sm:rounded-md ShoppingContainer'>
        <ul className='divide-y divide-gray-200'>
          {shoppingItems
            .sort((a, b) => sortItem(a, b))
            .map((item, i) => {
              return <ShoppingItem key={`item_${i}`} newItem={item} />;
            })}
        </ul>
      </div>
    </div>
  );
};

export default ShoppingContainer;
