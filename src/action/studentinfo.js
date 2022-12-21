import ToastConfig from "../components/toast/Toast";
import * as types from "../constant/actionTypes";
import { postStuInfo } from "../services/student";


const stuInfo = () => ({
  type: types.STUDENT_INFO,
});

const stuInfoSuccess = (response) => ({
  type: types.STUDENT_INFO_SUCCESS,
  payload: response,
});

const stuInfoFailure = () => ({
  type: types.STUDENT_INFO_FAILURE,
});


export const studentInfoAction= (token,studentInfoData) => async (dispatch) => {
  try{
    dispatch(stuInfo());
    const response = await postStuInfo(token,studentInfoData, "student_info");
    if (response){
      dispatch(stuInfoSuccess(response.data));
      ToastConfig.success("Successfully added student information.")
    }else{
      dispatch(stuInfoFailure());
      ToastConfig.error("Filed to load student information.")
    }
  }
  catch (error) {
      console.log("error in sign up",error);
      dispatch(stuInfoFailure());
      ToastConfig.error(error.error)
    }
};