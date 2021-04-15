import './App.css';
import React from 'react';
import Signup from "./components/Signup";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Signup />
      <br/> <br/>
      <Login />
    </div>
  );
}

export default App;
