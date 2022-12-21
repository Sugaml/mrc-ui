import * as types from "../constant/actionTypes";

const INITIAL_STATE = {
  course:null,
  isCurrentCourse:false
};

function CurrentCourse(state = INITIAL_STATE, action) {
  const { type, payload } = action;
  switch (type) {
    case types.GET_CURRENT_COURSE:
      return {
        ...state,
        isCurrentCourse: true,
      };
    case types.GET_CURRENT_COURSE_SUCCESS:
      console.log("success current course :: ",payload)
      return {
        ...state,
        course:payload
      }
    default:
      return state;
  }
}

export default CurrentCourse;