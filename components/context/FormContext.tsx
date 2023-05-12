import {createContext, Dispatch, ReactNode, SetStateAction, useState} from "react";

type MyFormContextType = {
  formContext: any | null,
  setFormContext: Dispatch<SetStateAction<{}>> | null
}

const defaultContext: MyFormContextType = {
  formContext: null,
  setFormContext: null
}

export const Context = createContext<MyFormContextType>(defaultContext)

interface FormContextProps {
  children: ReactNode
}

export default function FormContext({children}: FormContextProps) {
  const [formContext, setFormContext] = useState({});
  return (
    <Context.Provider value={{formContext, setFormContext}}>
      {children}
    </Context.Provider>
  )
}
