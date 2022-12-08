import axios from 'axios';

export const postRequest =  (requestLoginData, url) => {
    return  axios.post(`${process.env.REACT_APP_API}/${url}`, requestLoginData);
  };

  export const postStuInfo =  (studentInfoData, url) => {
    return  axios.post(`${process.env.REACT_APP_API}/${url}`, studentInfoData);
  };

  export const postStudentAddressInfo =  (studentAddressInfoData, url) => {
    return  axios.post(`${process.env.REACT_APP_API}/${url}`, studentAddressInfoData);
  };

  export const postStudentEducationInfo =  (studentEducationInfoData, url) => {
    return  axios.post(`${process.env.REACT_APP_API}/${url}`, studentEducationInfoData);
  };

  export const postStudentFileInfo =  (studentFileInfoData, url) => {
    return  axios.post(`${process.env.REACT_APP_API}/${url}`, studentFileInfoData);
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

  export const getListCourses =  (header, url) => {
    return  axios.get(`${process.env.REACT_APP_API}/${url}`);
  };