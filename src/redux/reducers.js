// import {v4 as uuid} from 'uuid';
import {buisness} from "../dummy-data"

const initialState = {
  users: {},
  loggedIn: false,
  error: {},
  newUser: false,
  buisness,
};

const reducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case "ADD_USER":
      const newUser = {
        // id: uuid(),
        name: payload.name,
        email: payload.email,
        tel: payload.tel,
      };
      return {
        ...state,
        users: [...state.users, newUser],
        loggedIn: true,
      };
    case "LOGGED_IN":
      return {
        ...state,
        loggedIn: true,
        ...payload,
      };
    case "DELETE_USER":
      const FilteredUsers = state.users.filter(
        (user) => user.id !== payload
      );
      return { ...state, users: FilteredUsers };
    case "EDIT_USER":
      const editedUsers = state.users.map((user) => {
        if (user.id === user_id) {
          return { ...user, ...updated_info };
        } else {
          return user;
        }
      });
      return { ...state, users: editedUsers };
    case "SET_ALL_USERS":
      return { users: payload };
    case "UPLOAD_BUSINESS":
      // const {buisness} = state;
      // buisness.push(payload)
      return {
        ...state,
        buisness: [...(state.buisness || []), payload]
      }
    default:
      return state;
  }
};
export default reducer;
