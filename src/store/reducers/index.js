import { Types } from "../actions/items";

const defaultState = {
  items: [],
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case Types.FETCH_USERS: {
      const { items } = state;

      items.push(action.payload);

      return { ...state, items };
    }

    case Types.DELETE_USERS: {
      return state;
    }

    default:
      return state;
  }
};

export default reducer;
