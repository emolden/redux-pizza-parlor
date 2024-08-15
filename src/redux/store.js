import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';

const cart = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_ORDER':
      return [...state, action.payload]
    case 'REMOVE_FROM_ORDER':
      return state.filter((pizza) => !action.payload.id)
  }
  return state;
}

const total = (state = 0, action) => {
  switch(action.type) {
    case 'ADD_TO_ORDER':
      return state + Number(action.payload.price)
    case 'REMOVE_FROM_ORDER':
      return state - Number(action.payload.price)
  }
  return state
}

const store = createStore(
  combineReducers({
    cart,
    total
  }),
  applyMiddleware(logger),
);


export default store;
