import { Switch, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import React from 'react';
import Routes from './root/Routes';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Routes />
      </Switch>
    </Router>
  );
}

export default App;

