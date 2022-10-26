import React, { Component } from "react";
import { connect } from "react-redux";
import { authSignOut } from "../redux/actions/auth";
import { logoApps } from "../assets";

class Home extends Component {
  render() {
    return (
      <section className="flex flex-col justify-center items-center h-screen">
        <img src={logoApps} alt="Logo Unico Apps" />
        <button onClick={this.props.authSignOut}>Sign Out</button>
      </section>
    );
  }
}

const mapDispatchToProps = {
  authSignOut,
};

export default connect(null, mapDispatchToProps)(Home);
