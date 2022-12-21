import ToastConfig from "../components/toast/Toast";
import * as types from "../constant/actionTypes";
import { getCurrentDocument, postStudentFileInfo } from "../services/student";


const studentFileInfo = () => ({
  type: types.STUDENT_FILE_INFO,
});

const studentFileSuccess = (response) => ({
  type: types.STUDENT_FILE_INFO_SUCCESS,
  payload: response,
});

const studentFileInfoFailure = () => ({
  type: types.STUDENT_FILE_INFO_FAILURE,
});


export const studentFileInfoAction= (studentFileInfoData) => async (dispatch) => {
  try{
    dispatch(studentFileInfo());
    const response = await postStudentFileInfo(studentFileInfoData, "student/file");
    if (response){
      dispatch(studentFileSuccess(response));
      ToastConfig.success("Successfully saved student document information.")
    }else{
      dispatch(studentFileInfoFailure());
      ToastConfig.error("Filed to load student document information.")
    }
  }
  catch (error) {
      console.log("error save student document ::",error);
      dispatch(studentFileInfoFailure());
      ToastConfig.error(error.error)
    }
};

const getDocumentInfo = () => ({
  type: types.GET_STUDENT_DOCUMENT,
});

const getDocumentSuccess = (response) => ({
  type: types.GET_STUDENT_DOCUMENT_SUCCESS,
  payload: response,
});

const getDocumentFailure = () => ({
  type: types.GET_STUDENT_DOCUMENT_FAILURE,
});

export const getStudentDocument= (token,id) => async (dispatch) => {
  try{
    dispatch(getDocumentInfo());
    const response = await getCurrentDocument(token, "student/"+id+"/document");
    if (response){
      dispatch(getDocumentSuccess(response.data));
      ToastConfig.success("Successfully get student address.")
    }else{
      dispatch(getDocumentFailure());
      ToastConfig.error("Filed to load student document.")
    }
  }
  catch (error) {
      console.log("error save student document",error);
      dispatch(getDocumentFailure());
      ToastConfig.error(error.error)
    }
};