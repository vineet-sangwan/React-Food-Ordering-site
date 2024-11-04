import React from "react";
import { ourFood } from "./our-foods";
import "./FoodSlider.css";

const OurFood = ({ handleAdd }) => {
  return (
    <div className="w-[90%] mx-auto py-10">
      <h1 className="text-4xl bg-yellow-200 p-3 heading font-mono font-semibold text-center mb-8">
        Our Delicious Foods
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {ourFood.map((item) => (
          <div
            className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col"
            key={item.id}
          >
            <div className="relative w-full h-48">
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-full object-cover rounded-t-lg"
              />
            </div>
            <div className="flex flex-col flex-grow p-4 bg-gray-50">
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                {item.name}
              </h2>
              <p className="text-sm text-gray-600 mb-2">{item.dsc}</p>
              <p className="text-lg font-semibold text-red-600 mb-2">
                Rs {item.price}
              </p>
              <p className="text-sm text-gray-500 uppercase tracking-wide mb-4">
                {item.country}
              </p>
              <button
                className="bg-gradient-to-r from-yellow-400 to-red-500 w-full text-white rounded-md py-2 hover:from-yellow-500 hover:to-red-600 focus:ring-4 focus:ring-yellow-400 font-medium"
                onClick={handleAdd}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurFood;
