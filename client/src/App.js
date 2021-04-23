import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  //post data to the database
  const [complaintId, setcomplaintId] = useState("");
  const [complaintDescription, setComplaintDescription] = useState("");
  const [user_Id, setuser_Id] = useState("");
  const [complaintStatus, setcomplaintStatus] = useState("");

  const [newComplaintDescription, setNewComplaintDescription] = useState("");

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
  const updateComplaint = (complaint) => {
    axios.put("http://localhost:3001/api/update", {
      complaintId: complaintId,
      complaintDescription: newComplaintDescription,
      user_Id: user_Id,
      complaintStatus: complaintStatus,
    });
    setNewComplaintDescription("");
  };

  return (
    <div className="App">
      {" "}
      <h4>CRUD</h4>
      <div className="form">
        <label>Complaint ID</label>
        <input
          type="text"
          name="name"
          onChange={(e) => {
            setcomplaintId(e.target.value);
          }}
        />

        <label>Complaint Description</label>
        <input
          type="text"
          name="complaintDescription"
          onChange={(e) => {
            setComplaintDescription(e.target.value);
          }}
        />

        <label>User ID</label>
        <input
          type="text"
          name="name"
          onChange={(e) => {
            setuser_Id(e.target.value);
          }}
        />

        <label>Complaint Status</label>
        <input
          type="text"
          name="name"
          onChange={(e) => {
            setcomplaintStatus(e.target.value);
          }}
        />

        <button onClick={submitComplaint}> Submit</button>
        <h5> All Complaints</h5>
        {complaintList.map((val) => {
          return (
            <div className="card">
              {" "}
              <br /> Id:{val.complaintId}
              <br />
              Description:
              {val.complaintDescription}
              <br />
              user_Id:{val.user_Id}
              Status:{val.complaintStatus}
              <br />
              <button
                onClick={() => {
                  deleteComplaint(val.complaintId);
                }}
              >
                {" "}
                Delete
              </button>
              <input
                type="text"
                id="updateInput"
                onChange={(e) => {
                  setNewComplaintDescription(e.target.value);
                }}
              ></input>
              <button
                onClick={() => {
                  {
                    updateComplaint(val.complaintDescription);
                  }
                }}
              >
                {" "}
                Update
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
