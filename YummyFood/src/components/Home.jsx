import React from "react";
import Hero from "../components/Hero";
import FoodSlider from "../components/Slider";
import Delivery from "../components/Delivery";
import OurFood from "../components/OurFood";
const Home = ({ handleAdd }) => {
  return (
    <div className="mt-16 lg:mt-20 flex flex-col justify-evenly items-center gap-10">
      <Hero />
      <FoodSlider handleAdd={handleAdd} />
      <Delivery />
      <OurFood handleAdd={handleAdd} />
    </div>
  );
};

export default Home;
