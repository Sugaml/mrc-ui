import * as types from "../constant/actionTypes";

const INITIAL_STATE = {
  courses:[],
  fetchingCourse:false
};

function Courses(state = INITIAL_STATE, action) {
  const { type, payload } = action;
  switch (type) {
    case types.GETCOURSES:
      return {
        ...state,
        fetchingCourse: true,
      };
    case types.GETCOURSESSUCCESS:
      console.log("success course :: ",payload)
      return {
        ...state,
        courses:payload
      }
    default:
      return state;
  }
}

export default Courses;