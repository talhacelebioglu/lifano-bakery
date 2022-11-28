import React, { useContext } from "react";
import MenuContext from "../context/MenuContext";
import { Link } from "react-scroll";

const Navbar = () => {
  const { menuList } = useContext(MenuContext);

  return (
    <div className="navbar w-full flex justify-center items-center rounded-md shadow-lg">
      <div className="navbar-container">
        <ul className="flex gap-1 sm:gap-2">
          {menuList.map((category) => (
            <li key={category.id} className="rounded-md p-1">
              <Link
                className="text-base font-semibold cursor-pointer"
                activeClass="active"
                to={`${category.name}`}
                spy={true}
                smooth={true}
              >
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
