import * as types from "../constant/actionTypes";

const INITIAL_STATE = {
  currentDocument:null,
  isCurrentDocument:false
};

function CurrentDocument(state = INITIAL_STATE, action) {
  const { type, payload } = action;
  switch (type) {
    case types.GET_STUDENT_DOCUMENT:
      return {
        ...state,
        isCurrentDocument: true,
      };
    case types.GET_STUDENT_DOCUMENT_SUCCESS:
      console.log("success current document :: ",payload)
      return {
        ...state,
        currentDocument:payload
      }
    default:
      return state;
  }
}

export default CurrentDocument;