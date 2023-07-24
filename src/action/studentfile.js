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


export const studentFileInfoAction= (studentFileInfoData,sid) => async (dispatch) => {
  try{
    dispatch(studentFileInfo());
    console.log("sid ",sid)
    const response = await postStudentFileInfo("student/document",studentFileInfoData);
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
      ToastConfig.error(error.response.data.error)
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
      ToastConfig.error(error.response.data.error)
    }
};

export const uploadFile = async (file, fileType) => {
  try {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('fileType', fileType);

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('POST', `${process.env.REACT_APP_API}/uploads`, true);
      xhr.onload = function () {
        if (xhr.status === 200) {
          const response = JSON.parse(xhr.responseText);
          resolve(response.data.fileUrl); // Resolve with the file URL from the response
        } else {
          reject(new Error('Failed to upload the file'));
        }
      };
      xhr.onerror = function () {
        reject(new Error('Failed to upload the file'));
      };

      xhr.send(formData);
    });
  } catch (error) {
    throw error;
  }
};
