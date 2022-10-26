import React, { Component } from "react";
import Container from "../components/Container";
import { connect } from "react-redux";
import { logoApps } from "../assets";
import { InputAuth } from "../components/Input";
import { SmallPrimaryButton } from "../components/Button";
import { Redirect } from "react-router-dom";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  login = () => {
    console.log("login");
    this.props.history.push("/");
  };

  render() {
    return (
      <section>
        <Container
          content={
            <div className="flex flex-col justify-center items-center h-screen space-y-10">
              <img src={logoApps} alt="Logo Unico Apps" />
              <div className="w-full space-y-5">
                <InputAuth label={"Email"} />
                <InputAuth label={"Password"} type={"password"} />
                <div className="flex justify-between items-center w-full">
                  <p className="text-blue-500 font-bold">Forgot Password</p>
                  <SmallPrimaryButton onClick={this.login} content={"Log In"} />
                </div>
              </div>

              <div className="text-center">
                <p className="text-gray-500">Don't have an account?</p>
                <p className="text-blue-500 font-bold">Register</p>
              </div>
            </div>
          }
        />
      </section>
    );
  }
}

export default connect()(SignIn);
