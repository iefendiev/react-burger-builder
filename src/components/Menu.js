import React, { useContext } from 'react';
import { HamburgerContext } from '../context/HamburgerContext';

const Menu = () => {
  const context = useContext(HamburgerContext);
  return (
    <div>
      <h3>Total Price: $ {context.totalPrice}</h3>

      <div className="menu">
        {context.data.map((item) => (
          <div className="itemSection" key={item.id}>
            <div className="itemName">{item.name}</div>
            <div className="itemName">$ {item.price}</div>
            <button onClick={() => context.removeIngredient(item)}>-</button>
            <div>{item.count}</div>
            <button onClick={() => context.addIngredient(item)}>+</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
