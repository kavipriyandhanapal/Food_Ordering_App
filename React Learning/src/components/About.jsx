import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <UserClass
          name={"first"}
          location={"Bangalore"}
          position={"Kidnapper"}
        />
         <UserClass
          name={"second"}
          location={"Bangalore"}
          position={"Kidnapper"}
        />
      </>
    );
  }
}

export default About;
