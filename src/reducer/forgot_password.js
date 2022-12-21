import * as types from "../constant/actionTypes";

const INITIAL_FORGOT_PASSWORD_STATE = {
  forgotpwd: null,
  isforgot: false,
};

function ForgotPassword(state = INITIAL_FORGOT_PASSWORD_STATE, action) {
  const { type, payload } = action;
  switch (type) {
    case types.FORGOT_PASSWORD:
      console.log("data",payload)
      return {
        ...state,
        isforgot: true
      };
      case types.FORGOT_PASSWORD_SUCCESS:
        return {
          ...state,
          forgotpwd: payload,
          isforgot: false
        };
      case types.FORGOT_PASSWORD_FAILURE:
        return {
          ...state,
          isforgot: false,
        };
    default:
      return state;
  }
}

export default ForgotPassword;