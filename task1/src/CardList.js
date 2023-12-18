// Your CardList component

import React, { useState } from 'react';
import './cardList.css';
import CustomDropdown from './CustomDropdown';

const CardList = ({ title, price, discount, content, onSelect, selected }) => {
  const [isExpanded, setExpanded] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleSize1Select = (value) => {
    console.log('Selected Size 1:', value);
  };

  const handleSize2Select = (value) => {
    console.log('Selected Size 2:', value);
  };

  const handleColor1Select = (value) => {
    console.log('Selected Color 1:', value);
  };

  const handleColor2Select = (value) => {
    console.log('Selected Color 2:', value);
  };

  const data = [
    {
      "title": "1 Pair",
      "price": "DKK 195.00",
      "discount": "50% OFF",
      "size1": ["S", "M", "L"],
      "size2": ["S", "M", "L"],
      "color1": ["Red", "Green"],
      "color2": ["Red", "Green"]
    },
    {
      "title": "2 Pair",
      "price": "DKK 345.00",
      "discount": "40% OFF",
      "size1": ["S", "M"],
      "size2": ["S", "M", "L"],
      "color1": ["Red"],
      "color2": ["Red"]
    },
    {
      "title": "3 Pair",
      "price": "DKK 528.00",
      "discount": "60% OFF",
      "size1": ["M", "L"],
      "size2": ["S", "M", "L"],
      "color1": ["Green"],
      "color2": ["Red"]
    }
  ];

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
            <input type="radio" name="cardSelection" checked={selectedCard === product.title} readOnly />
            <div className='row2'>
              <h3 className='title'> {product.title}</h3>
              <h3 className='price'>{product.price}</h3>
            </div>

            <div className="discount-section">
              {index === 1 && (
                <>
                  <h3 className='popular'>Most Popular</h3>
                  <h3 className='discount'>{product.discount}</h3>
                </>
              )}
              {index !== 1 && (
                <h3 className='discount'>{product.discount}</h3>
              )}
            </div>
          </div>

          <div className={`card-content ${isExpanded && selectedCard === product.title ? 'visible' : ''}`}>
            {selectedCard === product.title && (
              <>
                <div className='second'>
                  <div className=''>
                    <h4 className='tile'>Size</h4>
                    <CustomDropdown label="#1" options={product?.size1} onSelect={handleSize1Select} />
                    <CustomDropdown label="#2" options={product?.size2} onSelect={handleSize2Select} />
                  </div>

                  <div className='color'>
                    <h4 className='tile'>Color</h4>
                    <CustomDropdown options={product?.color1} onSelect={handleColor1Select} />
                    <CustomDropdown options={product?.color2} onSelect={handleColor2Select} />
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default CardList;
