import React, { Component } from "react";
import { SessionContext } from "../context/SessionContext";
import "../Stylesheets/SignUp.css";

class SignUp extends Component {
  static contextType = SessionContext;
  state = {
    firstname: " ",
    lastname: " ",
    email: " ",
    password: " "
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = async e => {
    e.preventDefault();
    const data = this.state;
    console.log(data);
    const response = await fetch("http://localhost:3080/users/signup", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
    console.log(response);
    const reply = await response;
    if (reply.status === 200) {
      alert("You have been signup");
    }
    if (reply.status !== 200) {
      alert("Try again");
    }
  };
  render() {
    console.log(this.context);
    return (
      <>
        <section className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12 signup-section">
              <div className="form signup-box">
                <form
                  className="form-login signup"
                  onSubmit={this.handleSubmit}
                >
                  <label htmlFor="firstname">
                    <input
                      className="signup-input"
                      id="firstname"
                      type="text"
                      name="firstname"
                      onChange={this.handleChange}
                      placeholder="First Name"
                      required
                    />
                  </label>
                  <label htmlFor="lastname">
                    <input
                      className="signup-input"
                      id="lastname"
                      type="text"
                      name="lastname"
                      onChange={this.handleChange}
                      placeholder="Last Name"
                      required
                    />
                  </label>
                  <label htmlFor="email">
                    <input
                      className="signup-input"
                      id="email"
                      type="text"
                      name="email"
                      onChange={this.handleChange}
                      placeholder="Email Address"
                      required
                    />
                  </label>
                  <label htmlFor="password">
                    <input
                      className="signup-input"
                      id="password"
                      type="password"
                      name="password"
                      onChange={this.handleChange}
                      placeholder="Password"
                      required
                    />
                  </label>
                  <button className="signup-button" type="submit">
                    Submit
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

export default SignUp;
