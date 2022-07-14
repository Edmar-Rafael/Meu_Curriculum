import React, { createContext, ReactNode, useEffect, useState } from "react"
import { EMAIL, PASSWORD, SESSION_KEY } from '../config'

type ContextProps = {
   children: ReactNode;
}

export type UserType = {
   name: string;
   password: string; 
}

export type AuthContextProps = {
   user: {} | null;
   logOut: () => void;
   logIn: (value: UserType) => void;
   isAuthenticated: boolean;
}


export const AuthContext = createContext({} as AuthContextProps)

export function AuthContextProvider({children}: ContextProps) {
   const [user, setUser] = useState({} || null)

   useEffect(() => {
      async function loadStorageData(){
         const session = await localStorage.getItem(`${SESSION_KEY}`)
         if(session) {
            setUser(JSON.parse(session))
         }
      } 
      loadStorageData()
   }, [])
   
   function logIn(userData: UserType) {
      if(EMAIL === userData.name && PASSWORD === userData.password) {
         setUser(userData)
         localStorage.setItem(`${SESSION_KEY}`, JSON.stringify(userData))
      }
   }
   
   function logOut() {
      setUser(null)
      localStorage.removeItem(`${SESSION_KEY}`)
   }

   const Contexts = {logIn, logOut, user, isAuthenticated: !!user}
   
   return (
      <AuthContext.Provider value={Contexts} >
         {children}
      </AuthContext.Provider>
   )
}