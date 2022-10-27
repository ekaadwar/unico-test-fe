import React from "react";
import Canvas from "../components/Canvas";
import Container from "../components/Container";
import { CircleXl } from "../components/Circle";

import { MdPermIdentity as Account } from "react-icons/md";

class Profile extends React.Component {
  render() {
    return (
      <Canvas
        content={
          <Container
            content={
              <div className="flex flex-col items-center h-full space-y-6">
                <CircleXl content={<Account color="white" size={80} />} />
                <div className="text-center">
                  <p className="text-xl">Steve Jobs</p>
                  <p className="text-sm text-gray-500">steve@uapps.is</p>
                </div>
              </div>
            }
          />
        }
      />
    );
  }
}

export default Profile;
