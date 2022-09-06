import { userActionType } from "../../types";

const user = localStorage.getItem("user");
const initialState =
  user !== null ? JSON.parse(user) : { token:"",type:"",isLoggedIn: false };

const reducer = (state = initialState, action: userActionType) => {
  switch (action.type) {
    case "LOGIN":
      return action.payload;
    case "LOGOUT":
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
