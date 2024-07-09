/** @format */

/**
 * NOTE:::
 * This is the code that would go into the project's main App.jsx
 * I put it here so that the main App.jsx is clean
 * as we are building other, small components throughout the
 * course.
 *
 *
 */

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import GroceryList from './components/grocery_list/components/GroceryList';
import GroceryNav from './components/grocery_list/components/GroceryNav';
import GroceryFooter from './components/grocery_list/components/GroceryFooter';
import GroceryForm from './components/grocery_list/components/GroceryForm';

function App() {
  const [groceriesItems, setGroceriesItems] = useState([]);
  const [groceryInput, setGroceryInput] = useState('');

  function handleOnChange(e) {
    setGroceryInput(e.target.value);
  }
  function handleOnSubmit(e) {
    e.preventDefault();

    if (!groceryInput.trim()) return;
    const newGrocery = {
      id: Date.now(),
      text: groceryInput,
      bought: false,
    };

    setGroceriesItems([newGrocery, ...groceriesItems]);
    setGroceryInput('');
  }
  function toggleBought(id) {
    const updatedItems = groceriesItems.map((item) => {
      if (item.id === id) {
        console.log(
          `Toggling item ${id}: currently ${
            item.bought ? 'bought' : 'not bought'
          }`
        );
        return { ...item, bought: !item.bought };
      }
      return item;
    });
    setGroceriesItems(updatedItems);
  }

  function handleRemoveItem(id) {
    const updatedItems = groceriesItems.filter((item) => item.id !== id);
    setGroceriesItems(updatedItems);
  }

  const totalItems = groceriesItems.length;
  const totalBought = groceriesItems.filter((item) => item.bought).length;

  return (
    <div className="container pt-2">
      <GroceryNav />
      <GroceryForm
        handleOnChange={handleOnChange}
        handleOnSubmit={handleOnSubmit}
        item={groceryInput}
      />
      <GroceryList
        items={groceriesItems}
        handleOnToggle={toggleBought}
        handleRemoveItem={handleRemoveItem}
      />
      <GroceryFooter totalBought={totalBought} totalItems={totalItems} />
    </div>
  );
}
export default App;
