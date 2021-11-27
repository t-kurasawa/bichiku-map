import axios from 'axios';

export interface SearchCondition {
    results:number
}

// https://randomuser.me/documentation
export const search = (condition: SearchCondition) => {
    const baseURL = 'https://randomuser.me/api/?format=json?inc=id,name,gender,picture,email';
    const url = baseURL + '&results=' + condition.results;
    return axios.get(url)
}