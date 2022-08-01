import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { userByIdSelector, deleteUser } from "../../store/users";

export const UserItem = React.memo((props) => {
  const user = useSelector((state) => userByIdSelector(state, props.id));
  const dispatch = useDispatch();

  return (
    <>
      <div className="user">{user.name}</div>
      <button
        onClick={() => {
          dispatch(deleteUser(user.id));
        }}
      >
        delete From App
      </button>
    </>
  );
});
