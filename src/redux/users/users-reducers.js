import { ADD_USER, DELETE_USER, UPDATE_USER } from './users-types';

export const usersReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ADD_USER:
      return [...state, payload];
    case DELETE_USER:
      return state.filter(user => user.id !== payload);
    case UPDATE_USER:
      return state.map(user => {
        if (user.id === payload) {
          if (user.status === 'yes') {
            user.status = 'no';
          } else {
            user.status = 'yes';
          }
        }
        return user;
      });
    default:
      return state;
  }
};
