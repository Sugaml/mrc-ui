import { combineReducers } from "redux";
import Auth from "./reducer/auth";
import Signup from "./reducer/signup";
import StudentInfo from "./reducer/student_info";

const rootReducer = combineReducers({
  auth: Auth,
  signup: Signup,
  StudentInfo: StudentInfo,
});

export default rootReducer;