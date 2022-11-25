import React from "react";

const CategoryItem = ({ category }) => {
  // console.log(category);
  // console.log(category.sub_category);
  return (
    <div className="category-item">
      <div className="category-detail">
        {category.sub_category &&
          category.sub_category.map((item) => (
            <div key={item.id}>
              {item.items.length > 1 ? (
                <h3 className="pt-8 mb-5 text-lg sm:text-xl font-semibold">
                  {item.name.toLocaleUpperCase("tr-TR")}
                </h3>
              ) : (
                ""
              )}
              {item.items &&
                item.items.map((item, index) => (
                  <div key={index} className="category-detail-item mb-16">
                    <picture>
                      <source srcSet={item.img} type="image/webp" />
                      <img
                        className="rounded-xl shadow-md shadow-amber-500"
                        src={item.img}
                        alt={item.name}
                        loading="lazy"
                      />
                    </picture>
                    <div className="flex justify-between pt-7">
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
                    <p className="text-sm sm:text-base opacity-60 capitalize pt-2">
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
