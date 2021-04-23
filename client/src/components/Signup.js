import React from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { GiAges } from "react-icons/gi";
import { BsLockFill } from "react-icons/bs";
import { CgGenderFemale } from "react-icons/cg";
import { CgGenderMale } from "react-icons/cg";

function Signup() {
  return (
    <di>
      <div
        className="container w-50 p-3 mt-5"
        style={{ backgroundColor: "#E3F2FD", borderRadius: "20px" }}
      >
        <br />
        <form className="form-group mr-5 ml-5">
          <h2>Sign Up</h2>
          <br />
          <div className="form-group ">
            <BsFillPersonFill size={20} />
            <input
              type="text"
              placeholder="Username"
              name="userName"
              required
            />

            <div style={{ color: "#E65100" }}></div>
            <br></br>
          </div>
          <div className="form-group">
            <GiAges size={20} />
            <input placeholder="age" type="text" name="age" required />
          </div>
          <div style={{ color: "#E65100" }}></div>
          <br></br>
          <div className="form-group">
            <CgGenderFemale size={20} style={{ marginRight: "0" }} />{" "}
            <CgGenderMale size={20} style={{ marginLeft: "0" }} />
            <input placeholder="gender" type="text" name="gender" required />
          </div>
          <div style={{ color: "#E65100" }}></div>
          <br></br>
          <div className="form-group">
            <BsFillEnvelopeFill size={20} />
            <input placeholder="Email" type="email" name="email" required />
          </div>
          <div style={{ color: "#E65100" }}></div>
          <br></br>
          <div className="form-group">
            <BsLockFill size={20} />
            <input
              placeholder="password"
              type="password"
              name="password"
              required
            />
          </div>
          <div style={{ color: "#E65100" }}></div>
          <br></br>
          {/* button div */}
          <div className="form-group text-center">
            <button type="submit" className="btn btn-info">
              {/* {registering && <span className="spinner-border spinner-border-sm mr-1"></span>} */}
              Sign Up
            </button>
            {/* <Link to="/login" className="btn btn-link">Cancel</Link> */}
          </div>
          {/* button div ends */}
        </form>
      </div>
    </di>
  );
}
export default Signup;
