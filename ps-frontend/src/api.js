import axios from 'axios';

const request = axios.create({
  baseURL: 'https://playstation-backend.herokuapp.com/api'
});

// const baseUrl = 'https://playstation-backend.herokuapp.com/api';

export const getAllGames = () => {
  const url = '/games';
  return request.get(url).then(({ data: { games } }) => {
    console.log(games);
    return games;
  });
};
