import React, { Component } from "react";
// import logo from "./logo.svg";
// import "./App.css";
import Login from "./components/Login";
import signup from "./components/signup";
import LogOut from "./components/LogOut";

import "./Stylesheets/Nav.css";
import "./Stylesheets/global.css";

import { SessionContext } from "./context/SessionContext";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  static contextType = SessionContext;

  render() {
    const { is_logged_in } = this.context;
    console.log(is_logged_in);

    return (
      <div className="App">
        <Router>
          <nav>
            <ul>
              <li>
                <p className="nav-left">About Us</p>
              </li>
              {is_logged_in ? (
                <>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <LogOut />
                </>
              ) : (
                <>
                  <li>
                    <Link to="/signup">Sign Up</Link>
                  </li>
                  <li>
                    <Link to="/login">Members Login</Link>
                  </li>
                </>
              )}
            </ul>
            <div className="logo">
              <h1>monroe's salon</h1>
            </div>
            <ul className="nav-two">
              <li className="nav-right">
                <p className="">Book a Consolation</p>
              </li>
            </ul>
          </nav>
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={signup} />
        </Router>
      </div>
    );
  }
}

export default App;
