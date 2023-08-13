import React from 'react';
import '../styles/App.css';

const TypesOfFruit = () => {
  return (
    <div id="TypesOfFruit">
      <h2>Fruits:</h2>
      <ul>
        <li>Apples</li>
        <li>Blueberries</li>
        <li>Strawberries</li>
        <li>Bananas</li>
      </ul>
    </div>
  );
};

const Fruits = () => {
  return (
    <div id="fruits">
      {/* Render the TypesOfFruit component inside Fruits */}
      <TypesOfFruit />
    </div>
  );
};

const App = () => {
  return (
    <div id="main">
      <h1>Types of Food:</h1>
      {/* Render the Fruits component inside App */}
      <Fruits />
    </div>
  );
};

export default App;
