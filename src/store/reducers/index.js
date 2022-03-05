import { Types } from "../actions/users";

const defaultState = {
  users: [],
  userDetails:null
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case Types.FETCH_USERS: {
      const { users } = state;

      users.push(action.payload);

      return { ...state, users };
    }
    case Types.DELETE_USERS:{
      const usersList = state.users.users;
      const index = usersList.findIndex(user=> user.id === action.payload);
      if (index !== -1){
        usersList.splice(index, 1);
      }
      return {
        users: usersList,
        userDetails: null,
      }
    }
    case Types.USER_DETAILS:{
      return {
        ...state,
        userDetails: action.userDetails
      };
    }
    case Types.USER_SET_PROPS: {
      return {
        ...state,
        users: action.payload
      };
    }
    default:
      return state;
  }
};

export default reducer;
