import axios from 'axios';
// const baseURL = process.env.REACT_APP_BASE_URL;

const fetchStockpileType = () => {
  // const url = baseURL + '/stockpile/type';
  const url = 'http://localhost:3000/stockpile/type';
  return axios.get(url);
};

const fetchStockpileStatusEC = () => {
  // const url = baseURL + '/stockpile/status/ec';
  const url = 'http://localhost:3000/stockpile/status/ec';
  return axios.get(url);
};

export default {
  fetchStockpileType,
  fetchStockpileStatusEC,
};
