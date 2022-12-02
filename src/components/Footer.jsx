import React from "react";
import * as AiICons from "react-icons/ai";

const Footer = () => {
  const thisYear = new Date().getFullYear();

  return (
    <div className="footer mt-20 pt-14 flex flex-col items-center gap-2 text-lime-200">
      <p>~ Developed by Talha Çelebioğlu ~</p>
      <div className="my-social flex gap-3">
        <a
          href="http://www.instagram.com/talhacelebioglu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiICons.AiOutlineInstagram />
        </a>
        <a
          href="https://github.com/talhacelebioglu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiICons.AiOutlineGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/talhacelebioglu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiICons.AiFillLinkedin />
        </a>
      </div>
      <p className="copyright pt-10">
        Lifano Bakery &copy; {thisYear} - Tüm hakları saklıdır.
      </p>
    </div>
  );
};

export default Footer;
