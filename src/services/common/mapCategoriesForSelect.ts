export const mapCategoriesForSelect = (categories: string[]) =>
  categories.map((category) => ({
    value: category,
    label: category,
  }));
