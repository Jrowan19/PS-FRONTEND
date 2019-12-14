import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Games from './components/pages/games/Games';
import NavBar from './components/layouts/NavBar';
import Home from './components/pages/home/Home';
import { Router } from '@reach/router';
import SingleGame from './components/pages/singleGame/SingleGame';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Router>
        <Home path="/" />
        <Games path="/games" />
        <SingleGame path="games/:name" />
      </Router>
    </div>
  );
};

export default App;
