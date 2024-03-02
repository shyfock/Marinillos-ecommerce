import React, { useState, useRef } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { getSession } from "./helper/helper";

const checkAuth = () => {
    return !getSession() ? false : true;
}

function ProtectedRoute({ children })  {
    
    const [auth] = useState(false);
    const prevAuthRef = useRef(auth);
    const location = useLocation();
    const currentURL = location.pathname;
    localStorage.setItem("url", currentURL)
    
    prevAuthRef.current = checkAuth() && !auth;
    const prevAuth = prevAuthRef.current
    return (
        prevAuth ? (
            <>{children}</>
        ) : (
            <Navigate
                to="/signin"
            />
        )
    )
};

export default ProtectedRoute;