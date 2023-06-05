import { PhoneStructure } from "../models/phone.structure";
import { PhoneAction } from "./actions.creator";
import { actionTypes } from "./actions.types";

export type PhoneState = {
  phone: PhoneStructure;
};

export const phoneReducer = (state: PhoneState, action: PhoneAction) => {
  let payload: PhoneStructure;
  switch (action.type) {
    case actionTypes.updateCalling:
      payload = action.payload as PhoneStructure;
      return { ...state, phone: !state.phone.isCalling };

    case actionTypes.updateDisplay:
      payload = action.payload as PhoneStructure;
      return { ...state, phone: payload.phoneNumber };

    default:
      return { ...state };
  }
};
