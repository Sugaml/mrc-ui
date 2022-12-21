import ToastConfig from "../components/toast/Toast";
import * as types from "../constant/actionTypes";
import { postForgotPassword } from "../services/login";


const forgotPassword = () => ({
  type: types.FORGOT_PASSWORD,
});

const forgotPasswordSuccess = (response) => ({
  type: types.FORGOT_PASSWORD_SUCCESS,
  payload: response,
});

const  forgotPasswordFailure = () => ({
  type: types.FORGOT_PASSWORD_FAILURE,
});


export const fotgotPasswordAction= (fotgotPasswordData) => async (dispatch) => {
  try{
    dispatch(forgotPassword());
    const response = await postForgotPassword(fotgotPasswordData, "user/forgot-password");
    if (response){
      dispatch(forgotPasswordSuccess(response.data));
      ToastConfig.success("Successfully sent email.")
    }else{
      dispatch(forgotPasswordFailure());
      ToastConfig.error("Failed to forgot password.")
    }
  }
  catch (error) {
      console.log("error in forgot password ",error);
      dispatch(forgotPasswordFailure());
      ToastConfig.error(error.error)
    }
};