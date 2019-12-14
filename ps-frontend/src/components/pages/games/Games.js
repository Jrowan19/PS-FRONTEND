import React, { useState, useEffect } from 'react';
import * as api from '../../../api';
import GameCard from '../gameCards/GameCards';

const Games = () => {
  const [games, gameState] = useState([]);

  useEffect(() => {
    fetchAllGames();
  });

  const fetchAllGames = () => {
    api.getAllGames().then(games => {
      gameState(games);
    });
  };

  return (
    <div>
      <div className="container-fluid" style={{ height: 35 }}>
        <div className="row">
          <div className="col">
            <button to="" className="btn btn-primary">
              Add New Game
            </button>
          </div>
        </div>
      </div>
      <div className="text-white text-dark">
        {games.map(game => {
          return <GameCard games={game} key={game.name} />;
        })}
      </div>
    </div>
  );
};

export default Games;
