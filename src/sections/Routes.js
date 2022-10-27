import React from "react";
import { Switch, Route } from "react-router-dom";

import AuthRoute from "../components/AuthRoute";
import Home from "../pages/Home";
import PrivateRoute from "../components/PrivateRoute";
import SignIn from "../pages/SignIn";
import Profile from "../pages/Profile";
import List from "../pages/List";
import GeneralRoute from "../components/GeneralRoute";

const Routes = () => {
  return (
    <Switch>
      <Route
        path="/"
        exact
        render={(props) => <PrivateRoute home element={<Home {...props} />} />}
      />
      <Route
        path="/signin"
        render={(props) => <AuthRoute element={<SignIn {...props} />} />}
      />
      <Route
        path="/profile"
        render={(props) => (
          <PrivateRoute title="My Account" element={<Profile {...props} />} />
        )}
      />

      <Route
        path="/list"
        render={(props) => (
          <PrivateRoute title="User List" element={<List {...props} />} />
        )}
      />
    </Switch>
  );
};

export default Routes;
