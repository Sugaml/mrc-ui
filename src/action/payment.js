import ToastConfig from "../components/toast/Toast";
import * as types from "../constant/actionTypes";
import { postPaymentInitiate, postPaymentVerify } from "../services/login";


const paymentInitiate = () => ({
  type: types.PAYEMNET_INITIATE,
});

const paymentInitiateSuccess = (response) => ({
  type: types.PAYEMNET_INITIATE_SUCCESS,
  payload: response,
});

const paymentInitiateFailure = () => ({
  type: types.PAYEMNET_INITIATE_FAILURE,
});


export const paymentInitiateAction= (paymentInitiateData) => async (dispatch) => {
  try{
    dispatch(paymentInitiate());
    const response = await postPaymentInitiate(paymentInitiateData, "payment/initiate");
    if (response){
      dispatch(paymentInitiateSuccess(response));
      ToastConfig.success("Succeessfully initiate payment process.")
    }else{
      dispatch(paymentInitiateFailure());
      ToastConfig.error("Failed initiate payment process.")
    }
  }
  catch (error) {
      console.log("error in payment initiate",error);
      dispatch(paymentInitiateFailure());
      ToastConfig.error(error.error)
    }
};


const paymentVerify = () => ({
  type: types.PAYMENT_VERIFY,
});

const paymentVerifySuccess = (response) => ({
  type: types.PAYEMNET_VERIFY_SUCCESS,
  payload: response,
});

const paymentVerifyFailure = () => ({
  type: types.PAYEMNET_VERIFY_FAILURE,
});


export const paymentVerifyAction= (paymentVerifyData) => async (dispatch) => {
  try{
    dispatch(paymentVerify());
    const response = await postPaymentVerify(paymentVerifyData, "payment/verify");
    if (response){
      dispatch(paymentVerifySuccess(response));
      ToastConfig.success("Succeessfully verification payment.")
    }else{
      dispatch(paymentVerifyFailure());
      ToastConfig.error("Failed verification payment.")
    }
  }
  catch (error) {
      console.log("error in payment verification",error);
      dispatch(paymentVerifyFailure());
      ToastConfig.error(error.error)
    }
};