import * as types from "../constant/actionTypes";

const INITIAL_PAYMENT_VERIFY_STATE = {
  paymenVerifyInfo: null,
  isVerify: false,
};

function PaymentVerifyInfo(state = INITIAL_PAYMENT_VERIFY_STATE, action) {
  const { type, payload } = action;
  switch (type) {
    case types.PAYMENT_VERIFY:
      console.log("data",payload)
      return {
        ...state,
        isVerify: true
      };
      case types.PAYEMNET_VERIFY_SUCCESS:
        return {
          ...state,
          paymenVerifyInfo: payload,
          payment: false
        };
      case types.PAYEMNET_VERIFY_FAILURE:
        return {
          ...state,
          isVerify: false,
        };
    default:
      return state;
  }
}

export default PaymentVerifyInfo;