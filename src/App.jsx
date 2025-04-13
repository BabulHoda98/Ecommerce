import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import Protectedroutes from "./components/Protectedroutes";
import Store from "./components/Store";
import Admin from "./components/Admin";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard"
          element={
            <Protectedroutes>
              <Dashboard />
            </Protectedroutes>
          }
        />
        <Route
          path="/Store"
          element={
            <Protectedroutes>
              <Store />
            </Protectedroutes>
          }
        />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  );
}

export default App;
