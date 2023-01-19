import logo from './logo.svg';
import './App.css';
import React from 'react';
import NavBar from './components/Nav'
import {useSelector} from 'react-redux'

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>I Love Shoes</p>
      </header>
    </div>
  );
}

export default App;
