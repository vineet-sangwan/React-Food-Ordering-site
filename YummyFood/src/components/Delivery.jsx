import React from "react";
import phone from "../assets/phone.png";
const Delivery = () => {
  return (
    <div className="w-full py-16 px-4">
      <h3 className="text-[#fbc531] font-bold text-3xl sm:text-4xl md:text-5xl text-center font-extralight">
        Quick Delivery App
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 w-full md:w-[80%] mx-auto my-10 gap-10">
        <img
          src={phone}
          alt="Delivery"
          className="w-full max-w-[550px] mx-auto"
        />
        <div className="flex flex-col justify-center">
          <p className="font-bold text-green-500 text-xl sm:text-2xl">
            Get The App
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl py-2 font-bold">
            The Fastest Food Delivery In India
          </h2>
          <p className="text-sm sm:text-base text-orange-300 leading-relaxed">
            Experience unparalleled speed and convenience with our food delivery
            service, designed to bring your favorite meals right to your
            doorstep in record time. With a vast network of top-rated
            restaurants and a cutting-edge logistics system, we ensure that your
            food arrives fresh, hot, and delicious, every single time. Our
            commitment to swift delivery and exceptional service means you'll
            never have to wait long to enjoy your next meal. Join us and
            discover why we're the fastest food delivery service in India,
            making dining out a thing of the past.
          </p>
          <button className="bg-black w-full max-w-[150px] text-white rounded-md my-6 py-3 text-lg hover:text-[#fbc531] font-semibold">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
