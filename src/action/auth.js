import ToastConfig from "../components/toast/Toast";
import * as types from "../constant/actionTypes";
import { postRequest } from "../services/login";


const getAuth = (token) => ({
  type: types.IS_AUTH,
  payload: token,
});

export const logout = () => ({
  type: types.LOG_OUT,
});

export const auth = (dataLoginRequest) => async (dispatch) => {
  try {
    const response = await postRequest(dataLoginRequest, "user/login");
    console.log('......',response.data.token)
    dispatch(getAuth(response.data.token));
    ToastConfig.success("Successfully Login.")
  } catch (error) {
    console.log("error in login",error);
    ToastConfig.error(error.message)
  }
};



