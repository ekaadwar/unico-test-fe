import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import ButtonMenu from "./ButtonMenu";
import Header from "./Header";

const PrivateRoute = ({
  home = false,
  auth,
  backPath = "/",
  title = "",
  element,
  priv = true,
}) => {
  if (priv !== false) {
    if (auth.token == null) {
      console.log("token detected");
      console.log(auth.token);
      if (home) {
        console.log("home");
      }
      return (
        <>
          {!home && <Header title={title} path={backPath} />}
          {element}
          <ButtonMenu />
        </>
      );
    } else {
      return <Redirect to="/signin" />;
    }
  } else {
    return element;
  }
};

const mapStateToProps = (state) => ({ auth: state.auth });

export default connect(mapStateToProps)(PrivateRoute);
