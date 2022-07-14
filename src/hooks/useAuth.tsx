import { useContext } from "react";
import { AuthContext, AuthContextProps } from '../contexts/authContext'

export function useAuth(): AuthContextProps {
   const session = useContext(AuthContext)

   return session
}