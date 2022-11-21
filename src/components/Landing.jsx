import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";

const Landing = () => {
  return (
    <div className="landing-page my-10 py-10 sm:px-20 flex">
      <aside className="flex justify-center gap-3 w-1/4">
        <div className="line-1"></div>
        <div className="line-2"></div>
        <div className="line-2"></div>
      </aside>
      <div className="flex flex-col items-center justify-center gap-10 text-center w-3/4">
        <div className="brand-title">
          <h1 className="text-7xl sm:text-8xl">lifano</h1>
          <h2 className="text-2.5xl sm:text-4xl">bakery & dessert</h2>
        </div>
        <div className="landing-title flex flex-col items-center gap-20">
          <h3 className="text-2xl sm:text-3xl">Hayallerin Kadar Tatlı</h3>
          <h2 className="pb-2 text-2.5xl sm:text-4xl">Hoşgeldiniz</h2>
          <div className="social flex flex-col items-center">
            <a
              href="http://www.instagram.com/lifano.dessert/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineInstagram />
            </a>
            <h4 className="text-lg sm:text-xl">Bizi takip edebilirsiniz!</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
