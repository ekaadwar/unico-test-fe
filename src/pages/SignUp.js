import React from "react";
import { PrimaryButton } from "../components/Button";
import Canvas from "../components/Canvas";
import Container from "../components/Container";
import Header from "../components/Header";
import { InputAuth } from "../components/Input";

class SignUp extends React.Component {
  render() {
    return (
      <Canvas
        content={
          <Container
            content={
              <div>
                <Header title="Form Register" path="/signin" />
                <div className="space-y-5">
                  <InputAuth label={"First Name"} />
                  <InputAuth label={"Last Name"} />
                  <InputAuth label={"Email"} />
                  <InputAuth label={"Password"} type={"password"} />
                  <InputAuth label={"Confirm Password"} type={"password"} />
                  <PrimaryButton
                    content={<p className="text-center">Register</p>}
                  />
                </div>
              </div>
            }
          />
        }
      />
    );
  }
}

export default SignUp;
