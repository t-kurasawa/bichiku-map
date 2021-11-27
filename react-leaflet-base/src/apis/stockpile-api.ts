import axios from 'axios';

export interface SearchCondition {
    params:any
}

export const search = (condition: SearchCondition) => {
    const baseURL = 'http://localhost:3000/stockpiles';
    const url = baseURL;
    return axios.get(url)
}