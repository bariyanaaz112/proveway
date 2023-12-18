// Your CardList component

import React, { useState } from 'react';
import CustomDropdown from './CustomDropdown';
import data from './data.json'

const CardList = () => {
  const [isExpanded, setExpanded] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleSize1 = (value) => {
    console.log('Selected Size 1', value);
  };

  const handleSize2 = (value) => {
    console.log('Selected Size 2', value);
  };

  const handleColor1 = (value) => {
    console.log('Selected Color 1', value);
  };

  const handleColor2 = (value) => {
    console.log('Selected Color 2', value);
  };

  const toggleExpand = (id) => {
    setSelectedCard((prevSelected) => (prevSelected === id ? null : id));
  };

  return (
    <>
      {data.map((product, index) => (
        <div
          key={index}
          className={`collapse-card ${selectedCard === product.id ? 'selected' : ''} ${selectedCard === product.id ? 'expanded' : ''}`}
          onClick={() => toggleExpand(product.id)}>

          {/* header */}
          <div className="card-header">
            <input type="radio" name="cardSelection" checked={selectedCard === product.id} readOnly />
            <div className='title-price'>
              <h3 className='title'> {product.title}</h3>
              <h3 className='price'>{product.price}</h3>
            </div>
            {index === 1 ?  (
              <div className='strike-text'>
                <h3>DKK 195.00</h3>
              </div>
            ) : (
              <div className=''>
              </div>
            )}
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

          {/* Dropdowns */}
          <div className={`card-content ${isExpanded && selectedCard === product.id ? 'visible' : ''}`}>
            {selectedCard === product.id && (
              <>
                <div className='size-color'>
                  <div className=''>
                    <h4 className='tile'>Size</h4>
                    <CustomDropdown label="#1" options={product?.size1} onSelect={handleSize1} />
                    <CustomDropdown label="#2" options={product?.size2} onSelect={handleSize2} />
                  </div>

                  <div className='color'>
                    <h4 className='tile'>Color</h4>
                    <CustomDropdown options={product?.color1} onSelect={handleColor1} />
                    <CustomDropdown options={product?.color2} onSelect={handleColor2} />
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
