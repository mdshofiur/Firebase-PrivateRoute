import { createContext } from "react";
import useFirebase from "../../hooks/useFirebase";

export const AuthContext = createContext();

const AuthProvider = ({children})=>{
   const FirebaseInfo = useFirebase();
   return (
    <AuthContext.Provider value={FirebaseInfo}>
        {children}
    </AuthContext.Provider>
   )
}


export default AuthProvider;