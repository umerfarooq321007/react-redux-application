import {
    LOADDATA
  } from '../constants/actionTypes';
  
  export default (state = { items: []}, action) => {
    switch (action.type) {
      case LOADDATA:
        console.log("Dispatched LOAD DATA action successfully", action)
        return {
          ...state,
          items: action.payload
        };
      default:
        return state;
    }
  
    return state;
  };
  