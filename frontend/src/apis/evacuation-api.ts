import axios from 'axios';
// const baseURL = process.env.REACT_APP_BASE_URL;

const fetchEvacuationCenter = async () => {
  // const url = baseURL + '/evacuation/center';
  const url = 'http://localhost:3000/evacuation/center';
  return axios.get(url);
};

const fetchEvacuationArea = () => {
  // const url = baseURL + '/evacuation/area';
  const url = 'http://localhost:3000/evacuation/area';
  return axios.get(url);
};

export default {
  fetchEvacuationCenter,
  fetchEvacuationArea,
};
