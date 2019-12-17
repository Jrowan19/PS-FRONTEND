import React, { Component } from 'react';

import { Link } from '@reach/router';
import moment from 'moment';
import * as api from '../../../api';

class SingleGame extends Component {
  state = {
    game: []
  };

  render() {
    const { game } = this.state;

    const {
      name,
      publisher,
      no_of_players,
      release_date,
      boxart,
      genre,
      platform
    } = game;

    return (
      <>
        <div className="container-fluid" style={{ height: 50 }}>
          <div className="row">
            <div className="col"></div>
          </div>
        </div>
        <div className="card mx-auto mb-5 border border-info rounded ">
          <img src={boxart} className="card-img-top mt-3" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              Platform - {} {platform}
            </li>
            <li className="list-group-item">
              Genre - {} {genre}
            </li>
            <li className="list-group-item">
              Release Date - {}
              {moment(release_date)
                .format()
                .slice(0, 10)}
            </li>
            <li className="list-group-item">
              Number of Players - {} {no_of_players}
            </li>
            <li className="list-group-item">
              Publisher - {}
              {publisher}
            </li>
          </ul>
          <div className="card-body">
            <Link to="/games" class="card-link">
              Back to Library
            </Link>
          </div>
        </div>
      </>
    );
  }

  componentDidMount = () => {
    this.fetchSingleGame();
  };

  buttonClass = () => {
    let classes = 'btn btn-md m-3 btn-';
    classes += this.state.showComments === true ? 'danger' : 'warning';
    return classes;
  };

  fetchSingleGame = () => {
    api.getSingleGame(`games/${this.props.name}`).then(game => {
      this.setState({ game });
    });
  };
}

export default SingleGame;
