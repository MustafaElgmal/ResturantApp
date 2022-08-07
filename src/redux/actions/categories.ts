import { categoryType } from "../../types";

export const getAllCategories = (categories: categoryType[]) => {
  return {
    type: "GETCATEGORY",
    payload: categories,
  };
};
