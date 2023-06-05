import { KeyItem } from "../key.item/Key.item";

export function Keyboard() {
  const keyContainer = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "Delete",
  ];

  return (
    <>
      <div className="keyboard-container">
        <ol className="keyboard">
          {keyContainer.map((item) => (
            <KeyItem item={item} key={item}></KeyItem>
          ))}
        </ol>
      </div>
    </>
  );
}
