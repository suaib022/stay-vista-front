import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebase.config";
import { clearCookie } from "../API/Auth";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUer = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    };

    const resetPassword = email => {
        setLoading(true);
        return sendPasswordResetEmail(auth, email);
    };

    const logOut = async() => {
        setLoading(true);
        await clearCookie();
        return signOut(auth);
    }

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        }
        )
    }

    // onAuthSTateChange
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('Current User', currentUser);
            setLoading(false);
        })
        return () => {
            return unSubscribe
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUer,
        signIn,
        signInWithGoogle,
        resetPassword,
        updateUserProfile,
        logOut
    }





    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;