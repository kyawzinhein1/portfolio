import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <section>
      <div className=" flex flex-col mt-14 mb-10 sm:flex-row">
        <div className="flex-1 mb-10">
          <img
            src="/us_photo.jpg"
            className="w-52 h-52 mx-auto rounded-lg shadow-xl"
          />
        </div>
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-center sm:text-left">
            Hi! I'm Kyaw Zin Hein.
          </h1>
          <p className="text-center sm:text-left">
            I am Mern Stack Developer. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Dolores itaque sequi nobis dolorum illum maxime
            assumenda recusandae commodi voluptates nam. Possimus maxime itaque
            ipsam in reprehenderit doloribus nisi perspiciatis quo.
          </p>
          <div className="flex justify-center sm:justify-start">
            <Button />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
