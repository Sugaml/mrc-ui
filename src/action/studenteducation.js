import ToastConfig from "../components/toast/Toast";
import * as types from "../constant/actionTypes";
import { postStudentEducationInfo } from "../services/student";


const studentEducationInfo = () => ({
  type: types.STUDENT_EDUCATION_INFO,
});

const studentEducationSuccess = (response) => ({
  type: types.STUDENT_EDUCATION_INFO_SUCCESS,
  payload: response,
});

const studentEducationInfoFailure = () => ({
  type: types.STUDENT_EDUCATION_INFO_FAILURE,
});


export const studentEducationInfoAction= (studentEducationInfoData) => async (dispatch) => {
  try{
    dispatch(studentEducationInfo());
    const response = await postStudentEducationInfo(studentEducationInfoData, "student/education");
    if (response){
      dispatch(studentEducationSuccess(response));
      ToastConfig.success("Successfully saved student education information.")
    }else{
      dispatch(studentEducationInfoFailure());
      ToastConfig.error("Filed to load student education information.")
    }
  }
  catch (error) {
      console.log("error save student education ::",error);
      dispatch(studentEducationInfoFailure());
      ToastConfig.error(error.error)
    }
};