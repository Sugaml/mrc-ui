import * as types from "../constant/actionTypes";

const INITIAL_STATE = {
  currentStudent: null,
  isStudentGeneral:true
};

function StudentGeneral(state = INITIAL_STATE, action) {
  const { type, payload } = action;
  switch (type) {
    case types.GET_STUDENT_GENERAL:
      return {
        ...state,
        isStudentGeneral: true,
      };
    case types.GET_STUDENT_GENERAL_SUCCESS:
      return {
        ...state,
        currentStudent:payload,
        isStudentGeneral:false,
      }
      case types.GET_STUDENT_GENERAL_FAILURE:
      return {
        ...state,
        isStudentGeneral:false,
      }
    default:
      return state;
  }
}

export default StudentGeneral;