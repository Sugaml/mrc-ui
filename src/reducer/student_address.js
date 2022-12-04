import * as types from "../constant/actionTypes";

const INITIAL_STUDENT_ADDRESS_INFO_STATE = {
  studentAddressInfo: null,
  student: false,
};

function StudentAddressInfo(state = INITIAL_STUDENT_ADDRESS_INFO_STATE, action) {
  const { type, payload } = action;
  switch (type) {
    case types.STUDENT_ADDRESS_INFO:
      console.log("data",payload)
      return {
        ...state,
        student: true
      };
      case types.STUDENT_ADDRESS_INFO_SUCCESS:
        return {
          ...state,
          studentAddressInfo: payload,
          student: false
        };
      case types.STUDENT_ADDRESS_INFO_FAILURE:
        return {
          ...state,
          student: false,
        };
    default:
      return state;
  }
}

export default StudentAddressInfo;