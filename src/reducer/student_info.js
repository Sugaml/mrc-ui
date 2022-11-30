import * as types from "../constant/actionTypes";

const INITIAL_STUDENT_INFO_STATE = {
  studentInfo: null,
  student: false,
};

function StudentInfo(state = INITIAL_STUDENT_INFO_STATE, action) {
  const { type, payload } = action;
  switch (type) {
    case types.STUDENT_INFO:
      console.log("data",payload)
      return {
        ...state,
        student: true
      };
      case types.STUDENT_INFO_SUCCESS:
        return {
          ...state,
          studentInfo: payload,
          student: false
        };
      case types.STUDENT_INFO_FAILURE:
        return {
          ...state,
          student: false,
        };
    default:
      return state;
  }
}

export default StudentInfo;