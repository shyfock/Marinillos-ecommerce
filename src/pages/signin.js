import React from "react";
// import { useNavigate } from "react-router-dom";
// import useAuth from "../hooks/useAuth";
import Login from "../components/Form/SignInForm";

const SignIn = () => {
    // const navigate = useNavigate();
    // const login = useAuth();

    // const handleLogin = async () => {
    //     await login().then(() => {
    //         navigate("/");
    //     });
    // };

    return (
        <Login />
        // <div>
        //     <h1>Login</h1>
        //     <button onClick={handleLogin}>Log in</button>
        // </div>
    );
};

export default SignIn;