import axios from 'axios';

export interface SearchCondition {
  path: string;
}

const search = (condition: SearchCondition) => {
  const baseURL = 'http://localhost:3000/searchOpendata';
  const url = baseURL;
  return axios.get(url);
};

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
  search,
  fetchEvacuationCenter,
  fetchEvacuationArea,
};
