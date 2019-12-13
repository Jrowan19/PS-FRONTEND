import React from 'react';
//import { Link } from '@reach/router';
import moment from 'moment';

const GameCard = props => {
  const {
    name,
    platform,
    genre,
    release_date,
    no_of_players,
    publisher,
    boxart
  } = props.games;

  return (
    <section className="row mt-3 card-padding">
      <div
        className="card text-center mb-2 mx-auto border border-primary text-white bg-dark "
        style={{ width: '40rem' }}
      >
        <div className="card-body">
          <h3 className="card-title">{name}</h3>
          <p className="card-text"> {platform}</p>
          <p className="card-text"> {genre}</p>
          <div className="card-header text-uppercase">
            {moment(release_date).fromNow()}
          </div>
          <p className="card-text">{no_of_players}</p>
          <p className="card-text">{publisher}</p>
          <img src={boxart} alt="..." style={{ height: 400, width: 400 }} />
          {/* <Link to={`/article/${article_id}`}>
            <button className="btn btn-outline-primary"> View Article </button>
          </Link> */}
        </div>
      </div>
    </section>
  );
};

export default GameCard;
