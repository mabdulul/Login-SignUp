import React, { Component } from "react";
import { SessionContext } from "../context/SessionContext";
import "../Stylesheets/LogOut.css";
import "../Stylesheets/global.css";
// import { Redirect } from "react-router-dom";

class LogOut extends Component {
  state = {
    redirect: false
  };
  static contextType = SessionContext;
  logOut = async e => {
    e.preventDefault();
    const response = await fetch("http://localhost:3080/users//logout", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    });
    console.log(response);
    this.context.loggedOut();
    localStorage.clear();
    this.setState = {
      redirect: true
    };
  };
  render() {
    return (
      <li>
        <button className="logOut" onClick={this.logOut}>
          LogOut
        </button>
      </li>
    );
  }
}

export default LogOut;
