import ToastConfig from "../components/toast/Toast";
import * as types from "../constant/actionTypes";
import { getListCourses,getCourse } from "../services/course";


const getCourses = () => ({
  type: types.GETCOURSES,
});

const getCoursesSuccess = (data) => ({
    type: types.GETCOURSESSUCCESS,
    payload: data
  });

  const getCoursesFailure = () => ({
    type: types.GETCOURSESFAILURE,
  });

export const getAllCourses= () => async (dispatch) => {
  try {
    dispatch(getCourses());
    const response = await getListCourses("", "courses");
    if (response){
      console.log("respone course ::",response.data)
    await dispatch(getCoursesSuccess(response.data));
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

const getCurrentCourses = () => ({
  type: types.GET_CURRENT_COURSE,
});

const getCurrentCoursesSuccess = (data) => ({
    type: types.GET_CURRENT_COURSE_SUCCESS,
    payload: data
  });

  const getCurrentCoursesFailure = () => ({
    type: types.GET_CURRENT_COURSE_FAILURE,
  });

export const getCurrentCourse= (token,id) => async (dispatch) => {
  try {
    dispatch(getCurrentCourses());
    const response = await getCourse(token,"course/"+id);
    if (response){
      console.log("respone course ::",response.data)
    await dispatch(getCurrentCoursesSuccess(response.data));
    ToastConfig.success("Successfully select "+response.data.name +" course")
    }else{
      dispatch(getCurrentCoursesFailure());
      ToastConfig.error("Filed to load course")
    }
  } catch (error) {
    console.log("error in fetch all course",error);
    dispatch(getCurrentCoursesFailure());
    ToastConfig.error(error.message)
  }
};