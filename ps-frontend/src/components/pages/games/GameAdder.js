import React, { Component } from 'react';
import * as api from '../../../api';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

class GameAdder extends Component {
  state = {
    name: '',
    platform: '',
    genre: '',
    release_date: new Date(),
    no_of_players: 1,
    publisher: '',
    boxart: ''
  };

  handleDateChange = date => {
    this.setState({
      release_date: date
    });
  };

  componentDidUpdate = (prevProps, prevState) => {
    const { ...newGame } = this.state;
    if (this.state.newGame !== prevState.newGame) this.addGame(newGame);
  };

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: value
    });
  };

  addGame = e => {
    e.preventDefault();
    const { ...newGame } = this.state;
    const { value } = e.target;
    api.postGame(newGame).then(({ newGame }) => {
      this.setState({ [newGame]: value });
    });
  };

  render() {
    const {
      name,
      platform,
      genre,
      release_date,
      no_of_players,
      publisher,
      boxart
    } = this.state;

    return (
      <>
        <div>
          <div className="container-fluid " style={{ height: 35 }}>
            <div className="row ">
              <div className="col text-white mt-5" style={{ fontSize: 32 }}>
                ᔕIGᑎ ᑌᑭ ᕼEᖇE
              </div>
            </div>
          </div>
          <form onSubmit={this.addGame} className="" style={{ height: 800 }}>
            <div className="form-group col-sm-3 mx-auto ">
              <label className=" text-white" htmlFor="inlineFormInput ">
                Game Name
              </label>
              <input
                type="text"
                name="name"
                value={name}
                className="form-control"
                id="inlineFormInput"
                placeholder="Enter Game Name"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group col-sm-3 mx-auto">
              <label className=" text-white" htmlFor="inlineFormInput">
                Platform
              </label>
              <input
                type="text"
                name="platform"
                value={platform}
                className="form-control"
                id="inlineFormInput"
                placeholder="Platform"
                onChange={this.handleChange}
              />
            </div>

            <div className="form-group col-sm-3 mx-auto">
              <label className=" text-white" htmlFor="inlineFormInput">
                Genre
              </label>
              <input
                type="text"
                name="genre"
                value={genre}
                className="form-control"
                id="inlineFormInput"
                placeholder="genre"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group col-sm-3 mx-auto mt-3">
              <label className=" text-white" htmlFor="inlineFormInput">
                Relase Date
              </label>
              <br />
              <DatePicker
                onChange={this.handleDateChange}
                selected={this.state.release_date}
                value={release_date}
              />
            </div>
            <div className="form-group col-sm-3 mx-auto">
              <label className=" text-white" htmlFor="inlineFormInput">
                Number of Players
              </label>
              <input
                type="text"
                name="no_of_players"
                value={no_of_players}
                className="form-control"
                id="inlineFormInput"
                placeholder="number of players"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group col-sm-3 mx-auto">
              <label className=" text-white" htmlFor="inlineFormInput">
                Publisher
              </label>
              <input
                type="text"
                name="publisher"
                value={publisher}
                className="form-control"
                id="inlineFormInput"
                placeholder="Enter Publisher"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group col-sm-3 mx-auto">
              <label className=" text-white" htmlFor="inlineFormInput">
                Box Art
              </label>
              <input
                type="text"
                name="boxart"
                value={boxart}
                className="form-control"
                id="inlineFormInput"
                placeholder="Box Art URL Goes Here"
                onChange={this.handleChange}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={() => {
                window.confirm('Game Now Added ');
              }}
            >
              Add Game
            </button>
          </form>
        </div>
        <div className="showComs"></div>
      </>
    );
  }
}

export default GameAdder;
