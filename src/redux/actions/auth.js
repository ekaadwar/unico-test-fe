/* eslint-disable no-undef */
import http from "../../helpers/http";

const { REACT_APP_BACKEND_URL: URL } = process.env;

export const authSignin = (dataForm) => {
  return async (dispatch) => {
    dispatch({ type: "SET_LOADING", payload: true });
    const form = new URLSearchParams();

    form.append("email", dataForm.email);
    form.append("password", dataForm.password);

    try {
      const { data } = await http().post(`${URL}/auth/signin`, form.toString());
      dispatch({
        type: "AUTH_LOGIN",
        payload: {
          token: data.results.token,
          userId: data.results.userId,
          msg: data.message,
        },
      });
      dataForm.navigate.push("/");

      dispatch({ type: "SET_LOADING", payload: false });
      window.alert(data.message);
    } catch (error) {
      dispatch({ type: "SET_LOADING", payload: false });
      window.alert(
        error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  };
};

export const authSignOut = () => {
  return (dispatch) => {
    dispatch({ type: "AUTH_CLEAR" });
  };
};
