import ToastConfig from "../components/toast/Toast";
import * as types from "../constant/actionTypes";
import { getCurrentEducation, postStudentEducationInfo } from "../services/student";


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
      ToastConfig.error(error.response.data.error)
    }
};

const getEducationInfo = () => ({
  type: types.GET_CURRENT_EDUCATION,
});

const getEducationSuccess = (response) => ({
  type: types.GET_CURRENT_EDUCATION_SUCCESS,
  payload: response,
});

const getEducationFailure = () => ({
  type: types.GET_CURRENT_EDUCATION_FAILURE,
});

export const getEducationAction= (token,id) => async (dispatch) => {
  try{
    dispatch(getEducationInfo());
    const response = await getCurrentEducation(token, "student/"+id+"/education");
    if (response){
      dispatch(getEducationSuccess(response.data));
      ToastConfig.success("Successfully get student education.")
    }else{
      dispatch(getEducationFailure());
      ToastConfig.error("Failed to load student education.")
    }
  }
  catch (error) {
      dispatch(getEducationFailure());
      ToastConfig.error(error.response.data.error)
    }
};