import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="leftSide">
        <div className="links">
          <Link to={"/home"}> Home </Link>{" "}
          <Link to={"/addcomplaints"}> Complaints </Link>
          <Link to={"/login"}> Login </Link>
          <Link to={"/signup"}> SignUp </Link>
        </div>
      </div>
      <div className="rightSide"> </div>
    </div>
  );
}

export default Navbar;
