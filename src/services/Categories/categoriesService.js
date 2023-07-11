import { categoriesInstance } from "./categoriesInstance";

export const getCategories = () => {
  let categories = categoriesInstance.get(
    "/categories/listar-categorias?page=0&size=10"
  );
  return categories;
};

export const getCatergoryById = (id) => {
  let category = categoriesInstance.get();
  return category;
};

export const deleteCategoryById = (id) => {
  return categoriesInstance.delete();
};

export const updateCategory = (id, data) => {
  return categoriesInstance.patch(`/${id}`, data);
};

export const createCategory = (data) => {
  return categoriesInstance.post("/categories", data);
};
