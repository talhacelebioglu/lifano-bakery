import React from "react";

const CategoryItem = ({ category }) => {
  // console.log(category);
  // console.log(category.sub_category);
  return (
    <div className="category-item py-5">
      <div className="category-detail">
        {category.sub_category &&
          category.sub_category.map((item) => (
            <div key={item.id} className="mb-20">
              <img
                className="w-full rounded-xl shadow-md shadow-amber-500"
                src={item.img}
                alt=""
              />
              {item.items.length > 1 ? (
                <h3 className="pt-8 text-lg sm:text-xl font-semibold">
                  {item.name.toLocaleUpperCase("tr-TR")}
                </h3>
              ) : (
                ""
              )}
              {item.items &&
                item.items.map((item, index) => (
                  <div key={index} className="category-detail-item my-5">
                    <div className="flex justify-between pt-5">
                      <h4 className="text-base sm:text-lg">
                        {item.name.toLocaleUpperCase("tr-TR")}
                      </h4>
                      {item.price && (
                        <h4 className="text-base sm:text-lg">
                          {item.price.toLocaleString("tr-TR", {
                            style: "currency",
                            currency: "TRY",
                          })}
                        </h4>
                      )}
                    </div>
                    <p className="text-sm sm:text-base text-gray-400 capitalize pt-2">
                      {item.desc}
                    </p>
                  </div>
                ))}
            </div>
          ))}
      </div>
    </div>
  );
};

export default CategoryItem;
