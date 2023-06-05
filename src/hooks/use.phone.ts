import { useReducer } from "react";
import { phoneReducer, PhoneState } from "../reducer/reducer";
import * as ac from "../reducer/actions.creator";

export function usePhone() {
  const initialState: PhoneState = {
    phone: {
      isCalling: false,
      phoneNumber: "",
    },
  };

  const [phoneState, dispatch] = useReducer(phoneReducer, initialState);

  const handleAddNumber = (item: any) => {
    console.log(item);
    dispatch(ac.updateDisplay(item));
  };

  const handleDeleteNumber = (item: any) => {
    dispatch(ac.deleteDisplay(item));
  };

  return {
    phone: phoneState.phone.phoneNumber,
    handleDeleteNumber,
    handleAddNumber,
  };
}
