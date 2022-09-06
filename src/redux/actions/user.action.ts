export const login = (token: string,type:string) => {
  return {
    type: "LOGIN",
    payload: {
      token,
      type,
      isLoggedIn: true,
    },
  };
};

export const logout = () => {
  return {
    type: "LOGOUT",
    payload: {
      token: "",
      type:"",
      isLoggedIn: false,
    },
  };
};
