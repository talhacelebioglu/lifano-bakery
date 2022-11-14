import React from "react";

const CategoryItem = ({ category }) => {
  return (
    <div className="category-item py-10">
      <div className="category-header text-center">
        <h2 className="font-semibold pb-5 text-2xl sm:text-4xl">
          ~ {category.name} ~
        </h2>
        <img
          className="w-full rounded-xl shadow-md shadow-amber-500"
          src={category.img}
          alt=""
        />
      </div>
      <div className="category-detail pt-5">
        {category.items.map((item) => (
          <div className="category-detail-item pb-5">
            <div className="flex justify-between pt-5">
              <h5 className="text-base sm:text-lg">{item.name}</h5>
              <h5 className="text-base sm:text-lg">₺{item.price.toFixed(2)}</h5>
            </div>
            <p className="text-xs sm:text-sm text-gray-400 pt-1">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryItem;
