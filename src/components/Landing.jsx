import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";

const Landing = () => {
  return (
    <div className="landing-page flex flex-col items-center my-10 p-20">
      <h1 className="text-7xl sm:text-8xl">lifano</h1>
      <h2 className="text-2.5xl sm:text-4xl">- bakery -</h2>
      <br />
      <br />
      <br />
      <div className="landing-title flex flex-col items-center">
        <h2 className="pb-2 text-2.5xl sm:text-4xl">Hoşgeldiniz</h2>
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
