import { useContext } from "react";
import { Context } from "../../context/context";

export function Info() {
  const {
    phoneContext: { message },
  } = useContext(Context);

  return (
    <>
      <span className={message}>Calling...</span>
    </>
  );
}
