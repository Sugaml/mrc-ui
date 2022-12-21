import ToastConfig from "../components/toast/Toast";
import * as types from "../constant/actionTypes";
import { getStudentGeneral,getUser } from "../services/user";


const getStudentGeneralInfo = () => ({
  type: types.GET_STUDENT_GENERAL,
});

const getStudentInfoSuccess = (response) => ({
    type: types.GET_STUDENT_GENERAL_SUCCESS,
    payload: response
  });

  const getStudentInfoFailure = () => ({
    type: types.GET_STUDENT_GENERAL_FAILURE,
  });

export const getStudentGeneralAction= (token) => async (dispatch) => {
  try {
    dispatch(getStudentGeneralInfo());
    const response = await getStudentGeneral(token, "student/general-info");
    if (response){
      console.log("general info",response.data)
      await dispatch(getStudentInfoSuccess(response.data));
      ToastConfig.success("Successfully get student general.")
    }else{
      dispatch(getStudentInfoFailure());
      ToastConfig.error("Filed to load student general.")
    }
    
  } catch (error) {
    console.log("error in fetch student info",error);
    dispatch(getStudentInfoFailure());
    ToastConfig.error(error.message)
  }
};

const getUserInfo = () => ({
  type: types.GETUSER,
});

const getUserSuccess = (response) => ({
    type: types.GETUSERSUCCESS,
    payload: response
  });

  const getUserFailure = () => ({
    type: types.GETUSERFAILURE,
  });

export const getUserAction= (token) => async (dispatch) => {
  try {
    dispatch(getUserInfo());
    const response = await getUser(token, "user");
    if (response){
      console.log("general info",response.data)
      await dispatch(getUserSuccess(response.data));
      ToastConfig.success("Successfully get user")
    }else{
      dispatch(getUserFailure());
      ToastConfig.error("Filed to load user")
    }
    
  } catch (error) {
    console.log("error in fetch user",error);
    dispatch(getUserFailure());
    ToastConfig.error(error.message)
  }
};