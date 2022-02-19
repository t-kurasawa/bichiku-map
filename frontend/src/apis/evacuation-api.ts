import axios from 'axios';
const baseURL = process.env.REACT_APP_BASE_URL;

const fetchEvacuationCenter = async () => {
  const url = baseURL + '/evacuation/center';
  return axios.get(url);
};

export default {
  fetchEvacuationCenter,
};
