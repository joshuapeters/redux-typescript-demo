import { User } from "../../../core/models/User";
import { UserActionTypes } from "../../actionTypes/userActionTypes";

type UserAddAction = {
  type: UserActionTypes.ADD,
  payload: User
}

type UserRemoveAction = {
  type: UserActionTypes.REMOVE,
  payload: User
}

export type UserAction = UserAddAction | UserRemoveAction;