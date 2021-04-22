import React ,{useEffect,useState}from "react";
import "./App.css"
import axios from 'axios';

function App() {
//post data to the database
  const[complaintId ,setcomplaintId]= useState('');
  const[complaintDescription, setComplaintDescription]=useState('');
  const[user_Id, setuser_Id]=useState('');
  const[complaintStatus, setcomplaintStatus]=useState('');

  const submitComplaint=()=>{
    axios.post('http://localhost:3001/api/insert',{
      complaintId:complaintId,
      complaintDescription:complaintDescription,
      user_Id:user_Id,
      complaintStatus:complaintStatus

    }).then(()=>{alert("complaint added successfully")})

  }


  //display complaints in front end

  const [complaintList,setcomplaintList]=useState([])
  useEffect(()=>{
    axios.get('http://localhost:3001/api/get').then((response)=>{
      // console.log(response.data)
      setcomplaintList(response.data)
    });
  },[]);
  //

  return (
    
      <div className="App"> <h4>
        CRUD
      </h4>
<div className="form">
<label>complaintId</label>
<input 
type="text" 
name="name" 
onChange={(e)=>{setcomplaintId(e.target.value);} }/>

<label>complaint Description</label>
<input type="text"
name="complaintDescription"
onChange={(e)=>{setComplaintDescription(e.target.value);} }/>


<label>User Id</label>
<input 
type="text" 
name="name" 
onChange={(e)=>{setuser_Id(e.target.value);} }/>

<label>complaintStatus</label>
<input 
type="text" 
name="name" 
onChange={(e)=>{setcomplaintStatus(e.target.value);} }/>

<button onClick={submitComplaint}> Submit</button>

  {complaintList.map((val)=>{
    return  <p> complaintId : {val.complaintId}
    complaintDescription : {val.complaintDescription}
    user_Id : {val.user_Id}
    complaintStatus : {val.complaintStatus}</p>
  })}
  </div>
      
    
      </div>

  );
}

export default App;
