import React from "react";
import { getCategories } from "../../../services/Categories/categoriesService";
import { CategoryList } from "./CategoryList";
import { useState } from "react";
import { useEffect } from "react";

export const CategoryAdminContainer = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const Categories = getCategories();
    console.log("EFFECT CALL: ", Categories);

    Categories.then((res) => {
      console.log("promise resolved: ", res);
      setCategories(res.data._embedded.categoriesDtoes);
    }).catch((err) => {
      console.error("Error:", err);
    });
  }, []);

  return (
    <div>
      <CategoryList categories={categories} />
    </div>
  );
};
