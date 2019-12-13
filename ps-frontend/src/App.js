import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Games from './components/pages/Games';
import NavBar from './components/layouts/NavBar';
import Home from './components/pages/Home';
import { Router } from '@reach/router';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Router>
        <Home path="/" />
        <Games path="/games" />
      </Router>
    </div>
  );
};

export default App;
