import ToastConfig from "../components/toast/Toast";
import * as types from "../constant/actionTypes";
import { postresetPassword, emailVerify} from "../services/user";


const restPassword = () => ({
  type: types.RESET_PASSWORD,
});

const resetPasswordSuccess = (response) => ({
  type: types.RESET_PASSWORD_SUCCESS,
  payload: response,
});

const  resetPasswordFailure = () => ({
  type: types.RESET_PASSWORD_FAILURE,
});


export const resetPasswordAction= (resetPasswordData) => async (dispatch) => {
  try{
    dispatch(restPassword());
    const response = await postresetPassword(resetPasswordData, "user/reset-password");
    if (response){
      dispatch(resetPasswordSuccess(response.data));
      ToastConfig.success("Successfully sent reset password.")
    }else{
      dispatch(resetPasswordFailure());
      ToastConfig.error("Failed to reset password.")
    }
  }
  catch (error) {
      console.log("error in reset password ",error);
      dispatch(resetPasswordFailure());
      ToastConfig.error(error.error)
    }
};


const verifyEmail = () => ({
  type: types.VERIFY_EMAIL,
});

const verifyEmailSuccess = (response) => ({
  type: types.VERIFY_EMAIL_SUCCESS,
  payload: response,
});

const  verifyEmailFailure = () => ({
  type: types.VERIFY_EMAIL_FAILURE,
});


export const verifyEmailAction= (token) => async (dispatch) => {
  try{
    dispatch(verifyEmail());
    const response = await emailVerify(token,"/user/email/verify");
    if (response){
      dispatch(verifyEmailSuccess(response.data));
      ToastConfig.success("Successfully sent reset password.")
    }else{
      dispatch(verifyEmailFailure());
      ToastConfig.error("Failed to reset password.")
    }
  }
  catch (error) {
      console.log("error in reset password ",error);
      dispatch(verifyEmailFailure());
      ToastConfig.error(error.error)
    }
};