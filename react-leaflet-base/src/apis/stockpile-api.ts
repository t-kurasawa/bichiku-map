import axios from 'axios';

export interface SearchCondition {
    address:string
}

export const search = (condition: SearchCondition) => {
    const baseURL = 'http://localhost:3000/stockpiles';
    const url = baseURL;
    return axios.get(url)
}