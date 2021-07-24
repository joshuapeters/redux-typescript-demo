import { Dispatch } from "react";
import { User } from "../../core/models/User";
import { UserAction } from "../actions/users/userActions";
import { UserActionTypes } from "../actionTypes/userActionTypes";

export const addUser = (user: User) => {
  return (dispatch: Dispatch<UserAction>) => {
    dispatch({
      type: UserActionTypes.ADD,
      payload: user
    })
  }
}

export const removeUser = (user: User) => {
  return (dispatch: Dispatch<UserAction>) => {
    dispatch({
      type: UserActionTypes.REMOVE,
      payload: user
    })
  }
}