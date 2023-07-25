import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import React from 'react';
import Routes from './root/Routes';
import Theme from './components/Theme';

function App() {
  return (
    <Router>
      <NavBar />
      <Theme />
      <Routes />
    </Router>
  );
}

export default App;

