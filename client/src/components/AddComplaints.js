import React, { useEffect, useState } from "react";

import "../App.css";
import axios from "axios";
// import Footer from "./Footer";

function AddComplaints() {
  //post data to the database
  const [complaintId, setcomplaintId] = useState("");
  const [complaintDescription, setComplaintDescription] = useState("");
  const [user_Id, setuser_Id] = useState("");
  const [complaintStatus, setcomplaintStatus] = useState("");

  //   const [newComplaintDescription, setNewComplaintDescription] = useState("");

  const submitComplaint = () => {
    axios.post("http://localhost:3001/api/insert", {
      complaintId: complaintId,
      complaintDescription: complaintDescription,
      user_Id: user_Id,
      complaintStatus: complaintStatus,
    });

    setcomplaintList([
      ...complaintList,
      {
        complaintId: complaintId,
        complaintDescription: complaintDescription,
        user_Id: user_Id,
        complaintStatus: complaintStatus,
      },
    ]);
  };

  //display complaints in front end

  const [complaintList, setcomplaintList] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/api/get").then((response) => {
      // console.log(response.data)
      setcomplaintList(response.data);
    });
  }, []);
  //delete complaint

  const deleteComplaint = (complaint) => {
    axios.delete(`http://localhost:3001/api/delete/${complaint}`);
  };

  //update complaint
  //   const updateComplaint = (complaint) => {
  //     axios.put("http://localhost:3001/api/update", {
  //       complaintId: complaintId,
  //       complaintDescription: newComplaintDescription,
  //       user_Id: user_Id,
  //       complaintStatus: complaintStatus,
  //     });
  //     setNewComplaintDescription("");
  //   };

  return (
    <div>
      <div
        className="container w-50 p-3 mt-5"
        style={{ backgroundColor: "#E3F2FD", borderRadius: "20px" }}
      >
        <br />
        <form className="form-group mr-5 ml-5">
          <h2>Complaint Form</h2>
          <br />
          <div className="form group">
            <label>Complaint ID</label>
            <input
              className="complaintInput"
              type="text"
              name="name"
              onChange={(e) => {
                setcomplaintId(e.target.value);
              }}
            />

            <label>Complaint Description</label>
            <input
              className="complaintInput"
              type="text"
              name="complaintDescription"
              onChange={(e) => {
                setComplaintDescription(e.target.value);
              }}
            />

            <label>User ID</label>
            <input
              className="complaintInput"
              type="text"
              name="name"
              onChange={(e) => {
                setuser_Id(e.target.value);
              }}
            />

            <label>Complaint Status</label>
            <input
              className="complaintInput"
              type="text"
              name="name"
              onChange={(e) => {
                setcomplaintStatus(e.target.value);
              }}
            />
            <br />
            <br />
            <button onClick={submitComplaint}> Submit</button>
          </div>
          <br />
          <div
            style={{
              marginTop: "50px",
              marginBottom: "50px",
              borderTop: "2px solid grey",
            }}
            className="allComplaints"
          >
            {" "}
            <br />
            <h5> All Complaints</h5>
            <div>
              {complaintList.map((val) => {
                return (
                  <div
                    style={{
                      borderBottom: "2px solid grey",
                    }}
                  >
                    {" "}
                    <br /> Id:{val.complaintId}
                    <br />
                    Description:
                    {val.complaintDescription}
                    <br />
                    user_Id:{val.user_Id}
                    Status:{val.complaintStatus}
                    <br />
                    <br />
                    <button
                      style={{ marginTop: "10px", marginBottom: "40px" }}
                      onClick={() => {
                        deleteComplaint(val.complaintId);
                      }}
                    >
                      {" "}
                      Delete
                    </button>
                    {/* <input
                    type="text"
                    id="updateInput"
                    // onChange={(e) => {
                    //   setNewComplaintDescription(e.target.value);
                    // }}
                  ></input> */}
                    {/* <button
                  // onClick={() => {
                  //   {
                  //     updateComplaint(val.complaintDescription);
                  //   }
                  // }}
                  >
                    {" "}
                    Update
                  </button> */}
                  </div>
                );
              })}
            </div>
            <br />
            <br />
          </div>{" "}
        </form>
      </div>
    </div>
  );
}

export default AddComplaints;
