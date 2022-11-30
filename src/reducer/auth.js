import * as types from "../constant/actionTypes";

const INITIAL_STATE = {
  isAuthenticated: "",
};

function Auth(state = INITIAL_STATE, action) {
  const { type, payload } = action;
  switch (type) {
    case types.IS_AUTH:
      return {
        ...state,
        isAuthenticated: payload,
      };
    case types.LOG_OUT:
      return {
        ...state,
        isAuthenticated:""
      }
    default:
      return state;
  }
}

export default Auth;