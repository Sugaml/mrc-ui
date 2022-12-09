import * as types from "../constant/actionTypes";

const INITIAL_STATE = {
  user: "",
  isUser:false
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
    default:
      return state;
  }
}

export default UserInfo;