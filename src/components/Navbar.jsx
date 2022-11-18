import React, { useContext } from "react";
import MenuContext from "../context/MenuContext";

const Navbar = () => {
  const { menuList } = useContext(MenuContext);

  return (
    <div className="navbar w-full flex justify-center items-center rounded-md shadow-lg">
      <div className="navbar-container">
        <ul className="flex gap-2">
          {menuList.map((category) => (
            <li key={category.id} className="rounded-md p-1">
              <a className="text-base" href={`#${category.name}`}>
                {category.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
