import React, { useContext } from "react";
import MenuContext from "../context/MenuContext";
import CategoryItem from "./CategoryItem";

const CategoryList = () => {
  const { menuList } = useContext(MenuContext);

  return (
    <div className="category-list">
      {menuList.map((category) => (
        <div
          id={category.name}
          className="category-container pt-12"
          key={category.id}
        >
          <div className="category-header text-center my-8">
            <h2 className="font-semibold text-2xl sm:text-3xl uppercase">
              ~ {category.name} ~
            </h2>
          </div>
          <CategoryItem category={category} />
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
