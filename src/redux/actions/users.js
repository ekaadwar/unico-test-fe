/* eslint-disable no-undef */
import http from "../../helpers/http";

const { REACT_APP_BACKEND_URL: URL } = process.env;

export const getUsers =
  (token = null) =>
  async (dispatch) => {
    dispatch({ type: "SET_LOADING", payload: true });
    try {
      const { data } = await http(token).get(`${URL}/users`);
      console.log(data);
      dispatch({
        type: "USERS_GET",
        payload: data,
      });
      dispatch({ type: "SET_LOADING", payload: false });
    } catch (err) {
      dispatch({ type: "SET_LOADING", payload: false });
    }
  };
