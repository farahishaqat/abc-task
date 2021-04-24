import React, { useEffect, useState } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { BsLockFill } from "react-icons/bs";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [userPassword, setuserPassword] = useState("");

  const [loginStatus, setLoginStatus] = useState("");

  const postLogin = () => {
    axios
      .post("http://localhost:3001/login", {
        userName: userName,
        userPassword: userPassword,
      })
      .then((response) => {
        if (response.data.message) {
          setLoginStatus(response.data.message);
        } else {
          setLoginStatus(response.data[0].userName);
        }
        console.log(response.data);
      });
  };

  useEffect(() => {
    axios.get("http://localhost:3001/login").then((response) => {
      if (response.data.loggedIn === true) {
        setLoginStatus(response.data.user[0].userName);
      }
    });
  }, []);

  return (
    <div>
      <div
        className="container w-50 p-3 mt-5"
        style={{ backgroundColor: "#E3F2FD", borderRadius: "20px" }}
      >
        <form className="form-group mr-5 ml-5">
          <br />

          <h2>Log In</h2>
          <br />
          <div className="form-group">
            {/* <label>Username</label> */}

            <BsFillPersonFill size={20} />
            <input
              onChange={(e) => {
                setUserName(e.target.value);
              }}
              placeholder="Username"
              type="text"
              name="userName"
            />
          </div>
          <div style={{ color: "#E65100" }}></div>
          <br></br>
          <div className="form-group">
            <BsLockFill size={20} />
            <input
              onChange={(e) => {
                setuserPassword(e.target.value);
              }}
              placeholder="password"
              type="password"
              name="password"
            />
          </div>
          <div style={{ color: "#E65100" }}></div>
          <br></br>
          {/* <label>Your Role </label> */}
          {/* radio buttons */}
          {/* <div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
              />
              <label className="form-check-label" for="inlineRadio1">
                Admin
              </label>
            </div>

            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="Patient"
              />
              <label className="form-check-label" for="inlineRadio2">
                User
              </label>
            </div>
          </div> */}
          {/* radio buttons end */}

          <br></br>
          {/* buttons div */}
          <div className="form-group text-center">
            <br></br>

            <button onClick={postLogin} className="btn btn-info">
              {/* {loggingIn && <span className="spinner-border spinner-border-sm mr-1"></span>} */}
              Login
            </button>
            <Link to="/signup" className="btn btn-link">
              Sign Up
            </Link>
          </div>
          {/* buttons div end */}
        </form>
      </div>
      <h3>{loginStatus}</h3>
    </div>
  );
};

export default Login;
