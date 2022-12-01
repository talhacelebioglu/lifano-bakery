import React from "react";

const CategoryItem = ({ category }) => {
  // console.log(category);
  // console.log(category.sub_category);
  return (
    <div className="category-item">
      <div className="category-detail">
        {category.sub_category &&
          category.sub_category.map((item) => (
            <div key={item.id} className="mb-8">
              {item.items.length > 1 ? (
                <h3
                  className={
                    category.id === 4
                      ? "pt-6 mb-3 text-lg sm:text-xl font-semibold title-border"
                      : "mb-5 text-lg sm:text-xl font-semibold"
                  }
                >
                  {item.name.toLocaleUpperCase("tr-TR")}
                </h3>
              ) : (
                ""
              )}
              {item.items &&
                item.items.map((item, index) => (
                  <div
                    key={index}
                    className={
                      category.id === 4
                        ? "category-detail-item"
                        : "category-detail-item mb-16"
                    }
                  >
                    {item.img && (
                      <picture>
                        <source
                          type="image/webp"
                          media="(max-width: 768px)"
                          srcSet={`${item.img.small} 768w`}
                          sizes="768px"
                        />
                        <source
                          type="image/webp"
                          srcSet={`${item.img.normal}`}
                        />
                        <img
                          className="rounded-xl shadow-md shadow-amber-500"
                          src={item.img.small}
                          alt={item.name}
                        />
                      </picture>
                    )}
                    <div
                      className={
                        category.id === 4
                          ? "single-item flex justify-between pt-2"
                          : "single-item flex justify-between pt-7 title-border"
                      }
                    >
                      <h4 className="text-base sm:text-lg capitalize">
                        {item.name}
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
                    {item.desc && (
                      <p className="text-sm sm:text-base opacity-60 capitalize pt-2">
                        {item.desc}
                      </p>
                    )}
                  </div>
                ))}
            </div>
          ))}
      </div>
    </div>
  );
};

export default CategoryItem;
