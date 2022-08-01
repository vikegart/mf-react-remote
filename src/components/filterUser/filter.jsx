import React from "react";
import { useDispatch } from "react-redux";

import { Input } from "../input";

import { applyFilter } from "../../store/users";

export const FilterUser = (props) => {
  const dispatch = useDispatch();

  const onChangeSearchInput = (value) => dispatch(applyFilter(value));

  return <Input placeholder="Filter by name" onChange={onChangeSearchInput} />;
};
