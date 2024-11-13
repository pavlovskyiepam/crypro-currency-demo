// src/App.js
import React from 'react';
import './App.css';
import CoinList from './components/CoinList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Crypto Currency</h1>
      </header>
      <CoinList />
    </div>
  );
}

export default App;