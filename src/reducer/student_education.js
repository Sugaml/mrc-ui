import * as types from "../constant/actionTypes";

const INITIAL_STUDENT_EDUCATION_INFO_STATE = {
  studentEducationInfo: null,
  student: false,
  currentEducation:null,
  isCurrentEducation:false
};

function StudentEducationInfo(state = INITIAL_STUDENT_EDUCATION_INFO_STATE, action) {
  const { type, payload } = action;
  switch (type) {
    case types.STUDENT_EDUCATION_INFO:
      console.log("data",payload)
      return {
        ...state,
        student: true
      };
      case types.STUDENT_EDUCATION_INFO_SUCCESS:
        return {
          ...state,
          studentEducationInfo: payload,
          student: false
        };
      case types.STUDENT_EDUCATION_INFO_FAILURE:
        return {
          ...state,
          student: false,
        };
      case types.GET_CURRENT_EDUCATION:
          console.log("data",payload)
          return {
            ...state,
            isCurrentEducation: true
          };
      case types.GET_CURRENT_EDUCATION_SUCCESS:
            return {
              ...state,
              currentEducation: payload,
              isCurrentEducation: false
            };
      case types.GET_CURRENT_EDUCATION_FAILURE:
            return {
              ...state,
              isCurrentEducation: false,
            };
    default:
      return state;
  }
}

export default StudentEducationInfo;