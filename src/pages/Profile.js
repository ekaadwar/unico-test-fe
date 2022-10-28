import React from "react";
import Canvas from "../components/Canvas";
import Container from "../components/Container";
import { CircleXl } from "../components/Circle";

import { MdPermIdentity as Account } from "react-icons/md";
import { connect } from "react-redux";
import { getProfile } from "../redux/actions/profile";

class Profile extends React.Component {
  componentDidMount() {
    this.props.getProfile(this.props.auth.token);
  }
  render() {
    const profile = this.props.profile.data;
    return (
      <Canvas
        content={
          <Container
            content={
              <div className="flex flex-col items-center h-full space-y-6">
                <CircleXl content={<Account color="white" size={80} />} />
                <div className="text-center">
                  <p className="text-xl">{`${profile.firstName} ${profile.lastName}`}</p>
                  <p className="text-sm text-gray-500">{profile.email}</p>
                </div>
              </div>
            }
          />
        }
      />
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

const mapDispatchToProps = {
  getProfile,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
