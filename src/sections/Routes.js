import React from "react";
import { Switch, Route } from "react-router-dom";

import AuthRoute from "../components/AuthRoute";
import Home from "../pages/Home";
import PrivateRoute from "../components/PrivateRoute";
import SignIn from "../pages/SignIn";
import GeneralRoute from "../components/GeneralRoute";

const Routes = () => {
  return (
    <Switch>
      <Route
        path="/"
        exact
        render={(props) => <PrivateRoute element={<Home {...props} />} />}
      />
      {/* <Route path="/" exact component={Home} /> */}
      <Route
        path="/signin"
        render={(props) => <AuthRoute element={<SignIn {...props} />} />}
      />
    </Switch>
  );
};

export default Routes;
