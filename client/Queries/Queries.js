import { gql } from '@apollo/react-hooks';

const SHOPPING_SUBMIT = gql`
  mutation shopSub(
    $itemName: String!
    $note: String
    $unit: String
    $category: String
    $listQty: String!
  ) {
    shoppingSubmit(
      itemName: $itemName
      note: $note
      unit: $unit
      category: $category
      listQty: $listQty
    ) {
      success
    }
  }
`;

const SHOPPING_UPDATE = gql`
  mutation shopUpdate(
    $itemId: Int!
    $itemName: String!
    $note: String
    $unit: String
    $category: String
    $listQty: Int!
  ) {
    shoppingUpdate(
      itemId: $itemId
      itemName: $itemName
      note: $note
      unit: $unit
      category: $category
      listQty: $listQty
    ) {
      success
    }
  }
`;

const PANTRY_SUBMIT = gql`
  mutation panSub(
    $itemName: String!
    $note: String
    $unit: String
    $category: String
    $listQty: String!
  ) {
    pantrySubmit(
      itemName: $itemName
      note: $note
      unit: $unit
      category: $category
      listQty: $listQty
    ) {
      success
    }
  }
`;

const PANTRY_UPDATE = gql`
  mutation panUpdate(
    $itemId: Int!
    $itemName: String!
    $note: String
    $unit: String
    $category: String
    $listQty: Int!
  ) {
    pantryUpdate(
      itemId: $itemId
      itemName: $itemName
      note: $note
      unit: $unit
      category: $category
      listQty: $listQty
    ) {
      success
    }
  }
`;

const SHOPPING_BUY_UP = gql`
  mutation ShoppingBuyUp($itemId: Int!) {
    shoppingBuyUp(itemId: $itemId) {
      success
    }
  }
`;

const SHOPPING_BUY_DOWN = gql`
  mutation ShoppingBuyDown($itemId: Int!) {
    shoppingBuyDown(itemId: $itemId) {
      success
    }
  }
`;

const SHOPPING_LIST_UP = gql`
  mutation ShoppingListUp($itemId: Int!) {
    shoppingListUp(itemId: $itemId) {
      success
    }
  }
`;

const SHOPPING_LIST_DOWN = gql`
  mutation ShoppingListDown($itemId: Int!) {
    shoppingListDown(itemId: $itemId) {
      success
    }
  }
`;

const SHOPPING_REMOVE = gql`
  mutation ShoppingRemove($itemId: Int!) {
    shoppingRemove(itemId: $itemId) {
      success
    }
  }
`;

const SHOPPING_CHECKOUT = gql`
  mutation shopCheck {
    shoppingCheckout {
      success
    }
  }
`;

const ADD_FROM_PANTRY = gql`
  mutation AddFromPan($itemId: Int!) {
    shoppingAddFromPantry(itemId: $itemId) {
      success
    }
  }
`;

export {
  SHOPPING_SUBMIT,
  SHOPPING_UPDATE,
  PANTRY_SUBMIT,
  PANTRY_UPDATE,
  SHOPPING_BUY_UP,
  SHOPPING_BUY_DOWN,
  SHOPPING_LIST_UP,
  SHOPPING_LIST_DOWN,
  SHOPPING_REMOVE,
  SHOPPING_CHECKOUT,
  ADD_FROM_PANTRY,
};
