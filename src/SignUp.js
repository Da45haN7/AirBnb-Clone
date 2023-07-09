import React from "react";
import "./signup.css"
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import CloseIcon from '@mui/icons-material/Close';

export default function SignUp(props){
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [name, setName] = React.useState("");
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

    return (
        <div className="popup">
            <div className="popup-inner">
                <div className="login__top">
                    <h2>log in or sign Up</h2>
                    <CloseIcon sx={{ fontSize: 35 }} className="close" onClick={props.toggle}/>
                </div>
                <input
                    type="text"
                    className="login__textBox"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="E-mail Address"
                />
                <input
                    type="password"
                    className="login__textBox"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />
                <button
                    className="login__btn"
                    onClick={() => logInWithEmailAndPassword(email, password)}>Login</button>
                <button className="login__btn login__google" onClick={signInWithGoogle}>Continue with Google</button>
                <div>
                    Don't have an account? <Link to="/register">Register</Link> now.
                </div>
            </div>
        </div>
    )

}