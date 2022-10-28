import React from "react";
import { PrimaryButton } from "../components/Button";
import Canvas from "../components/Canvas";
import Container from "../components/Container";
import Header from "../components/Header";
import { InputAuth } from "../components/Input";
import { FailAlert } from "../components/Alert";
import { authSignUp } from "../redux/actions/auth";
import { connect } from "react-redux";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      repassword: "",
      alert: false,
      success: false,
      message: [],
    };
  }

  componentDidUpdate() {
    console.log(this.state.message);
  }

  closeAlert = () => {
    this.setState({ message: [] });
  };

  submit = () => {
    const data = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
      repassword: this.state.repassword,
    };

    console.log(data);

    if (
      data.firstName &&
      data.lastName &&
      data.email &&
      data.password &&
      data.repassword
    ) {
      if (data.password.length < 6) {
        const addMessage = ["Sorry,", "Password must be at least 6 digits."];
        this.setState({ alert: true, message: addMessage });
      } else {
        if (data.password !== data.repassword) {
          const addMessage = [
            "Sorry,",
            "the password you have entered is not the same.",
          ];
          this.setState({ alert: true, message: addMessage });
        } else {
          this.setState({ errAlert: "" });
          this.props.authSignUp(data);
          const addMessage = [
            "Congratulations !",
            "Registration is successful.",
          ];
          this.setState({ success: true, message: addMessage });
        }
      }
    } else {
      const addMessage = ["The field cannot be empty."];
      this.setState({ alert: true, message: addMessage });
    }
  };

  render() {
    return (
      <Canvas
        content={
          <Container
            content={
              <div>
                <Header title="Form Register" path="/signin" />
                <div className="space-y-5">
                  <InputAuth
                    label={"First Name"}
                    value={this.state.firstName}
                    onChange={(e) =>
                      this.setState({ firstName: e.currentTarget.value })
                    }
                  />
                  <InputAuth
                    label={"Last Name"}
                    value={this.state.lastName}
                    onChange={(e) =>
                      this.setState({ lastName: e.currentTarget.value })
                    }
                  />
                  <InputAuth
                    label={"Email"}
                    value={this.state.email}
                    onChange={(e) =>
                      this.setState({ email: e.currentTarget.value })
                    }
                  />
                  <InputAuth
                    label={"Password"}
                    type={"password"}
                    value={this.state.password}
                    onChange={(e) =>
                      this.setState({ password: e.currentTarget.value })
                    }
                  />
                  <InputAuth
                    label={"Confirm Password"}
                    type={"password"}
                    value={this.state.repassword}
                    onChange={(e) =>
                      this.setState({ repassword: e.currentTarget.value })
                    }
                  />
                  <PrimaryButton
                    onClick={this.submit}
                    content={<p className="text-center">Register</p>}
                  />
                </div>

                {this.state.alert && (
                  <FailAlert
                    msg={[this.state.message]}
                    type="danger"
                    setOpenAlert={() =>
                      this.setState({ alert: false, message: [] })
                    }
                    btnAction={() =>
                      this.setState({ alert: false, message: [] })
                    }
                  />
                )}

                {this.state.success && (
                  <FailAlert
                    msg={[this.state.message]}
                    type="success"
                    setOpenAlert={() =>
                      this.setState({ success: false, message: [] })
                    }
                    btnAction={() => this.props.history.push("/signin")}
                  />
                )}
              </div>
            }
          />
        }
      />
    );
  }
}

const mapDispatchToProps = {
  authSignUp,
};

export default connect(null, mapDispatchToProps)(SignUp);
