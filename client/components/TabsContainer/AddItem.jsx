import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  addShoppingItem,
  updateShoppingItem,
} from "../../store/actions/shoppingActions.js";
import {
  addPantryItem,
  updatePantryItem,
} from "../../store/actions/pantryActions.js";
import { displayEditor } from "../../store/actions/uiActions.js";

export const AddItem = () => {
  //setting component state
  const [item_name, setItemName] = useState("");
  const [list_qty, setQuantity] = useState(0);
  const [category, setCategory] = useState("Dairy");
  const [unit, setUnit] = useState("");
  const [note, setNote] = useState("");
  const [par, setPar] = useState("");
  const [pantryQty, setPantryQty] = useState("");

  //onClick Function (Save Changes) to sent user data
  const dispatch = useDispatch();

  //gets the item that is to be updated by id from either pantry or shopping list
  const updatedItem = useSelector((state) => state.shopping.updatedItem);

  //get the ui states for displaying the modal, and whether the item is being edited (or is new), and which tab the user is clicked on (shopping or pantry)
  const { displayModal, isEdit, displayShopping, displayPantry } = useSelector(
    (state) => state.ui
  );

  // sets ADD ITEM Modal odal state to display
  const showModal = () => {
    dispatch(displayEditor(true, false));
  };

  // sets ADD ITEM Modal odal state to  not display
  const hideModal = () => {
    dispatch(displayEditor(false, false));
  };

  //function that dispatches the post request to either the shopping or pantry database, based on the tab the user is clicked on.
  //'qty' is specific to the pantry, but the input for either list is 'list_qty' so 'qty' is set using the 'list_qty' value.
  const sendNewItem = () => {
    const dataSet = {
      item_name,
      unit,
      list_qty,
      category,
      note,
      qty: list_qty,
      par,
    };
    if (displayShopping) {
      dispatch(addShoppingItem(dataSet));
    } //if the user is clicked on the shopping list tab, send to shopping list DB
    else if (displayPantry) {
      dispatch(addPantryItem(dataSet));
    } //if the user is clicked on the pantry list tab, send to shopping list DB
    hideModal();
  };

  //if the user clicks on the update button, that will change 'isEdit' in the Apps state. When that happens the 'ifEditTrue' function will run to set the component state.
  useEffect(() => {
    ifEditTrue();
  }, [isEdit]);

  //This function sets the component state, when the updated button is clicked.This is so that the place holders and values are pre populated for the user when they go to edit.
  const ifEditTrue = () => {
    //clears the input fields if the user clicks the 'Add item' button, so that previous data is not in the placeholders.
    let item_name = "";
    let unit = "";
    let list_qty = 0;
    let category = "";
    let note = "";
    let par = "";
    let qty = "";
    //sets the input fields values from the item object, if the user clicked on the update button.
    if (isEdit) {
      category = updatedItem.category;
      item_name = updatedItem.item_name;
      list_qty = updatedItem.list_qty;
      note = updatedItem.note;
      unit = updatedItem.unit;
      par = updatedItem.par;
      qty = updatedItem.qty;
    }
    setItemName(item_name);
    setQuantity(list_qty);
    setUnit(unit);
    setNote(note);
    setCategory(category);
    setPar(par);
    setPantryQty(qty);
  };

  //function that dispatches the post request to either the shopping or pantry database to update the item, based on the tab the user is clicked on.

  const sendEdit = () => {
    let editItem = {
      ...updatedItem,
      item_name,
      unit,
      list_qty,
      category,
      note,
      par,
      qty: pantryQty,
    };
    if (displayShopping) dispatch(updateShoppingItem(editItem)); //if the user is clicked on the shopping list tab, send to shopping list DB
    if (displayPantry) dispatch(updatePantryItem(editItem)); //if the user is clicked on the pantry list tab, send to shopping list DB
    hideModal(); //hide modal after user saves changes
  };

  return (
    <>
      <button
        type="button"
        className="inline-flex items-center px-5 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-700 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        style={{ transition: "all .15s ease" }}
        onClick={showModal} //show modal after user clicks add item button
      >
        Add Item
      </button>
      {displayModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    {isEdit ? "Edit Item" : "Add Item"}
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={hideModal}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex flex-row flex-auto justify-center">
                  <div className="m-4 flex flex-col items-center">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Item Name
                      </label>
                      <div className="mt-1 relative rounded-md shadow-sm">
                        <input
                          className="focus:ring-indigo-500 focus:border-indigo-500 block m-3 w-full pr-12 sm:text-sm border-gray-300 rounded-md"
                          placeholder={item_name}
                          value={item_name}
                          onChange={(e) => setItemName(e.target.value)}
                        ></input>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Quantity
                      </label>
                      <div className="mt-1 relative rounded-md shadow-sm">
                        <input
                          className="focus:ring-indigo-500 focus:border-indigo-500 block m-3 w-full pr-12 sm:text-sm border-gray-300 rounded-md"
                          type="text"
                          placeholder={displayShopping ? list_qty : pantryQty} //shows the correct quantity based on whether the user in in the shopping tab or pantry tab
                          value={displayShopping ? list_qty : pantryQty}
                          onChange={(e) =>
                            displayShopping
                              ? setQuantity(e.target.value)
                              : setPantryQty(e.target.value)
                          }
                        ></input>
                      </div>
                    </div>

                    {displayPantry && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Stock Amount
                        </label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                          <input
                            className="focus:ring-indigo-500 focus:border-indigo-500 block m-3 w-full pr-12 sm:text-sm border-gray-300 rounded-md"
                            type="text"
                            placeholder={par}
                            value={par}
                            onChange={(e) => setPar(e.target.value)}
                          ></input>
                        </div>
                      </div>
                    )}
                    <div className="w-full">
                      <label className="block text-sm font-medium text-gray-700">
                        Unit
                      </label>
                      <div className="mt-1 relative rounded-md shadow-sm">
                        <select
                          name="types"
                          placeholder={unit}
                          className="focus:ring-indigo-500 focus:border-indigo-500 block m-3 w-full pr-12 sm:text-sm border-gray-300 rounded-md"
                          value={unit}
                          onChange={(e) => setUnit(e.target.value)}
                        >
                          <option>--</option>
                          <option>oz</option>
                          <option>lb</option>
                          <option>each</option>
                          <option>gallon</option>
                          <option>gram</option>
                          <option>dozen</option>
                          <option>box</option>
                          <option>can</option>
                        </select>
                      </div>
                    </div>

                    <div className="w-full">
                      <label className="block text-sm font-medium text-gray-700">
                        Category
                      </label>
                      <div className="mt-1 relative rounded-md shadow-sm">
                        <select
                          name="types"
                          placeholder="Dairy"
                          className="focus:ring-indigo-500 focus:border-indigo-500 block m-3 w-full pr-12 sm:text-sm border-gray-300 rounded-md"
                          value={category}
                          onChange={(e) => setCategory(e.target.value)}
                        >
                          <option>Dry Goods</option>
                          <option>Canned Goods</option>
                          <option>Fridge</option>
                          <option>Frozen</option>
                          <option>Dairy</option>
                          <option>Bakery</option>
                          <option>Deli</option>
                          <option>Meat</option>
                          <option>Produce</option>
                          <option>Alcohol</option>
                          <option>Household Supplies</option>
                          <option>Clothes</option>
                          <option>Misc.</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Notes
                      </label>
                      <div className="mt-1 relative rounded-md shadow-sm">
                        <input
                          className="focus:ring-indigo-500 focus:border-indigo-500 block m-3 w-full pr-12 sm:text-sm border-gray-300 rounded-md"
                          type="text"
                          placeholder="Add Notes Here"
                          step="0.5"
                          value={note}
                          onChange={(e) => setNote(e.target.value)}
                        ></input>
                      </div>
                    </div>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    style={{ transition: "all .15s ease" }}
                    onClick={hideModal}
                  >
                    Close
                  </button>
                  <button
                    onClick={isEdit ? sendEdit : sendNewItem} //if the user clicks on the update button, is Edit will be true and will call the edit function, if false (user clicks on Add item button) calls the send new item function
                    className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};
