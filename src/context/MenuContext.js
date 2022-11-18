import React from "react";
import { createContext, useState } from "react";
import { categories } from "../data";

const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [menuList, setMenuList] = useState(categories);

  return (
    <MenuContext.Provider value={{ menuList, setMenuList }}>
      {children}
    </MenuContext.Provider>
  );
};

export default MenuContext;
