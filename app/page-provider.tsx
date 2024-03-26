"use client"

import { Root } from "@/type"
import { createContext, useState } from "react"


interface User {
  email: string
  phone: string
}

interface Theme {
  modals: JSX.Element[]
  setModals: React.Dispatch<React.SetStateAction<any>>
  global: Root,
  isAdmin: boolean,
  setIsAdmin: React.Dispatch<React.SetStateAction<boolean>>
  user: User,
  setUser: React.Dispatch<React.SetStateAction<any>>
}

export const Context = createContext<Theme>({
  modals: [],
  isAdmin: false,
  user: { email: "", phone: "" },
  setUser: () => { },
  setIsAdmin: () => { },
  setModals: () => { },
  global: {} as Root
})

function PageProvider({ children, global={results: []} }: Readonly<{ children: React.ReactNode; global?: Root }>) {

  const [modals, setModals] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [user, setUser] = useState({ email: "", phone: "" });

  return <Context.Provider value={{ modals, setModals, global, isAdmin, setIsAdmin, user, setUser }}>{children}</Context.Provider>
}

export default PageProvider;