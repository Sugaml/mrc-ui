import * as types from "../constant/actionTypes";

const INITIAL_SIGNUP_STATE = {
  isSignup: false,
};

function Signup(state = INITIAL_SIGNUP_STATE, action) {
  const { type, payload } = action;
  switch (type) {
    case types.ISIGNUP:
      console.log("data",payload)
      return {
        ...state,
         isSignup: payload,
      };
    default:
      return state;
  }
}

export default Signup;