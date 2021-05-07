import React, { useState } from 'react';
import UpdateButtonPantry from './UpdateButtonPantry.jsx';
import DeleteButtonPantry from './DeleteButtonPantry.jsx';
import MinusButtonPantry from './MinusButtonPantry.jsx';
import AddButtonPantry from './AddButtonPantry.jsx';
import AddFromPantryBtn from './AddFromPantryBtn.jsx';
import AddParPantry from './AddParPantry.jsx';
import MinusParPantry from './MinusParPantry.jsx';
import Notification from './Notification.jsx';

//Individual Pantry item component
//Pulls in newItem as prop from container
const PantryItem = ({ newItem }) => {
  const { item_name, category, qty, note, unit, _id, par } = newItem;

  const [showAlert, setShowAlert] = useState(false);

  return (
    <>
      <li>
        <div
          className={`flex flex-row justify-between px-4 py-4 sm:px-6 pantryItem${item_name}`}
        >
          <div className='flex flex-column items-center justify-between w-1/4'>
            <p className='flex items-center text-sm text-gray-500'>
              {category}
            </p>
            <p
              className={`text-lg font-bold text-blue-700 truncate pantryItemName${item_name}`}
            >
              {item_name}
            </p>
            <AddFromPantryBtn
              _id={_id}
              qty={qty}
              par={par}
              showAlert={setShowAlert}
            />
          </div>

          <div className='flex flex-row justify-around w-2/5'>
            <div className='flex flex-column justify-center items-center mt-2 '>
              <div>
                <strong>In Stock</strong>
              </div>
              <div className='flex flex-row justify-center items-center'>
                <div
                  className={`text-3xl font-semibold text-blue-700  truncate pantryStock${item_name}`}
                >
                  {qty}
                </div>
                <div className='ml-3'>{unit}</div>
              </div>
              <div className='flex flex-row'>
                <MinusButtonPantry _id={_id} item_name={item_name} />
                <AddButtonPantry _id={_id} item_name={item_name} />
              </div>
            </div>

            <div className='flex flex-column justify-center items-center mt-2 '>
              <div>
                <strong>Required Stock</strong>
              </div>
              <div className='flex flex-row justify-center items-center'>
                <div
                  className={`text-3xl font-semibold text-blue-700  truncate pantryReqStock${item_name}`}
                >
                  {par}
                </div>
                <div className='ml-3'>{unit}</div>
              </div>
              <div className='flex flex-row'>
                <MinusParPantry _id={_id} item_name={item_name} />
                <AddParPantry _id={_id} item_name={item_name} />
              </div>
            </div>
          </div>

          <div className=' flex flex-column justify-center items-center mt-2 pr-5'>
            <UpdateButtonPantry item={newItem} item_name={item_name} />
            <DeleteButtonPantry _id={_id} item_name={item_name} />
          </div>
        </div>
        {showAlert && <Notification showAlert={setShowAlert} />}
      </li>
    </>
  );
};

export default PantryItem;
