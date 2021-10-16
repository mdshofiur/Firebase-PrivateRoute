import { useState,useEffect } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut} from "firebase/auth";
import initializeAuth from "../Firebase/Firebaseinit";

initializeAuth();
const provider = new GoogleAuthProvider();
const auth = getAuth();

const useFirebase = () => {
  const [users,setuser] = useState({});

  // Google Sign Up
 const SignUpwithGoogle = ()=> {
      return signInWithPopup(auth, provider)
 }
 

// Google Sign Out
 const GoogleSignOut = ()=> {
    signOut(auth)
    .then(() => {
        console.log("Sign-out successful");
        setuser({});
      }).catch((error) => {
       console.log(error);
      });
 }

 // Check User identity
 useEffect(() => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            setuser(user)
        }
      });
 },[])

 // Returns Some important Functions as a object
 return {
    users,
     SignUpwithGoogle,
     GoogleSignOut,
 }
 
};

export default useFirebase;