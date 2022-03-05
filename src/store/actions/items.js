// types of action
export const Types = {
  FETCH_USERS: "FETCH_USERS",
  DELETE_USERS: "DELETE_USERS",
};

// actions
export const fetchUsers = () => ({
  type: Types.FETCH_USERS,
});

export const deleteUser = (id) => ({
  type: Types.DELETE_USERS,
  payload: id,
});
