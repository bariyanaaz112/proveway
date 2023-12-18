import React, { useState } from 'react';
import CardList from './CardList';
import './App.css';
import CustomButton from './CustomButton';

function App() {
   return (
    <div className="app-container">
      <h2 className='heading'>Bundle & Save</h2>
      <CardList />
      <CustomButton/>
    </div>
  );
}

export default App;
