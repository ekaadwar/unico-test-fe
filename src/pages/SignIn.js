import React, { Component } from "react";
import { connect } from "react-redux";

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
      <section className="flex justify-center items-center h-screen">
        <p>Signin</p>
      </section>
    );
  }
}

export default connect()(SignIn);
