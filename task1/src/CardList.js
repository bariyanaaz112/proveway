// Your CardList component

import React, { useState } from 'react';
import './cardList.css';

const CardList = ({ title, price, discount, content, onSelect, selected }) => {
  const [isExpanded, setExpanded] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

const data= [
    {
      "title": "1 Pair",
      "price": "DKK 195.00",
      "discount": "50% OFF",
      "size": ["Small", "Medium", "Large"],
      "color": ["Red", "Green"]
    },
    {
      "title":"2 Pair",
      "price": "DKK 345.00",
      "discount": "40% OFF",
      "size": ["Small", "Medium"],
      "color": ["Red"]
    },
    {
      "title": "3 Pair",
      "price":"DKK 528.00",
      "discount": "60% OFF",
      "size": ["Medium", "Large"],
      "color": ["Green"]
    }
  ]
  
 

  const toggleExpand = (title) => {
    setSelectedCard((prevSelected) => (prevSelected === title ? null : title));
  };

  return (
    <>
    {data.map((product, index) => (
      <div
     key={index}
     className={`collapsible-card ${selectedCard === product.title ? 'selected' : ''} ${selectedCard === product.title ? 'expanded' : ''}`}
     onClick={() => toggleExpand(product.title)}>
      <div className="card-header">
        <input type="radio" name="cardSelection"  checked={selectedCard === product.title} readOnly />
        <div className='row2'>
         <h3 className='title'> {product.title}</h3>
          <h3 className='price'>{product.price}</h3>
       </div>
         
        <h3 className='discount'>{product.discount}</h3>
      </div>
       
  

      <div className={`card-content ${isExpanded && selectedCard === product.title ? 'visible' : ''}`}>
        {/* Add your dropdowns and additional content here */}
       
        <div className="dropdown-row">
        
          <label>#1</label>
          <select>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            {/* Add more options as needed */}
          </select>
        </div>

       
        {/* Additional content */}
        
      </div>
    </div>
    ))}
   </>
  );
};

export default CardList;
