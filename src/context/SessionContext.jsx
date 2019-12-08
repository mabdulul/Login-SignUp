import React, { Component, createContext } from "react";

export const SessionContext = createContext();

const initialState = {
  is_logged_in: false,
  personid: " ",
  firstname: " ",
  lastname: " "
};

class SessionContextProvider extends Component {
  state = initialState;

  // loggedIn = (loginvalue, personid, firstname, lastname) => {
  //   this.setState({
  //     is_logged_in: loginvalue,
  //     personid: personid,
  //     firstname: firstname,
  //     lastname: lastname
  //   });
  // };

  // loggedOut = () => {
  //   this.setState({
  //     is_logged_in: false,
  //     personid: " ",
  //     firstname: " ",
  //     lastname: " "
  //   });
  // };
  componentDidMount = () => {
    const login = localStorage.getItem("is_logged");
    const id = localStorage.getItem("personid");
    const firstname = localStorage.getItem("firtname");
    const lastname = localStorage.getItem("lastname");

    this.setLogin(login, id, firstname, lastname);
  };

  setLogin = (login, id, firstName, lastName) => {
    localStorage.setItem("validSession", login);
    localStorage.setItem("id", id);
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);

    this.setState({
      login,
      id,
      firstName,
      lastName
    });
  };

  logOut = () => {
    ["validSession", "id", "firstName", "lastName"].forEach(item => {
      localStorage.removeItem(item);
    });

    this.setState(initialState);
  };

  render() {
    return (
      <SessionContext.Provider
        value={{
          ...this.state,
          setLogin: this.setLogin,
          logOut: this.logOut
        }}
      >
        {this.props.children}
      </SessionContext.Provider>
    );
  }
}

export default SessionContextProvider;
