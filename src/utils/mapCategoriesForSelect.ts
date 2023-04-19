import { Category } from "../types";

export const mapCategoriesForSelect = (categories: Category[]) => {
  return categories.map((category) => ({
    value: category.name,
    label: category.name,
  }));
};
