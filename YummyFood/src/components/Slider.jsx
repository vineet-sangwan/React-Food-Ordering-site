import React from "react";
import { FoodMenu } from "./FoodMenu";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FoodSlider = ({ handleAdd }) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5, // Default to 5 slides on large screens
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1280, // Adjust for larger screens
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 1024, // Medium screens
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 768, // Small screens
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 480, // Extra small screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <div className="w-[90%] mx-auto">
      <h1 className="text-5xl font-serif font-semibold mb-8 text-center">
        What's On Your Mind
      </h1>
      <div className="py-10">
        <Slider {...settings}>
          {FoodMenu.map((item) => (
            <div
              className="bg-white rounded-xl shadow-lg overflow-hidden relative flex flex-col"
              key={item.id}
            >
              <div className="relative w-full h-48">
                <img
                  src={item.img}
                  alt="Food Img"
                  className="w-full h-full object-cover rounded-t-xl"
                />
              </div>
              <div className="flex flex-col flex-grow justify-between p-4 bg-gray-50">
                <p className="text-sm  font-bold text-gray-800">{item.name}</p>
                <p className="text-lg font-semibold text-red-600">
                  Rs {item.price}
                </p>
                <p className="text-sm text-gray-500 uppercase tracking-wide">
                  {item.country}
                </p>
                <button
                  className="bg-gradient-to-r from-yellow-400 to-red-500 w-full text-white rounded-md py-2 mt-4 hover:from-yellow-500 hover:to-red-600 focus:ring-4 focus:ring-yellow-400 font-medium"
                  onClick={handleAdd}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default FoodSlider;
