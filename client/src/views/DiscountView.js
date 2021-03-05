import React from 'react';
import Discount from "../components/Discount";

const DiscountView = () => {
  return (
      <div>
        <Discount discount={"20% OFF for any product."}/>
        <Discount discount={"£20 OFF for any product."}/>
      </div>
  );
};

export default DiscountView;