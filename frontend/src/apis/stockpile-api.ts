import axios from 'axios';
const baseURL = process.env.REACT_APP_BASE_URL;

const fetchStockpileType = () => {
  const url = baseURL + '/stockpile/type';
  return axios.get(url);
};

const fetchStockpileStatusEC = () => {
  const url = baseURL + '/stockpile/status/ec';
  return axios.get(url);
};

export default {
  fetchStockpileType,fetchStockpileStatusEC
};
