import { Category } from "../types";

export const mapCategoriesForSelect = (categories: Category[]) => {
  return categories.map((category) => ({
    value: category.color,
    label: category.name,
  }));
};
