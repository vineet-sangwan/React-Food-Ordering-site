import React from "react";

const PizzaMenu = ({ handleAdd }) => {
  const pizza = [
    {
      id: "23699-choose-your-own-thin-crust-pizza-4-pack",
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/89781/choose-your-own-thin-crust-pizza-4-pack.b928a2008eab50c65dc87e59b5952190.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Bartolini’s",
      dsc: "Choose Your Own Thin Crust Pizza - 4 Pack",
      price: 139,
      rate: 4,
      country: "Chicago, IL",
    },
    {
      id: "choose-your-own-new-haven-style-pizza-6-pack",
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131840/choose-your-own-new-haven-style-pizza-6-pack.ab82828afc6172cdd4017556c15e36dd.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Zuppardi's Apizza",
      dsc: "New Haven-Style Pizza - 6 Pack (Choose Your Own)",
      price: 79,
      rate: 4,
      country: "West Haven, CT",
    },
    {
      id: "wood-fired-pizzas-best-seller-4-pack",
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/106027/wood-fired-pizzas-best-seller-4-pack.1653bb05922ba153ac178f8365d27f6d.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Pizzeria Bianco",
      dsc: "Wood Fired Pizzas Best Seller - 4 Pack",
      price: 129,
      rate: 5,
      country: "Phoenix, AZ",
    },
    {
      id: "brooklyn-pizza-choose-your-own-5-pack",
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/104938/brooklyn-pizza-choose-your-own-5-pack.edc4f476a75207d0af840ce6f225f2b3.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Paesan’s Pizza",
      dsc: "Brooklyn Pizza - Choose Your Own 5 Pack",
      price: 69,
      rate: 4,
      country: "Albany, NY",
    },
    {
      id: "choose-your-own-chicago-deep-dish-pizza-4-pack",
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/89948/chicago-deep-dish-pizza-4-pack.49927daafa8c147fe9bb2a113e56668e.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "My Pi Pizza",
      dsc: "Chicago Deep Dish Pizza - 4 Pack",
      price: 129,
      rate: 5,
      country: "Chicago, IL",
    },
    {
      id: "tonys-custom-pizza-3-pack",
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131555/choose-your-own-pizza-3-pack.fcf7a43e38593007ef2857fe16d6dd26.png?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Tony's Pizza Napoletana",
      dsc: "Choose Your Own Pizza - 3 Pack",
      price: 99,
      rate: 5,
      country: "San Francisco, CA",
    },
    {
      id: "plain-thin-crust-pizza-4-pack",
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/115101/plain-thin-crust-pizza-4-pack.5540e9d166db2f0853643c6517e4a225.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "The Columbia Inn",
      dsc: "Plain Thin Crust Pizza - 4 Pack",
      price: 79,
      rate: 5,
      country: "Montville, NJ",
    },
    {
      id: "brooklyn-pizza-choose-your-own-10-pack",
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/104883/brooklyn-pizza-choose-your-own-10-pack.7ddeb3b5b599ec9c7b1befcc9c14a1c0.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Paesan’s Pizza",
      dsc: "Brooklyn Pizza - Choose Your Own 10 Pack",
      price: 99,
      rate: 4,
      country: "Albany, NY",
    },
    {
      id: "new-haven-style-mozzarella-pizza-6-pack",
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132144/new-haven-style-mozzarella-pizza-6-pack.8e8a38db57935f5cb6afa4202b966135.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Zuppardi's Apizza",
      dsc: "New Haven-Style Mozzarella Pizza - 6 Pack",
      price: 78,
      rate: 5,
      country: "West Haven, CT",
    },
    {
      id: "choose-your-own-3-pizzas",
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133289/choose-your-own-3-pizzas.a6de480878c0b3b9f4d240bacbb665e7.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Heggies Pizza",
      dsc: "Choose Your Own - 3 Pizzas",
      price: 79,
      rate: 4,
      country: "Milaca, MN",
    },
    {
      id: "15464-detroit-style-pizza-squares-choose-your-own-3-pack",
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/112202/detroit-style-pizza-squares-choose-your-own-3-pack.75f7714d9a81fb455f7400086e4195bf.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Buddy's Pizza",
      dsc: "Detroit-Style Pizza Squares - Choose Your Own 3 Pack",
      price: 99,
      rate: 4,
      country: "Detroit, MI",
    },
    {
      id: "15952-create-your-own-pizza-3-pack",
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133262/choose-your-own-pizza-3-pack.7ee3cc9bbc48b97a0f66e073d4071982.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Detroit Style Pizza Co",
      dsc: "Detroit Pizza - Choose Your Own Pizza 3 Pack",
      price: 85,
      rate: 4,
      country: "Detroit, MI",
    },
    {
      id: "pan-style-deep-dish-pizza-choose-your-own-4-pack",
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/137057/Pequods-CYO-4-Pack-Product.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Pequod's Pizza",
      dsc: "Pan-Style Deep Dish Pizza - Choose Your Own 4 Pack",
      price: 119,
      rate: 4,
      country: "Chicago, IL",
    },
    {
      id: "buffalo-style-pepperoni-pizza-2-pack",
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133315/buffalo-style-pepperoni-pizza-2-pack.38d99af16bc34554992bbed53870e533.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Picasso's Pizza",
      dsc: "Buffalo Style Pepperoni Pizza - 2 Pack",
      price: 89,
      rate: 5,
      country: "Buffalo, NY",
    },
    {
      id: "neapolitan-pizza-choose-your-own-3-Pack",
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/119426/neapolitan-pizza-choose-your-own-3-pack.dada483ad51fe8e1f8b06c68a8f1356f.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Motorino Pizzeria",
      dsc: "Neapolitan Pizza - Choose Your Own 3 Pack",
      price: 99,
      rate: 4,
      country: "New York, NY",
    },
    {
      id: "16940-brick-oven-pizza-6-pack",
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/71222/wood-fired-pizza-6-pack.1124121a87723161fcd034de9256cd22.png?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Roberta's Pizza",
      dsc: "Wood Fired Pizza 6 Pack",
      price: 119,
      rate: 5,
      country: "Brooklyn, NY",
    },
    {
      id: "thin-crust-pizza-choose-your-own-4-pack",
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/118791/thin-crust-pizza-choose-your-own-4-pack.c9d8f813e752cb2a77b93e02752c5daf.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Bill's Pizza & Pub",
      dsc: "Thin Crust Pizza - Choose Your Own 4 Pack",
      price: 119,
      rate: 4,
      country: "Chicago, IL",
    },
    {
      id: "ny-style-pizza-choose-your-own-3-pack",
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132421/ny-style-pizza-choose-your-own-3-pack.6364a762aa92bd037cc1519037680fef.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Rubirosa Pizza",
      dsc: "NY Style Pizza - Choose Your Own 3 Pack",
      price: 99,
      rate: 4,
      country: "New York, NY",
    },
    {
      id: "choose-your-own-chicago-deep-dish-pizza-2-pack",
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/89920/chicago-deep-dish-pizza-2-pack.258bfa1979e758e45ffc2c93043540e5.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "My Pi Pizza",
      dsc: "Chicago Deep Dish Pizza - 2 Pack",
      price: 99,
      rate: 4,
      country: "Chicago, IL",
    },
    {
      id: "pizza-choose-your-own4-pack",
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131566/pizza-choose-your-own-4-pack.92a5ef9f5f219eb870cf7e909656545d.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Regina Pizzeria",
      dsc: "Pizza - Choose Your Own 4 Pack",
      price: 99,
      rate: 4,
      country: "Boston, MA",
    },
  ];

  return (
    <div className="w-[90%] mx-auto py-10 mt-9 lg:mt-16">
      <h1 className="text-4xl bg-yellow-200 p-3 heading font-mono font-semibold text-center mb-8">
        Pizza Special
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {pizza.map((item) => (
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
export default PizzaMenu;
