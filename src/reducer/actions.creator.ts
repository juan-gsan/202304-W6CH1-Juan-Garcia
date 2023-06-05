import { PhoneStructure } from "../models/phone.structure";
import { actionTypes } from "./actions.types";

type Keys = keyof typeof actionTypes;

export type PhoneAction = {
  type: (typeof actionTypes)[Keys];
  payload: PhoneStructure;
};

export function updateDisplay(payload: PhoneStructure): PhoneAction {
  return {
    type: actionTypes.updateDisplay,
    payload,
  };
}
export function deleteDisplay(payload: PhoneStructure): PhoneAction {
  return {
    type: actionTypes.deleteDisplay,
    payload,
  };
}
export function updateCalling(payload: PhoneStructure): PhoneAction {
  return {
    type: actionTypes.updateCalling,
    payload,
  };
}
