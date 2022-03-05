// types of action
export const Types = {
  FETCH_USERS: "FETCH_USERS",
  DELETE_USERS: "DELETE_USERS",
  USER_SET_PROPS :'USER_SET_PROPS'
};

// actions
export const fetchUsers = () => ({
  type: Types.FETCH_USERS,
});

export const deleteUser = (id) => ({
  type: Types.DELETE_USERS,
  payload: id,
});

export const setUserProps = (payload) =>{
  return {
    type: Types.USER_SET_PROPS,
    payload
  }
}
