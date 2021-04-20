import './App.css';
import React from 'react';
import Signup from "./components/Signup";
import Login from "./components/Login";
import {Accounts} from './components/Accounts';
import Status from './components/Status';
import Settings from './components/Settings';

function App() {
  return (
    <Accounts>
      <Status />
      <Signup />
      <Login />
      <Settings />
    </Accounts>
  );
}

export default App;
