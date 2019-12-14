import React, { Component } from 'react';
import * as api from '../../../api';
import GameCard from '../gameCards/GameCards';

class Games extends Component {
  state = {
    games: []
  };

  componentDidMount = () => {
    this.fetchAllGames();
  };

  fetchAllGames = () => {
    api
      .getAllGames()
      .then(games => {
        console.log(games);
        this.setState({ games });
      })
      .catch(
        ({
          response: {
            data: { message },
            status
          }
        }) => {
          this.setState({
            error: { message, status }
          });
        }
      );
  };

  render() {
    const { games } = this.state;

    return (
      <div>
        <div className="container-fluid bg-dark" style={{ height: 35 }}>
          <div className="row">
            <div className="col"></div>
          </div>
        </div>
        <div className="text-white text-dark">
          {games.map(game => {
            return <GameCard games={game} key={game.name} />;
          })}
        </div>
      </div>
    );
  }
}

export default Games;
