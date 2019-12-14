import axios from 'axios';

const request = axios.create({
  baseURL: 'https://playstation-backend.herokuapp.com/api'
});

export const getAllGames = () => {
  const url = '/games';
  return request.get(url).then(({ data: { games } }) => {
    console.log(games);
    return games;
  });
};

export const getSingleGame = endpoint => {
  const url = `/${endpoint}`;
  return request.get(url).then(({ data: { game } }) => {
    return game;
  });
};

export const postGame = newGame => {
  return request.post('/games', newGame).then(({ data: { game } }) => {
    return game;
  });
};
