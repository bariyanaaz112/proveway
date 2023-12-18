import React, { useState } from 'react';
import './customDropdown.css';

const CustomDropdown = ({ label, options, onSelect }) => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleSelect = (value) => {
    setSelectedValue(value);
    onSelect(value);
  };

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="dropdown-row" onClick={stopPropagation}>
      <label className='label'>{label}</label>
      <select className='dropdown' value={selectedValue} onChange={(e) => handleSelect(e.target.value)}>
        {options.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default CustomDropdown;
