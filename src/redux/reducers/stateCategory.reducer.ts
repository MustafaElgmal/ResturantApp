const reducer = (
  state = "popular",
  action: { type: string; payload: string }
) => {
  switch (action.type) {
    case "GETSTATECATEGORY":
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
