import * as types from "../constant/actionTypes";

const INITIAL_PAYMENT_INITIATE_STATE = {
  paymentInitiateInfo: null,
  payment: false,
};

function PaymentInitiateInfo(state = INITIAL_PAYMENT_INITIATE_STATE, action) {
  const { type, payload } = action;
  switch (type) {
    case types.PAYEMNET_INITIATE:
      console.log("data",payload)
      return {
        ...state,
        payment: true
      };
      case types.PAYEMNET_INITIATE_SUCCESS:
        return {
          ...state,
          paymentInitiateInfo: payload,
          payment: false
        };
      case types.PAYEMNET_INITIATE_FAILURE:
        return {
          ...state,
          payment: false,
        };
    default:
      return state;
  }
}

export default PaymentInitiateInfo;