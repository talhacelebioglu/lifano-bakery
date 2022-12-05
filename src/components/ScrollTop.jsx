import React from "react";
import { useState, useEffect } from "react";
import { FaAngleDoubleUp } from "react-icons/fa";

const ScrollTop = () => {
  const [scrollTop, setScrollTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 750) {
        setScrollTop(true);
      } else {
        setScrollTop(false);
      }
    });
  }, []);

  const toTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="scroll-top">
      {scrollTop && (
        <button
          className="shadow-md flex items-center justify-center"
          onClick={toTop}
        >
          <FaAngleDoubleUp />
        </button>
      )}
    </div>
  );
};

export default ScrollTop;
