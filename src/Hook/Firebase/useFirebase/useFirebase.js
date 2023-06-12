import { useEffect, useState } from "react";
import initializeFirebase from "../FirebaseKey/firebase.init";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

// Firebase init form Firebase Key----

initializeFirebase();


const useFirebase =()=>{

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const auth = getAuth()

    // Google Sign In ----
    const googleProviderLogin = (provider) =>{
        setLoading(true)
     return signInWithPopup(auth, provider)
    }

    useEffect(()=>{
      const unsubscribe=  onAuthStateChanged(auth, (currentUser)=>{
            console.log('user Sign in change', currentUser);
            if(currentUser === null || currentUser.emailVerified ){
                setUser(currentUser)
            }
            setLoading(false)
        })

        return ()=>{
            unsubscribe()
        }
    },[])


// Create New Users ----

const signUp = (email, password) =>{
    setLoading(true)
   return createUserWithEmailAndPassword(auth, email, password)
}

// Update user -------

const updateUsersProfile = (profile) =>{
    return updateProfile(auth.currentUser, profile)
}

// Sign In with Email And Password ----

const signIn = (email, password) =>{
    setLoading(true)
  return  signInWithEmailAndPassword(auth, email, password)
}

// Eamil Verified ------

const verifyEmail = () =>{
    return sendEmailVerification(auth.currentUser)
}

    // Sign Out -------

    const logOut = () =>{
        setLoading(true)
        signOut(auth)  
    }

    return{
        user,
        loading,
        setLoading,
        googleProviderLogin,
        signUp,
        verifyEmail,
        updateUsersProfile,
        signIn,
        logOut,
    }
}

export default useFirebase;