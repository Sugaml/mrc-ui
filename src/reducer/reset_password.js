import * as types from "../constant/actionTypes";

const INITIAL_RESET_PASSWORD_STATE = {
  resetpwd: null,
  isReset: false,
};

function ResetPassword(state = INITIAL_RESET_PASSWORD_STATE, action) {
  const { type, payload } = action;
  switch (type) {
    case types.RESET_PASSWORD:
      console.log("data",payload)
      return {
        ...state,
        isReset: true
      };
      case types.RESET_PASSWORD_SUCCESS:
        return {
          ...state,
          resetpwd: payload,
          isReset: false
        };
      case types.RESET_PASSWORD_FAILURE:
        return {
          ...state,
          isReset: false,
        };
    default:
      return state;
  }
}

export default ResetPassword;