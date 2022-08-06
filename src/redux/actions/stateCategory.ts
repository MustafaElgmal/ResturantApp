export const getStateCategory = (name: string) => {
  return {
    type: "GETSTATECATEGORY",
    payload: name,
  };
};
