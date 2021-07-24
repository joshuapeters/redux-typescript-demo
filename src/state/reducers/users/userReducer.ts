import { User } from "../../../core/models/User";
import { UserAction } from "../../actions/users/userActions";
import { UserActionTypes } from "../../actionTypes/userActionTypes";

const initialState: User[] = [{
  identifier: "abcdefg",
  firstName: "Josh",
  lastName: "Peters"
}];

const userReducer = (state: User[] = initialState, action: UserAction): User[] => {
  switch (action.type) {
    case UserActionTypes.ADD:
      return addUser(state, action.payload);
    case UserActionTypes.REMOVE:
      return removeUser(state, action.payload);
    default:
      return state;
  }
}

const addUser = (currentUsers: User[], newUser: User): User[] => {
  const userExists: boolean = currentUsers.findIndex(u => u.identifier === newUser.identifier) >= 0;
  
  if (userExists) {
    return currentUsers;
  }

  return currentUsers.concat(newUser);
}

const removeUser = (currentUsers: User[], removedUser: User): User[] => {
  const userExists: boolean = currentUsers.findIndex(u => u.identifier === removedUser.identifier) >= 0;
  
  if (!userExists) {
    return currentUsers;
  }

  return currentUsers.filter(u => u.identifier !== removedUser.identifier);
}

export default userReducer;