import React from 'react';
import { Link } from '@reach/router';
import styles from './GameCards.module.css';

const GameCard = props => {
  const { name, boxart } = props.games;

  return (
    <div className="card mx-auto col mb-5 mt-3" style={{ width: '25rem' }}>
      <img src={boxart} className="card-img-top mt-3" alt="..." />
      <div className="card-body">
        <h1>{name}</h1>
        <Link className="btn btn-primary" to={`/games/${name}`}>
          View Game
        </Link>
      </div>
    </div>
  );
};

export default GameCard;
