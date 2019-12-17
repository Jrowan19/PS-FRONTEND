import React, { useState, useEffect, useRef } from 'react';
import * as api from '../../../api';
import GameCard from '../gameCards/GameCards';
import { TweenMax, Power3 } from 'gsap';
import styles from './Games.module.css';

const Games = () => {
  const [games, gameState] = useState([]);

  let circle = useRef(null);
  let circleBlue = useRef(null);

  useEffect(() => {
    fetchAllGames();
    TweenMax.staggerFrom(
      [circle, circleBlue],
      1.2,
      {
        opacity: 0,
        x: 2000,
        ease: Power3.easeOut
      },
      0.2
    );
  }, []);

  const fetchAllGames = () => {
    api.getAllGames().then(games => {
      gameState(games);
    });
  };

  return (
    <div>
      <div className="circle-container row" style={{ height: 100 }}>
        <div className="col-sm">
          <div ref={el => (circle = el)} className={styles.hello}>
            GAMES
          </div>
          <div
            ref={el => (circleBlue = el)}
            className="underline mx-auto"
          ></div>
        </div>
      </div>
      <div className="container-fluid" style={{ height: 35 }}>
        <div className="row"></div>
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
