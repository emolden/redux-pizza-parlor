import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';

const cart = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_ORDER':
      return [...state, action.payload]
    case 'REMOVE_FROM_ORDER':
      return state.filter((pizza) => pizza.id != action.payload.id)
    case 'CLEAR_EVERYTHING':
      return []
  }
  return state;
}

const total = (state = 0, action) => {
  switch(action.type) {
    case 'ADD_TO_ORDER':
      return Math.round((state + Number(action.payload.price))*100)/100
    case 'REMOVE_FROM_ORDER':
      return Math.round((state - Number(action.payload.price))*100)/100
    case 'CLEAR_EVERYTHING':
      return 0
  }
  return state
}

const customer = (state = {}, action) => {
  switch(action.type){
    case 'CUSTOMER_INFO':
      return action.payload
    case 'CLEAR_EVERYTHING':
      return {}
  }
  return state
}

const store = createStore(
  combineReducers({
    cart,
    total,
    customer, 
  }),
  applyMiddleware(logger),
);


export default store;
