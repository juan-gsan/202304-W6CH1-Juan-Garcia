import { useContext } from "react";
import { Context } from "../../context/context";

export function Display() {
  const {
    phoneContext: { phone },
  } = useContext(Context);

  return (
    <>
      <span className="number">{phone}</span>
    </>
  );
}
