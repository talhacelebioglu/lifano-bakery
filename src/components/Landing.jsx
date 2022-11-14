import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";

const Landing = () => {
  return (
    <div className="landing-page flex flex-col items-center p-20">
      <h1 className="text-5xl sm:text-6xl">lifano</h1>
      <h3 className="text-xl sm:text-2xl">- bakery -</h3>
      <br></br>
      <br></br>
      <div className="landing-title flex flex-col items-center">
        <h3 className="pb-3 text-xl sm:text-2xl">Hoşgeldiniz</h3>
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
