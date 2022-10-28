/* eslint-disable no-undef */
import http from "../../helpers/http";

const { REACT_APP_BACKEND_URL: URL } = process.env;

export const getProfile = (token) => async (dispatch) => {
  dispatch({ type: "SET_LOADING", payload: true });
  try {
    const { data } = await http(token).get(`${URL}/users/profile`);
    dispatch({
      type: "PROFILE_GET",
      payload: data.results,
    });
    dispatch({ type: "SET_LOADING", payload: false });
  } catch (err) {
    dispatch({
      type: "ERROR_GET_PROFILE",
      payload: err.response.data.message,
    });
    dispatch({ type: "SET_LOADING", payload: false });
  }
};
