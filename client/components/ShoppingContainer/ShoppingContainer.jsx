import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useQuery, gql } from '@apollo/react-hooks';
import ShoppingItem from './ShoppingItem.jsx';

import useShoppingActions from '../../hooks/useShoppingActions';

const GET_SHOPPING_ITEMS = gql`
  query shoppingItems {
    getItems {
      item_name
      category
      list_qty
      buy_qty
      note
      unit
      _id
      pantry_par
      pantry_qty
    }
  }
`;

//Container for all shopping list items
const ShoppingContainer = () => {
  // Setup gql query
  const { data, error, refetch } = useQuery(GET_SHOPPING_ITEMS);
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
  if (error) return `Error! ${error}`;
  //Maps out shopping list array using array index as key, sets newItem prop with value of individual list item
  // const shoppingItems = data?.getItems || [];
  return (
    <div>
      <div className='bg-white shadow overflow-hidden sm:rounded-md'>
        <ul className='divide-y divide-gray-200'>
          {shoppingItems
            .sort((a, b) => sortItem(a, b))
            .map((item, i) => {
              return (
                <ShoppingItem
                  key={`item${i}`}
                  newItem={item}
                  refreshItems={refetch}
                />
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default ShoppingContainer;
