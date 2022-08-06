import { categoryType } from "../../types";

export const getAllCategories = (category: categoryType) => {
  return {
    type: "GETCATEGORY",
    payload: category,
  };
};
