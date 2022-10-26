import React, { Component } from "react";
import { connect } from "react-redux";
import { logoApps } from "../assets";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  render() {
    return (
      <section className="flex flex-col justify-center items-center h-screen">
        <img src={logoApps} alt="Logo Unico Apps" />
      </section>
    );
  }
}

export default connect()(SignIn);
