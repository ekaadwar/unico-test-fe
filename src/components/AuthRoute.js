import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Header from "./Header";

const AuthRoute = ({ element, signin = false, auth, priv = true }) => {
  console.log(signin);
  if (priv !== false) {
    if (auth.token !== null) {
      return <Redirect to="/" />;
    } else {
      return element;
    }
  } else {
    return <>{element}</>;
  }
};

const mapStateToProps = (state) => ({ auth: state.auth });

export default connect(mapStateToProps)(AuthRoute);
