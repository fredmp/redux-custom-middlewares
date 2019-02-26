import Axios from 'axios';

export const FETCH_USERS = 'FETCH_USERS';

export const fetchUsers = () => {
  const response = Axios.get('http://jsonplaceholder.typicode.com/users');
  return {
    type: FETCH_USERS,
    payload: response,
  };
};
