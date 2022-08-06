const reducer = (state = "", action: { type: string; payload: string }) => {
  switch (action.type) {
    case "GETOREDERNO":
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
