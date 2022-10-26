import React, { Component } from "react";
import { connect } from "react-redux";
import { authSignOut } from "../redux/actions/auth";

class Home extends Component {
  render() {
    return (
      <section className="flex flex-col justify-center items-center h-screen">
        <p>Home</p>
        <button onClick={this.props.authSignOut}>Sign Out</button>
      </section>
    );
  }
}

const mapDispatchToProps = {
  authSignOut,
};

export default connect(null, mapDispatchToProps)(Home);
