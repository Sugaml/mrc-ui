import * as types from "../constant/actionTypes";

const INITIAL_STATE = {
  user: "",
  isUser:false,
  isEmailVerify:false,
};

function UserInfo(state = INITIAL_STATE, action) {
  const { type, payload } = action;
  switch (type) {
    case types.GETUSER:
      return {
        ...state,
        isUser: true,
      };
    case types.GETUSERSUCCESS:
        console.log('testing === ', payload)
      return {
        ...state,
        user:payload,
        isUser: true,
      }
      case types.VERIFY_EMAIL:
        return {
          ...state,
          isEmailVerify: true,
        };
      case types.VERIFY_EMAIL_SUCCESS:
          console.log('testing === ', payload)
        return {
          ...state,
          user:payload,
          isEmailVerify: true,
        }
    default:
      return state;
  }
}

export default UserInfo;