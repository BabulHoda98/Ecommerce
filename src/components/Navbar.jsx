import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../context/CreateContext";

function Navbar() {
let auth = useAuth() 

function onlogout(){
  auth.setCondata(null)
}
  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-body-tertiary mynav">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
          <i className="fa-solid fa-cart-plus text-danger"></i>
          {/* import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'; */}
            Ecommerce
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mt-1 navitems">
              {
                auth.condata===null || auth.condata?.isLogedIn=== false ? '' :
                <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/dashboard">Dashbord</NavLink>
              </li>
              }
              {
                auth.condata===null || auth.condata.currentUserId===null ||auth.condata.currentUserId==='user'|| auth.condata?.isLogedIn=== false ? '' :
                <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/admin">Admin</NavLink>
              </li>
              }

              {
                auth.condata?.isLogedIn=== true ? '' :
                <li className="nav-item">
                <NavLink className="nav-link" to="/">Login</NavLink>
              </li>
              }

              {
                auth.condata?.isLogedIn === true ? '' :  
              <li className="nav-item">
                  <NavLink className="nav-link" to="/register">Register</NavLink>
              </li>
              }

              {
                auth.condata===null || auth.condata?.isLogedIn=== false ? '' :
                <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/store">Store</NavLink>
              </li>
              }

              {
                auth.condata === null || auth.condata?.isLogedIn===true ? '' :
                <div style={{ marginLeft: "50%" }}>
                <li className="nav-item dropdown">
                  <NavLink className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="fa-regular fa-user text-primary"></i>{" "}
                    {auth.condata?.currentUserName}
                  </NavLink>
                  <ul className="dropdown-menu">
                    <li className="w-50 m-auto">
                      <button className="btn btn-danger" onClick={onlogout}>Logout</button>
                    </li>
                  </ul>
                </li>
              </div>
              }
            </ul>
            {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
