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

  const getCoursesFailure = () => ({
    type: types.GETCOURSESFAILURE,
  });

export const getAllCourses= () => async (dispatch) => {
  try {
    dispatch(getCourses());
    const response = await getListCourses("", "courses");
    console.log('......',response.data)
    if (response){
    await dispatch(getCoursesSuccess(response));
    ToastConfig.success("Successfully get courses.")
    }else{
      dispatch(getCoursesFailure());
      ToastConfig.error("Filed to load courses")
    }
  } catch (error) {
    console.log("error in fetch all courses",error);
    dispatch(getCoursesFailure());
    ToastConfig.error(error.message)
  }
};