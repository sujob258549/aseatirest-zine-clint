import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "./firebase.config";
import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";




export const CreatAuthContext = createContext(null);

const AuthContext = ({ children }) => {

    const auth = getAuth(app);

    const [user, setuser] = useState();
    const googleprovider = new GoogleAuthProvider();
    const githubprovider = new GithubAuthProvider();


    // creart user 
    const creatUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // sign in with google
    const logineWithGoogle = () => {
        return signInWithPopup(auth, googleprovider)
    }

    // github
    const signInWithGithub = () => {

        return signInWithPopup(auth, githubprovider)

    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setuser(user);
                console.log(user)

            }
            else {
                setuser(null);
            }
        });
        return () => {
            unsubscribe();
        };
    }, []);

    // loge out
    const signout = () => {
        return signOut(auth)
            .then(() => {
                setuser('')
            }).catch((error) => {
                console.error(error)
            });
    };
    const userInfo = {
        creatUser,
        signInUser,
        logineWithGoogle,
        signInWithGithub,
        signout,
        user
    }
    return (
        <CreatAuthContext.Provider value={userInfo}>
            {children}
        </CreatAuthContext.Provider>
    );
};

export default AuthContext;