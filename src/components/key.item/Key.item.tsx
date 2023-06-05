import { useContext } from "react";
import { Context } from "../../context/context";

type PropsType = {
  item: string;
};

export function KeyItem({ item }: PropsType) {
  const {
    phoneContext: { handleAddNumber, handleDeleteNumber },
  } = useContext(Context);

  const handleClick = () => {
    handleAddNumber(item);
  };

  const handleClickDelete = () => {
    handleDeleteNumber(item);
  };

  return (
    <>
      <li>
        {item !== "Delete" ? (
          <button className="key" onClick={handleClick}>
            {item}
          </button>
        ) : (
          <button className="key big" onClick={handleClickDelete}>
            {item}
          </button>
        )}
      </li>
    </>
  );
}
