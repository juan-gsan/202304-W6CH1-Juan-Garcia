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

  // const handleCall = () => {};

  const handleAddNumber = (item) => {
    dispatch(ac.updateDisplay(item));
  };

  // const handleDeleteNumber = (item) => {};

  return {
    phone: phoneState.phone,
    // handleDeleteNumber,
    handleAddNumber,
  };
}
