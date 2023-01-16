import React from "react";
import {Navigate} from "react-router-dom";
import useIsAuthorized from "../hooks/useIsAuthorized";

function ProtectedRoute({roles, children}){
    const isAuthorised = useIsAuthorized(roles);
    return isAuthorised ? children : <Navigate to="/auth"/>;
}

export default ProtectedRoute;