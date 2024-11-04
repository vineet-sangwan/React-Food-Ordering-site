import React, { useEffect, useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import slider1 from "../assets/slider1.jpg";
import slider2 from "../assets/slider2.jpg";
import slider3 from "../assets/slider3.jpg";

const Hero = () => {
  const imgData = [{ img: slider1 }, { img: slider2 }, { img: slider3 }];
  const [slider, setSlider] = useState(0);

  const handleMinus = () => {
    setSlider(slider === 0 ? imgData.length - 1 : slider - 1);
  };

  const handlePlus = () => {
    setSlider(slider === imgData.length - 1 ? 0 : slider + 1);
  };

  useEffect(() => {
    const sliderClear = setInterval(() => {
      handlePlus();
    }, 3000);
    return () => clearInterval(sliderClear);
  }, [slider]);

  return (
    <div
      className="relative lg:my-10 lg:mx-10 my-3 mx-3 rounded-lg"
      style={{ boxShadow: "5px 15px 20px black", zIndex: 1 }}
    >
      <div>
        {imgData.map((item, i) => (
          <div key={i} className={`${slider === i ? "block" : "hidden"}`}>
            <img
              src={item.img}
              alt="slider img"
              className="rounded-lg w-full h-auto"
            />
          </div>
        ))}
      </div>
      <div className="slider-btn flex absolute top-1/2 transform -translate-y-10 w-full justify-between px-4 text-white z-20">
        <MdKeyboardArrowLeft
          size={50}
          onClick={handleMinus}
          className="cursor-pointer"
        />
        <MdKeyboardArrowRight
          size={50}
          onClick={handlePlus}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Hero;
