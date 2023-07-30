import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import React from 'react';
import Routes from './root/Routes';
import ThemeColor from './components/ThemeColor';
import Mode from './components/Mode';

function App() {
  return (
    <Router>
      <NavBar />
      <ThemeColor />
      <Mode />
      <Routes />
    </Router>
  );
}

export default App;

