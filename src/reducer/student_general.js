import * as types from "../constant/actionTypes";

const INITIAL_STATE = {
  studentGeneral: null,
  isStudentGeneral:false
};

function StudentGeneral(state = INITIAL_STATE, action) {
  const { type, payload } = action;
  switch (type) {
    case types.GETSTUDENTGENERAL:
      return {
        ...state,
        isStudentGeneral: true,
      };
    case types.GETSTUDENTGENERALSUCCESS:
        console.log('testing === ', payload)
      return {
        ...state,
        studentGeneral:payload
      }
    default:
      return state;
  }
}

export default StudentGeneral;