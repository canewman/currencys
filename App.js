import React, { Component } from 'react';
import './App.css';
import Header from './header.js';
import Footer from './footer.js';
import Card from './card.js';

var address = 'https://api.currencyscoop.com/v1/currencies?api_key=a069d8f602f2ba4be081d0b4700910e7&type=fiat'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <Card />
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;