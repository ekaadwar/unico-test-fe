const initialState = {
  token: null,
  userId: "",
  msg: "",
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case "AUTH_LOGIN": {
      return {
        ...state,
        token: action.payload.token,
        userId: action.payload.userId,
        msg: action.payload.message,
      };
    }
    case "AUTH_FAILED": {
      return {
        ...state,
        msg: action.payload,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default auth;
