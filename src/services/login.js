import axios from 'axios';

export const postRequest =  (requestLoginData, url) => {
    return  axios.post(`${process.env.REACT_APP_API}/${url}`, requestLoginData);
  };


  export const postForgotPassword =  (forgotPassword, url) => {
    return  axios.post(`${process.env.REACT_APP_API}/${url}`, forgotPassword);
  };

  export const postPaymentInitiate =  (paymentInitiateData, url) => {
    return  axios.post(`${process.env.REACT_APP_API}/${url}`, paymentInitiateData);
  };

  export const postPaymentVerify =  (paymentVerifyData, url) => {
    return  axios.post(`${process.env.REACT_APP_API}/${url}`, paymentVerifyData);
  };

