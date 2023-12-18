
import React from 'react';

const CustomButton = () => {
  return (
    <div className=''>
      <div className='ship-total'>
        <span className='shipping'>Free 2 Day Shipping</span>
        <span className='total'>Total: DKK 360.00</span>
      </div>
      <div className="button">
        <span className="button-text">+</span>
        <span className="button-text">Add to Cart</span>
      </div>
    </div>
  );
}

export default CustomButton;
