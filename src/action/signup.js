import ToastConfig from "../components/toast/Toast";
import * as types from "../constant/actionTypes";
import { postRequest } from "../services/login";


const signUpUser = (response) => ({
  type: types.ISIGNUP,
  payload: response,
});


export const signUp= (dataSignUpRequest) => async (dispatch) => {
  try {
    const response = await postRequest(dataSignUpRequest, "user");
    dispatch(signUpUser(true));
    if (response){
      ToastConfig.success("Successfully signup.You got the email and click verify email link.")
    }else{
      ToastConfig.error("Failed signup process.")
    }
  } catch (error) {
    ToastConfig.error(error.response.data.error)
  }
};