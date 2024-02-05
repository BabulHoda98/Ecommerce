import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useAuth } from "../context/CreateContext";

function Register() {
  let [state, setState] = useState({
    email: "",
    password: "",
    fullname: "",
    dateOfBirth: "",
    gender: "",
    country: "",
    recievenewsletters: "",
  });
  //navigate to dashboard
  let navigate = useNavigate();

  //user context
  let auth = useAuth();
  console.log(auth);

  let [countries, setCountries] = useState([
    { id: 1, countryname: "Laos" },
    { id: 2, countryname: "India" },
    { id: 3, countryname: "Nepal" },
    { id: 4, countryname: "Scotland" },
    { id: 5, countryname: "Iceland" },
    { id: 6, countryname: "Mexico" },
    { id: 7, countryname: "Labanon" },
    { id: 8, countryname: "Russia" },
  ]);

  let handlechecked = (e) => {
    setState({ ...state, [e.target.name]: e.target.checked });
  };

  let handlechange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    document.title = "Ecommerce Register";
  }, []);

  // success alert toastify
  const notifysuccess = () =>
    toast.success("🦄 Registraton is Successfully DONE!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  // unsuccess alert toastify
  const notifyunsuccess = () =>
    toast.error("🦄 Registraton is Unsuccessfull", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  let onRegisterClick = async () => {
    let response = await fetch(`http://localhost:4000/users`, {
      method: "POST",
      body: JSON.stringify(state),
      headers: {
        "Content-type": "application/json"
      }
    });
    // console.log(response.json());
    if (response.ok) {
      // alert('Registerationis Successfull')
    let responseBody = await response.json()
      auth.setCondata({
        ...auth.condata,
        isLogedIn : true,
        currentUserName: responseBody?.fullname, 
        currentUserId : responseBody?.id,
        currentUserRole:responseBody?.role
      }
      );
      notifysuccess();
      setTimeout(() => {
        navigate("/store");
      }, 4000);
    } else {
      // alert('Registeration Unsuccessfull')
      notifyunsuccess();
    }
  };
  return (
    <div>
      <div className="row">
        <div className="col-lg-6 mx-auto">
          <h3>Register</h3>
          {/* email starts */}
          <div className="form group my-3">
            <span className="input-group-text" id="basic-addon1">
              Email
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
              name="email"
              value={state.email}
              onChange={handlechange}
            />
          </div>
          {/* email ends */}
          {/* password starts */}
          <div className="form group my-3">
            <span className="input-group-text" id="basic-addon1">
              Password
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Password"
              aria-label="Username"
              aria-describedby="basic-addon1"
              name="password"
              value={state.password}
              onChange={handlechange}
            />
          </div>
          {/* password end  */}
          {/* Fullname name  */}
          <div className="form group my-3">
            <span className="input-group-text" id="basic-addon1">
              UserName
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
              name="fullname"
              value={state.fullname}
              onChange={handlechange}
            />
          </div>
          {/* Fullname end  */}
          {/* dob starts */}
          <div className="form group my-3">
            <span className="input-group-text" id="basic-addon1">
              Date of Birth
            </span>
            <input
              type="date"
              className="form-control"
              placeholder="User D.O.B"
              aria-label="Username"
              aria-describedby="basic-addon1"
              name="dateOfBirth"
              value={state.dateOfBirth}
              onChange={handlechange}
            />
          </div>
          {/* dob ends */}
          {/* Gender starts */}
          <div className="input-group my-3">
            <label className="input-group-text">Gender</label>

            <div className="form-check mt-2 ms-3">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id="flexRadioDefault1"
                value="male"
                checked={state.gender === "male" ? true : false}
                onChange={handlechange}
              />
              <label className="form-check-label" for="flexRadioDefault1">
                Male
              </label>
            </div>

            <div className="form-check mt-2 ms-3">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id="flexRadioDefault1"
                value="female"
                checked={state.gender === "female" ? true : false}
                onChange={handlechange}
              />
              <label className="form-check-label" for="flexRadioDefault1">
                Female
              </label>
            </div>
          </div>
          {/* Gender ends */}
          {/* country starts */}
          <div className="my-3 d-flex justify-content-between">
            <span className="input-group-text py-1" id="basic-addon1">
              Country
            </span>
            <select
              name="country"
              className="form-select form-select-lg mb-1 w-75"
              aria-label="Large select example"
              value={state.country}
              onChange={handlechange}
            >
              <option selected>Open this select menu</option>
              {countries.map((country) => {
                return (
                  <>
                    <option key={country.id} value={country.countryname}>
                      {country.countryname}
                    </option>
                  </>
                );
              })}
            </select>
          </div>
          {/* country ends */}
          {/* recieve new letter start  */}
          <div className="form-check d-flex justify-content-center gap-4 fs-3">
            <input
              className="form-check-input"
              type="checkbox"
              name="recievenewsletters"
              value={state.recievenewsletters}
              onChange={handlechecked}
              checked={state.recievenewsletters === true ? true : false}
              id=""
            />
            <label className="form-check-label" form="">
              Recieve News Letter
            </label>
          </div>
          {/* recieve new letter start  */}
        </div>
      </div>
      {/* register button starts */}
      <button
        className="btn btn-success w-50 d-block mx-auto fs-2 mt-4"
        // onClick={onRegisterClick}
        onClick={() => {
          onRegisterClick();
          // notifysuccess();
        }}
      >
        Register
      </button>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      {/* register button ends */}
    </div>
  );
}
export default Register;
