import {
  LOGIN,
  REGISTER,
  REGISTER_PAGE_UNLOADED,
  ASYNC_START,
  UPDATE_FIELD_AUTH,
  LOGOUT
} from '../constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case LOGIN:
    case REGISTER:
      console.log("Dispatched action successfully", action)
      return {
        ...state,
        token: action.payload.token,
        userId: action.payload.userId,
        errors: action.error ? action.payload.errors : null
      };
    case LOGOUT:
      return {
        ...state,
        token: null,
        userId: null,
        errors: action.error ? action.payload.errors : null
      };
    case REGISTER_PAGE_UNLOADED:
      return {};
    case ASYNC_START:
      if (action.subtype === LOGIN || action.subtype === REGISTER) {
        return { ...state, inProgress: true };
      }
      break;
    case UPDATE_FIELD_AUTH:
      return { ...state, [action.key]: action.value };
    default:
      return state;
  }

  return state;
};
