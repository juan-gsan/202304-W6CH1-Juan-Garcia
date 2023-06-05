import { usePhone } from "../hooks/use.phone";
import { Context } from "./context";

export function ContextProvider({ children }: { children: JSX.Element }) {
  const value = {
    phoneContext: usePhone(),
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
}
