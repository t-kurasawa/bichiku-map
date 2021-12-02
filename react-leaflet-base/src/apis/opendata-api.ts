import axios from 'axios';

export interface SearchCondition {
    path:string
}

export const search = (condition: SearchCondition) => {
    const baseURL = 'http://localhost:3000/searchOpendata';
    const url = baseURL;
    return axios.get(url)
}