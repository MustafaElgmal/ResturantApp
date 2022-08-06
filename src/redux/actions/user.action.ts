import { userType } from "../../types";

export const login = (user: userType) => {
  return {
    type: "LOGIN",
    payload: {
      user: user,
      isLoggedIn: true,
    },
  };
};

export const logout = () => {
  return {
    type: "LOGOUT",
    payload: {
      user: {},
      isLoggedIn: false,
    },
  };
};
