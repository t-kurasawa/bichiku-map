import axios from 'axios';

const fetchEvacuationCenter = () => {
  const baseURL = 'http://localhost:3000/evacuation/center';
  const url = baseURL;
  return axios.get(url);
};

const fetchEvacuationArea = () => {
  const baseURL = 'http://localhost:3000/evacuation/area';
  const url = baseURL;
  return axios.get(url);
};

export default {
  fetchEvacuationCenter,
  fetchEvacuationArea,
};
