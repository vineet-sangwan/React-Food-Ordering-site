import React from "react";
import { Link } from "react-router-dom";
import pizza from "../assets/pizza.jpeg";
import drinks from "../assets/drinks.jpeg";
import choclate from "../assets/choclate.jpeg";
import desert from "../assets/desert.jpeg";
import sandwich from "../assets/sandwich.jpeg";

const Menu = () => {
  return (
    <div className="w-[80%] mx-auto py-10 mt-9">
      <h1 className="text-4xl bg-yellow-200 p-3 heading font-mono font-semibold text-center mb-8">
        Menu
      </h1>
      <div className="flex flex-wrap justify-between gap-6">
        <MenuItem
          img={pizza}
          name="Pizza"
          description="Delicious and cheesy pizzas."
          link="/pizza"
        />
        <MenuItem
          img={sandwich}
          name="Sandwich"
          description="Tasty and filling sandwiches."
          link="/sandwich"
        />
        <MenuItem
          img={choclate}
          name="Chocolates"
          description="Sweet and rich chocolates."
          link="/chocolates"
        />
        <MenuItem
          img={drinks}
          name="Drinks"
          description="Refreshing beverages."
          link="/drinks"
        />
        <MenuItem
          img={desert}
          name="Dessert"
          description="Delicious and sweet desserts."
          link="/dessert"
        />
      </div>
    </div>
  );
};

const MenuItem = ({ img, name, description, link }) => {
  return (
    <Link
      to={link}
      className="w-full sm:w-[48%] md:w-[30%] bg-white rounded-lg shadow-lg overflow-hidden flex-col flex items-center"
    >
      <img src={img} alt={name} className="w-full h-2/3 object-cover" />
      <div className="p-4 flex-grow">
        <h2 className="text-xl font-bold text-gray-800 mb-2">{name}</h2>
        <p className="text-sm text-gray-600 mb-2">{description}</p>
        <button className="bg-gradient-to-r from-yellow-400 to-red-500 text-white rounded-md py-2 px-4 mt-2 hover:from-yellow-500 hover:to-red-600 focus:ring-4 focus:ring-yellow-400 font-medium">
          View More
        </button>
      </div>
    </Link>
  );
};

export default Menu;
