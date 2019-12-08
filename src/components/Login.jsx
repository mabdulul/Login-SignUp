import React, { Component } from "react";
import { SessionContext } from "../context/SessionContext";
import "../Stylesheets/Login.css";
import "..//Stylesheets/global.css";
import { Redirect } from "react-router-dom";

class Login extends Component {
  _isMounted = false;
  static contextType = SessionContext;

  state = {
    password: " ",
    email: " ",
    couldNotfindLogin: true,
    redirect: false
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const data = this.state;
    console.log(data);
    const response = await fetch("http://localhost:3080/users/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    const reply = await response;

    if (reply.status === 200) {
      const userData = await response.json();
      this.context.loggedIn(
        userData.isValid,
        userData.personid,
        userData.firstname,
        userData.lastname
      );
      localStorage.setItem("is_logged", userData.isValid);
      localStorage.setItem("personid", userData.personid);
      localStorage.setItem("firstname", userData.firstname);
      localStorage.setItem("lastname", userData.lastname);

      this.setState({
        couldNotfindLogin: true,
        redirect: true
      });
    }

    if (reply.status !== 200) {
      this.context.loggedIn(false);
      console.log(this.context);
    }
    this.setState({
      couldNotfindLogin: false
    });
  };
  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    let { couldNotfindLogin } = this.state;
    if (this.state.redirect === true) {
      return <Redirect to="/" />;
    }

    return (
      <>
        <section className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12 login-section">
              <div className="form login-box">
                <form className="form-login Login" onSubmit={this.handleSubmit}>
                  <label htmlFor="Email">
                    <p className="login-header">
                      Login to see your past, present, and future self.
                    </p>
                    <input
                      className="login-input"
                      id="Email"
                      type="text"
                      name="email"
                      onChange={this.handleChange}
                      placeholder="Email Address"
                      required
                    />
                    {!couldNotfindLogin ? (
                      <p className="FindYou">We could not find your account </p>
                    ) : (
                      " "
                    )}
                  </label>
                  <label htmlFor="Password">
                    <input
                      className="login-input"
                      id="Password"
                      type="password"
                      name="password"
                      onChange={this.handleChange}
                      placeholder="Password"
                      required
                    />
                  </label>
                  <button className="login-button" type="submit">
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Login;
