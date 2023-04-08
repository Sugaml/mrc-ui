import * as types from "../constant/actionTypes";

const INITIAL_STATE = {
  transactions: null,
  isTransactions:false
};

function GetTransactions(state = INITIAL_STATE, action) {
  const { type, payload } = action;
  switch (type) {
    case types.LIST_TRANSACTION:
      return {
        ...state,
        isTransactions: true,
      };
    case types.LIST_TRANSACTION_SUCCESS:
      return {
        ...state,
        transactions:payload,
        isTransactions: false,
      }
      case types.LIST_TRANSACTION_FAILURE:
        return {
          ...state,
          isTransactions: false,
        };
    default:
      return state;
  }
}

export default GetTransactions;