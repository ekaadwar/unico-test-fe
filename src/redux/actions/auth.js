export const authSignOut = () => {
  return (dispatch) => {
    dispatch({ type: "AUTH_CLEAR" });
  };
};
