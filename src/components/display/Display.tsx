import { useContext } from "react";
import { Context } from "../../context/context";

export function Display() {
  const {
    phoneContext: { handleAddNumber },
  } = useContext(Context);

  return (
    <>
      <span className="number">{handleAddNumber}</span>
    </>
  );
}
