import ToastConfig from "../components/toast/Toast";
import * as types from "../constant/actionTypes";
import { postStudentAddressInfo } from "../services/student";


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
      dispatch(studentAddressSuccess(response));
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