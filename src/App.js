import React from 'react';
import logo from "./Logov3.png";

import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Owned & Operated by <span style={{ fontWeight: "bold" }}>TANYA D. MARTIN</span></p>
        <p className="headerLocation">Richmond, VA</p>
        <p className="headerEmail">Email: tdmartin.notarypublic@gmail.com</p>
        <p> </p>
      </header>
    </div>
  );
}

export default App;
