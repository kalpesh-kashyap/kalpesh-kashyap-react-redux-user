import { Types } from "../actions/users";

const defaultState = {
  users: [],
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case Types.FETCH_USERS: {
      const { users } = state;

      users.push(action.payload);

      return { ...state, users };
    }
    case Types.DELETE_USERS:
    case Types.USER_SET_PROPS: {
      return action.payload;
    }
    default:
      return state;
  }
};

export default reducer;
