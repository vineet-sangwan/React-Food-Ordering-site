import React from "react";

const Sandwich = ({ handleAdd }) => {
  const sandwich = [
    {
      id: "the-gothamist-prosciutto-burrata-sandwich-kit-4-pack",
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/129490/the-gothamist-prosciutto-burrata-sandwich-kit-4-pack.4238b1e274d50b6e09d0b488aebe64bd.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Alidoro",
      dsc: '"The Gothamist" Prosciutto + Burrata Sandwich Kit - 4 Pack',
      price: 99,
      rate: 4,
      country: "New York, NY",
    },
    {
      id: "15504-original-muffuletta-sandwich-2-pack",
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/68615/original-muffuletta-sandwich-2-pack.ee9a97c691374b6866ea5b7083dd46d5.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Central Grocery Muffulettas",
      dsc: "Original Muffuletta Sandwich - 2-Pack (Serves 6-8)",
      price: 109,
      rate: 5,
      country: "New Orleans, LA",
    },
    {
      id: "the-bomb-sandwich-for-4",
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/85102/the-bomb-sandwich-for-4.78f5f65f8b94d6b3c81f70761b8d0f87.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Sal, Kris & Charlie's Deli",
      dsc: "The Bomb Sandwich for 4",
      price: 89,
      rate: 5,
      country: "Astoria, NY",
    },
    {
      id: "15428-pittsburgh-party-pack",
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132404/primanti-bros-sandwich-pack-choose-your-meat.db41e477a72d6957e98f860204ce356c.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Primanti Bros.",
      dsc: "Primanti Bros Sandwich Pack - (Choose Your Meat)",
      price: 89,
      rate: 4,
      country: "Pittsburgh, PA",
    },
    {
      id: "pastrami-burnt-end-sandwich-kit",
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/101923/ugly-buns-burnt-end-sandwich-kit-4-pack.cadca40421c5a2b09d46673a8e2a8d37.jpeg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Ugly Drum",
      dsc: 'Ugly Buns "Burnt End" Sandwich Kit - 6 Pack',
      price: 109,
      rate: 5,
      country: "Los Angeles, CA",
    },
    {
      id: "favorite-sloppy-joe-sandwich",
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/67768/new-jersey-sloppy-joe-sandwich-feeds-3.b866e4c84e09ad65cb8c6b9f4949ec7d.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Town Hall Deli",
      dsc: "Favorite Sloppy Joe Sandwich",
      price: 79,
      rate: 5,
      country: "South Orange, NJ",
    },
    {
      id: "sandwich-best-sellers-4-pack",
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133197/italian-sandwich-kit-best-sellers-4-pack.746c4cdd37eb5855178bcb6492fd66f6.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Alidoro",
      dsc: "Italian Sandwich Kit Best Sellers - 4 Pack",
      price: 99,
      rate: 5,
      country: "New York, NY",
    },
    {
      id: "15504-original-muffuletta-sandwich-pack",
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133232/original-muffuletta-sandwich-3-pack.2b00693e49ef277bc2b69810709d8fe8.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Central Grocery Muffulettas",
      dsc: "Original Muffuletta Sandwich - 3 pack (Serves 10-12)",
      price: 149,
      rate: 5,
      country: "New Orleans, LA",
    },
    {
      id: "roast-pork-sandwich-kit-for-4",
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134603/roast-pork-sandwich-kit-for-4.28babe63f6db57759b8e03d7a19a78eb.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Tommy DiNic's",
      dsc: "Roast Pork Sandwich Kit for 4",
      price: 99,
      rate: 5,
      country: "Philadelphia, PA",
    },
    {
      id: "meet-the-reubens-sandwich-kit-for-4-6",
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131830/plain-cheesecake.de3d6cefd530477dc04769774752448e.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Junior's Cheesecake",
      dsc: "Meet the Reubens Sandwich Kit for 4-6",
      price: 89,
      rate: 5,
      country: "Brooklyn, NY",
    },
    {
      id: "italian-beef-sandwich-kit-8-pack",
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/82793/italian-beef-sandwich-kit-8-pack.b87a0062ceecd6bb8511bfad8f1af8cf.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Buona Italian Beef",
      dsc: "Italian Beef Sandwich Kit - 8 Pack",
      price: 99,
      rate: 5,
      country: "Chicago, IL",
    },
    {
      id: "campos-philly-cheesesteaks-and-hoagies-combo-4-pack",
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134573/campos-philly-cheesesteaks-and-hoagies-combo-4-pack.075e04e4a7054d3c042b1f380639ace9.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Campo's Philly Cheesesteaks",
      dsc: "Campo's Philly Cheesesteaks & Hoagies Combo - 4 Pack",
      price: 109,
      rate: 4,
      country: "Philadelphia, PA",
    },
  ];
  return (
    <>
      <div className="w-[90%] mx-auto py-10 mt-9 lg:mt-16">
        <h1 className="text-4xl bg-yellow-200 p-3 heading font-mono font-semibold text-center mb-8">
          SandWich Special
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {sandwich.map((item) => (
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
    </>
  );
};

export default Sandwich;
