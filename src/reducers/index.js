import { combineReducers } from 'redux';
import { FETCH_USERS } from '../actions';

const users = (state = [], action) => {
  switch (action.type) {
    case FETCH_USERS:
      return [...state, ...action.payload.data];
    default:
      return state;
  }
};

export default combineReducers({
  users,
});
