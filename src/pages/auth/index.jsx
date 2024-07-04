import {auth, provider} from "../../configs/firebase-config";
import { signInWithPopup} from "firebase/auth"
import {useNavigate} from "react-router-dom"
import React from 'react'
import "./style.css"
import { ExpenseTracker } from "../tracker";

export const Auth = () => {
    const navigate = useNavigate();
    const signInGoogle = async () => {
        
        const results = await signInWithPopup(auth, provider);


        console.log(results);
        const authInfo = {
            userId : results.user.uid,
            name : results.user.displayName,
            profilePhoto : results.user.photoURL,
            isAuth : true
        };
        localStorage.setItem("auth", JSON.stringify(authInfo));
        navigate("/expense-tracker");
    }

    
    return (
        <div className='login-page'>
        <p>Sign in with google to continue</p>
        <button className='login-with-google-btn' onClick = {signInGoogle}> Sign in with Google </button>
        </div>
    );
}
