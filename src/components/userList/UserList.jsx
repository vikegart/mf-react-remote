import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { UserItem } from "../userItem";

import { getUsers, filteredUserIds } from "../../store/users";

import "./userList.css";

export const UserList = (props) => {
  const userIds = useSelector((state) => filteredUserIds(state));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <div className="list">
      {userIds.map((id) => {
        return <UserItem id={id} key={id} />;
      })}
    </div>
  );
};
