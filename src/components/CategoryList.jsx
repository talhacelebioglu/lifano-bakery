import React, { useContext } from "react";
import MenuContext from "../context/MenuContext";
import CategoryItem from "./CategoryItem";

const CategoryList = () => {
  const { menuList } = useContext(MenuContext);

  return (
    <div className="category-container">
      {menuList.map((category) => (
        <CategoryItem category={category} key={category.id} />
      ))}
    </div>
  );
};

export default CategoryList;
