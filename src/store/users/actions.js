import { userDataService } from "../../services";

import { userActionTypes } from "./actionTypes";

export const getUsers = () => {
  return async (dispatch) => {
    const users = await userDataService.get();
    dispatch(getUsersStore(users));
  };
};

export const applyFilter = (filter) => ({
  type: userActionTypes.applyFilter,
  payload: filter,
});

const getUsersStore = (users) => ({
  type: userActionTypes.getAll,
  payload: users,
});

const deleteUserFromState = (id) => ({
  type: userActionTypes.delete,
  payload: id,
});

export const deleteUser = (id) => {
  return (dispatch) => {
    dispatch(deleteUserFromState(id));
  };
};
