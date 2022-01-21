import axios from 'axios';

const fetchStockpile = () => {
  const baseURL = 'http://localhost:3000/stockpiles';
  const url = baseURL;
  return axios.get(url);
};

export default {
  fetchStockpile,
};
