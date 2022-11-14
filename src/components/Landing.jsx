import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";

const Landing = () => {
  return (
    <div className="landing-page flex flex-col items-center p-20">
      <h1 className="text-7xl sm:text-8xl">lifano</h1>
      <h2 className="text-3xl sm:text-4xl">- bakery -</h2>
      <br />
      <br />
      <br />
      <div className="landing-title flex flex-col items-center">
        <h2 className="pb-3 text-3xl sm:text-4xl">Hoşgeldiniz</h2>
        <a
          href="http://www.instagram.com/lifano.dessert/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineInstagram />
        </a>
      </div>
    </div>
  );
};

export default Landing;
