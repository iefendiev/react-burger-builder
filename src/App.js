import React, { useState } from 'react';
import { HamburgerContext } from './context/HamburgerContext';
import Burger from './components/Burger';
import Menu from './components/Menu';
import './App.css';

function App() {
  const [data, setData] = useState([
    {
      id: 1,
      name: 'Salad',
      price: 1,
      count: 0,
    },
    {
      id: 2,
      name: 'Cheese',
      price: 3,
      count: 0,
    },
    {
      id: 3,
      name: 'Meat',
      price: 5,
      count: 0,
    },
  ]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const removeIngredient = (item) => {
    if (item.count > 0) {
      item.count--;

      setSelectedItems(
        selectedItems.filter((item, i) => selectedItems.indexOf(item) !== i)
      );
    }
    calculateTotalPrice();
  };

  const addIngredient = (item) => {
    item.count++;
    setSelectedItems([...selectedItems, item.name]);
    calculateTotalPrice();
  };

  const calculateTotalPrice = () => {
    let total = data.reduce(function (acc, obj) {
      return acc + obj.price * obj.count;
    }, 0);
    setTotalPrice(total);
  };
  const saladDiv = <div className="salad"></div>;
  const cheeseDiv = <div className="cheese"></div>;
  const meatDiv = <div className="meat"></div>;

  const addingDivs = () => {
    let uiItems = [];
    let saladCount = data[0].count;
    let cheeseCount = data[1].count;
    let meatCount = data[2].count;

    if (saladCount > 0) {
      while (saladCount--) {
        uiItems.push(saladDiv);
      }
    }
    if (cheeseCount > 0) {
      while (cheeseCount--) {
        uiItems.push(cheeseDiv);
      }
    }
    if (meatCount > 0) {
      while (meatCount--) {
        uiItems.push(meatDiv);
      }
    }
    return uiItems;
  };

  return (
    <HamburgerContext.Provider
      value={{
        selectedItems,
        data,
        totalPrice,
        addIngredient,
        removeIngredient,
        addingDivs,
      }}
    >
      <div className="App">
        <Burger />
        <Menu />
      </div>
    </HamburgerContext.Provider>
  );
}

export default App;
