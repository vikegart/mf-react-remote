import { createSelector } from "reselect";

const usersMapSelector = (state) => state.users.list;
const usersIdsSelector = (state) => state.users.ids;
const filterSelector = (state) => state.users.filter;

export const userByIdSelector = (state, id) => {
  return usersMapSelector(state)[id];
};

export const filteredUserIds = createSelector(
  usersMapSelector,
  usersIdsSelector,
  filterSelector,
  (usersMap, usersIds, filter) =>
    filter
      ? usersIds.filter((x) =>
          usersMap[x].name.toLowerCase().includes(filter.toLowerCase())
        )
      : usersIds
);
