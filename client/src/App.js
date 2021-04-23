import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import AddComplaints from "./components/AddComplaints";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/home" exact component={Home} />
          <Route path="/addcomplaints" exact component={AddComplaints} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
        </Switch>
        <br />
        <br />
        <br />
        <br />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
