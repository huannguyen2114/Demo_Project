import { createContext, useContext, useState } from "react";

const Context = createContext(null);

export function ModalProvider({ children }) {
  const [modal, setModal] = useState(null);
  const values = { modal, setModal };
  return <Context.Provider value={values}>{children}</Context.Provider>;
}

// For the children
//
export function useModal() {
  const context = useContext(Context);
  const errorText =
    "To use useModal(0), you need to wrap the parent component with Modal Provider";
  if (!context) {
    throw new Error(errorText);
  }
  return context;
}
