import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const PrivateRoute = ({ element, auth, priv = true }) => {
  if (priv !== false) {
    if (auth.token !== null) {
      console.log("token detected");
      console.log(auth.token);
      return element;
    } else {
      return <Redirect to="/signin" />;
    }
  } else {
    return element;
  }
};

const mapStateToProps = (state) => ({ auth: state.auth });

export default connect(mapStateToProps)(PrivateRoute);
