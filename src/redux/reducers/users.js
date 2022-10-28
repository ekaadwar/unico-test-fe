const initialState = {
  data: [],
  pageInfo: {},
  detailData: {},
  msg: "",
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case "USERS_GET": {
      return {
        ...state,
        data: action.payload.results,
        pageInfo: action.payload.pageInfo,
      };
    }
    case "USERS_CLEAR": {
      return {
        data: [],
        pageInfo: {},
        detailData: {},
        msg: "",
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default users;
