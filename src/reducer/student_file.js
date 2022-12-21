import * as types from "../constant/actionTypes";

const INITIAL_STUDENT_FILE_INFO_STATE = {
  studentFileInfo: null,
  student: false,
};

function StudentFileInfo(state = INITIAL_STUDENT_FILE_INFO_STATE, action) {
  const { type, payload } = action;
  switch (type) {
    case types.STUDENT_FILE_INFO:
      console.log("data",payload)
      return {
        ...state,
        student: true
      };
      case types.STUDENT_FILE_INFO_SUCCESS:
        return {
          ...state,
          studentFileInfo: payload,
          student: false
        };
      case types.STUDENT_FILE_INFO_FAILURE:
        return {
          ...state,
          student: false,
        };
    default:
      return state;
  }
}

export default StudentFileInfo;