import ToastConfig from "../components/toast/Toast";
import * as types from "../constant/actionTypes";
import { getTransactions } from "../services/payment";

const listTransaction = () => ({
    type: types.LIST_TRANSACTION,
  });
  
  const listTransactionSuccess = (response) => ({
      type: types.LIST_TRANSACTION_SUCCESS,
      payload: response
    });
  
    const listTransactionFailure = () => ({
      type: types.LIST_TRANSACTION_FAILURE,
    });
  
  export const listTransactionAction= (token,studentID) => async (dispatch) => {
    try {
      dispatch(listTransaction());
      const response = await getTransactions(token, "payment/student/transactions?student_id="+studentID);
      if (response.data || response.status === 200){
        await dispatch(listTransactionSuccess(response.data));
        ToastConfig.success("Successfully list transactions")
      }
      else{
        dispatch(listTransactionFailure());
        ToastConfig.error("Failed to load transactions")
      }
    } catch (error) {
      await dispatch(listTransactionFailure());
      ToastConfig.error(error.response.data.data.error)
    }
  };