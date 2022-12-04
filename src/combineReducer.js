import { combineReducers } from "redux";
import Auth from "./reducer/auth";
import Signup from "./reducer/signup";
import StudentInfo from "./reducer/student_info";
import PaymentInitiateInfo from "./reducer/payment_initiate";
import PaymentVerifyInfo from "./reducer/payment_verify";
import StudentAddressInfo from "./reducer/student_address";
import StudentEducationInfo from "./reducer/student_education";
import StudentFileInfo from "./reducer/student_file";


const rootReducer = combineReducers({
  auth: Auth,
  signup: Signup,
  StudentInfo: StudentInfo,
  StudentAddressInfo:StudentAddressInfo,
  StudentEducationInfo:StudentEducationInfo,
  StudentFileInfo:StudentFileInfo,
  PaymentInitiateInfo:PaymentInitiateInfo,
  PaymentVerifyInfo:PaymentVerifyInfo,
});

export default rootReducer;