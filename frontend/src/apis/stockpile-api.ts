import axios from 'axios';
const baseURL = process.env.REACT_APP_BASE_URL;

const fetchStockpile = () => {
  const url = baseURL + '/stockpiles';
  return axios.get(url);
};

export default {
  fetchStockpile,
};
