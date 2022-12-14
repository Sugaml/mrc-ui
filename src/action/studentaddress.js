import ToastConfig from "../components/toast/Toast";
import * as types from "../constant/actionTypes";
import { getCurrentAddress, postStudentAddressInfo } from "../services/student";


const studentAddressInfo = () => ({
  type: types.STUDENT_ADDRESS_INFO,
});

const studentAddressSuccess = (response) => ({
  type: types.STUDENT_ADDRESS_INFO_SUCCESS,
  payload: response,
});

const studentAddressInfoFailure = () => ({
  type: types.STUDENT_ADDRESS_INFO_FAILURE,
});

export const studentAddressInfoAction= (studentAddressInfoData) => async (dispatch) => {
  try{
    dispatch(studentAddressInfo());
    const response = await postStudentAddressInfo(studentAddressInfoData, "student/address");
    if (response){
      dispatch(studentAddressSuccess(response.data));
      ToastConfig.success("Successfully saved student address.")
    }else{
      dispatch(studentAddressInfoFailure());
      ToastConfig.error("Filed to load student address.")
    }
  }
  catch (error) {
      console.log("error save student address",error);
      dispatch(studentAddressInfoFailure());
      ToastConfig.error(error.error)
    }
};

const getAddressInfo = () => ({
  type: types.GET_CURRENT_ADDRESS,
});

const getAddressSuccess = (response) => ({
  type: types.GET_CURRENT_ADDRESS_SUCCESS,
  payload: response,
});

const getAddressInfoFailure = () => ({
  type: types.GET_CURRENT_ADDRESS_FAILURE,
});

export const getAddress= (token,id) => async (dispatch) => {
  try{
    dispatch(getAddressInfo());
    const response = await getCurrentAddress(token, "student/"+id+"/address");
    if (response){
      dispatch(getAddressSuccess(response.data));
      ToastConfig.success("Successfully get student address.")
    }else{
      dispatch(getAddressInfoFailure());
      ToastConfig.error("Filed to load student address.")
    }
  }
  catch (error) {
      console.log("error save student address",error);
      dispatch(getAddressInfoFailure());
      ToastConfig.error(error.error)
    }
};