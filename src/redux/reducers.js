// import {v4 as uuid} from 'uuid';

const initialState = {
  users: [],
  loggedIn: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER":
      const newUser = {
        // id: uuid(),
        name: action.payload.name,
        email: action.payload.email,
        tel: action.payload.tel,
      };
      return { 
        ...state, 
        users: [...state.users, newUser],
        loggedIn: true
      };
    case "LOGIN_USER":
      return {
        loggedIn: true,
      }
    case "DELETE_USER":
      const FilteredUsers = state.users.filter(
        (user) => user.id !== action.payload
      );
      return { ...state, users: FilteredUsers };
    case "EDIT_USER":
      const editedUsers = state.users.map((user) => {
        if (user.id === action.user_id) {
          return { ...user, ...action.updated_info };
        } else {
          return user;
        }
      });
      return { ...state, users: editedUsers };
    case "SET_ALL_USERS":
      return { users: action.payload };
    default:
      return state;
  }
};
export default reducer;
