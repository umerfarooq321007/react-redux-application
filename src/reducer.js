
import auth from './reducers/auth';
import item from './reducers/item';
import { combineReducers } from 'redux';


export default combineReducers({
  auth,
  item
});
