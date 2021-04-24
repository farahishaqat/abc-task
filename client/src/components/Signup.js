import React, { useState } from "react";
import { BsFillPersonFill } from "react-icons/bs";
// import { BsFillEnvelopeFill } from "react-icons/bs";
import { BsLockFill } from "react-icons/bs";
// import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

function Signup() {
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  //
  //to send from frontend to backend to see if the session exists
  axios.defaults.withCredentials = true;
  const postSignUp = () => {
    axios
      .post("http://localhost:3001/signup", {
        userName: usernameReg,
        userPassword: passwordReg,
      })
      .then((response) => {
        console.log("post Signup");
        console.log(response);
      });
  };

  return (
    <div>
      <div
        className="container w-50 p-3 mt-5"
        style={{ backgroundColor: "#E3F2FD", borderRadius: "20px" }}
      >
        <br />
        <form className="form-group mr-5 ml-5">
          <h2>Sign Up</h2>
          <br />

          <br></br>
          <div className="form-group">
            <BsFillPersonFill size={20} style={{ marginRight: "10px" }} />
            <input
              onChange={(e) => {
                setUsernameReg(e.target.value);
              }}
              placeholder="Username"
              type="username"
              name="email"
              required
            />
          </div>
          <div style={{ color: "#E65100" }}></div>
          <br></br>
          <div className="form-group">
            <BsLockFill size={20} style={{ marginRight: "10px" }} />
            <input
              onChange={(e) => {
                setPasswordReg(e.target.value);
              }}
              placeholder="password"
              type="password"
              name="password"
              required
            />
          </div>
          <div style={{ color: "#E65100" }}></div>
          <br></br>
          <div className="form-group text-center">
            <button onClick={postSignUp} type="submit" className="btn btn-info">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Signup;
