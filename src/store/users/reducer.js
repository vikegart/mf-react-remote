import { userActionTypes } from "./actionTypes";

const initialState = {
  list: Object.create(null),
  ids: [],
  filter: "",
};

const reducerMapping = {
  [userActionTypes.getAll]: (state, users) => {
    const list = {};
    users.forEach((user) => (list[user.id] = user));
    //TODO: add reduce

    return {
      ...state,
      list,
      ids: users.map((user) => user.id),
    };
  },

  [userActionTypes.delete]: (state, id) => {
    const list = { ...state.list };
    delete list[id];
    return {
      ...state,
      list,
      ids: state.ids.filter((x) => x !== id),
    };
  },

  [userActionTypes.applyFilter]: (state, filter) => ({ ...state, filter }),
};

export const users = (state = initialState, action) =>
  reducerMapping[action.type]
    ? reducerMapping[action.type](state, action.payload)
    : state;
