import * as types from './types';
import _ from "lodash";

const initialState = {
  token: null,
  orgToken: null,
  id: '',
  username: '',
  email: '',
  name: '',
  avatar: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ACCESS_TOKEN: {
      if (action?.payload?.data && action?.payload?.status === 200) {
        let data = action.payload.data;
        return {
          ...state,
          token: data.access_token,
        };
      } else {
        return { ...state }
      }
    }

    case types.GET_USER_PROFILE: {
      if (action?.payload?.data && action?.payload?.status === 200) {
        let data = action.payload.data;
        return {
          ...state,
          orgToken: data.memberships?.[0]?.token,
        };
      } else {
        return { ...state }
      }
    }

    case types.LOGOUT: {
      return { ...initialState }
    }

    default: {
      return { ...state };
    }
  }
};

export default reducer;
