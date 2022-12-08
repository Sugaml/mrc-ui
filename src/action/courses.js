import ToastConfig from "../components/toast/Toast";
import * as types from "../constant/actionTypes";
import { getListCourses } from "../services/login";


const getCourses = () => ({
  type: types.GETCOURSES,
});

const getCoursesSuccess = (response) => ({
    type: types.GETCOURSESSUCCESS,
    payload: response
  });

export const getAllCourses= () => async (dispatch) => {
  try {
    const response = await getListCourses("", "courses");
    console.log('......',response.data)
    await dispatch(getCoursesSuccess(response));
    ToastConfig.success("Successfully get courses.")
  } catch (error) {
    console.log("error in fetch all courses",error);
    ToastConfig.error(error.message)
  }
};