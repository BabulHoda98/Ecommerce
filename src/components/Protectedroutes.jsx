import React from "react";
import { useAuth } from "../context/CreateContext";
import { Navigate } from "react-router-dom";

function Protectedroutes({ children }) {
  let auth = useAuth();
  if (auth.condata===null || auth.condata.isLogedIn===false || auth.condata.currentUserRole==='user' ||auth.condata.currentUserRole===null) {
    return <Navigate to="/" />; 
  }
  return children;
}

export default Protectedroutes;
