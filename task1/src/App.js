import React, { useState } from 'react';
import CardList from './CardList';
import './App.css'; // Import the default App.css or create your own styling

function App() {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardSelect = (title) => {
    if (selectedCard === title) {
      // Clicking on the already selected card should close it
      setSelectedCard(null);
    } else {
      // Clicking on a different card should select it and close others
      setSelectedCard(title);
    }
  };

  return (
    <div className="app-container">
       <h2 className='heading'>Bundle & Save</h2>
      <CardList
        title="1 Pair"
        price="DKK 195.00"
        discount="40% off"
        content="Content for Card 1"
        onSelect={handleCardSelect}
        selected={selectedCard === "Card 1"}
      />
      {/* <CardList
        title="2 Pair"
        price="DKK 195.00"
        discount="40% off"
        content="Content for Card 2"
        onSelect={handleCardSelect}
        selected={selectedCard === "Card 2"}
      /> */}
      {/* <CardList
        title="3 Pair"
        price="DKK 195.00"
        discount="40% off"
        content="Content for Card 3"
        onSelect={handleCardSelect}
        selected={selectedCard === "Card 3"} */}
      {/* /> */}
      <div className='ship'>
      <span className='shipping'>Free 2 Day Shipping</span>
      <span className='total'>Total : DKK 360.00</span>
      </div>
      <div class="button">
  
  <span class="button-text">+</span>
  <span class="button-text">Add to Cart</span>
</div>
    </div>
  );
}

export default App;
