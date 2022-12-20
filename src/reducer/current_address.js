import * as types from "../constant/actionTypes";

const INITIAL_STATE = {
  address:null,
  isCurrentAddress:false
};

function CurrentAddress(state = INITIAL_STATE, action) {
  const { type, payload } = action;
  switch (type) {
    case types.GET_CURRENT_ADDRESS:
      return {
        ...state,
        isCurrentAddress: true,
      };
    case types.GET_CURRENT_ADDRESS_SUCCESS:
      console.log("success current address :: ",payload)
      return {
        ...state,
        address:payload
      }
    default:
      return state;
  }
}

export default CurrentAddress;