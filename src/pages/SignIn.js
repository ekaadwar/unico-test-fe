import React, { Component } from "react";
import Container from "../components/Container";
import { connect } from "react-redux";
import { logoApps } from "../assets";
import { FailAlert } from "../components/Alert";
import { InputAuth } from "../components/Input";
import { PrimaryButton } from "../components/Button";
import { Link } from "react-router-dom";
import { authSignin } from "../redux/actions/auth";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      alert: false,
      message: "",
    };
  }

  signin = () => {
    const data = {
      email: this.state.email,
      password: this.state.password,
      navigate: this.props.history,
    };

    if (data.email && data.password) {
      this.setState({ errAlert: "" });
      this.props.authSignin(data);
    } else {
      this.setState({ alert: true, message: "The field cannot be empty." });
    }
  };

  render() {
    return (
      <section>
        <Container
          content={
            <div className="flex flex-col justify-center items-center h-screen space-y-10">
              <img src={logoApps} alt="Logo Unico Apps" />
              <div className="w-full space-y-5">
                <InputAuth
                  label={"Email"}
                  value={this.state.email}
                  onChange={(e) => this.setState({ email: e.target.value })}
                />
                <InputAuth
                  label={"Password"}
                  type={"password"}
                  value={this.state.password}
                  onChange={(e) => this.setState({ password: e.target.value })}
                />
                <div className="flex justify-between items-center w-full">
                  <p className="text-blue-500 font-bold">Forgot Password</p>
                  <div>
                    <PrimaryButton onClick={this.signin} content={"Log In"} />
                  </div>
                </div>
              </div>

              <div className="text-center">
                <p className="text-gray-500">Don't have an account?</p>
                <Link to="signup">
                  <p className="text-blue-500 font-bold">Register</p>
                </Link>
              </div>
            </div>
          }
        />
        {this.state.alert && (
          <FailAlert
            msg={[this.state.message]}
            type="danger"
            setOpenAlert={() => this.setState({ alert: false, message: "" })}
            btnAction={() => this.setState({ alert: false, message: "" })}
          />
        )}
      </section>
    );
  }
}

const mapDispatchToProps = {
  authSignin,
};

export default connect(null, mapDispatchToProps)(SignIn);
