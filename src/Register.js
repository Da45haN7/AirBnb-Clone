import React, { useState } from "react";
import { Link} from "react-router-dom";
import {
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "./firebase";
import "./Register.css";
import CloseIcon from '@mui/icons-material/Close';
import SignUp from "./SignUp";

function Register(props) {

  const [seen, setSeen] = React.useState(false)
  function togglePop(){
      setSeen(!seen)
  }
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const register = () => {
    if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name, email, password);
  };
  return (
    <div className="register">
      <div className="register__container">
        <div className="login__top">
          <h2>Register</h2>
          <CloseIcon sx={{ fontSize: 35 }} className="close" onClick={props.toggle}/>
        </div>
        <input
          type="text"
          className="register__textBox"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
        />
        <input
          type="text"
          className="register__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <input
          type="password"
          className="register__textBox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button className="register__btn" onClick={register}>
          Register
        </button>
        <button
          className="register__btn register__google"
          onClick={signInWithGoogle}
        >
          Register with Google
        </button>
        <div className="link">
          Already have an account? <a onClick={togglePop}>Log in</a>{seen ? <SignUp toggle={togglePop} /> : null} now.
        </div>
      </div>
    </div>
  );
}
export default Register;