import * as types from "../constant/actionTypes";

const INITIAL_STATE = {
  currentStudent: null,
  isStudentGeneral:false
};

function StudentGeneral(state = INITIAL_STATE, action) {
  const { type, payload } = action;
  switch (type) {
    case types.GET_STUDENT_GENERAL:
      return {
        ...state,
        currentStudent: null,
        isStudentGeneral: true,
      };
    case types.GET_STUDENT_GENERAL_SUCCESS:
      return {
        ...state,
        currentStudent:payload,
        isStudentGeneral:true,
      }
    default:
      return state;
  }
}

export default StudentGeneral;