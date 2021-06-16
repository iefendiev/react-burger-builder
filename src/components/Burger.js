import React, { useContext } from 'react';
import { HamburgerContext } from '../context/HamburgerContext';

const Burger = () => {
  const context = useContext(HamburgerContext);

  return (
    <div className="wrapper">
      <div className="bread-top"></div>
      {context.addingDivs()}
      <div className="bread-bottom"></div>
    </div>
  );
};

export default Burger;
