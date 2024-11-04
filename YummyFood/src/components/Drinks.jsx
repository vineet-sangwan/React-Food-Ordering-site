import React from "react";

const Drinks = ({ handleAdd }) => {
  const drink = [
    {
      id: "hong-kong-boba-tea-kit-for-6",
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/108725/hong-kong-boba-tea-kit-for-6.63841de36d8e5edfafa13023fc303285.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "New Territories",
      dsc: "Hong Kong Boba Tea Kit for 6",
      price: 59,
      rate: 4,
      country: "New York, NY",
    },
    {
      id: "guys-caliente-margaritas-for-12",
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/126836/guys-caliente-margaritas-for-12.ca8c6bc06b8f1039549385ffcebc749d.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Guy Fieri",
      dsc: "Guy's Caliente Margaritas for 12",
      price: 69,
      rate: 5,
      country: "Flavortown, USA",
    },
    {
      id: "woodford-reserve-mint-julep-syrup",
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134036/woodford-reserve-mint-julep-syrup.ef523ac7cbae5f4aba6b058207f490d2.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Woodford Reserve",
      dsc: "Woodford Reserve Mint Julep Syrup",
      price: 39,
      rate: 4,
      country: "Louisville, KY",
    },
    {
      id: "new-orleans-hurricane-mix",
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/84522/new-orleans-hurricane-mix.4613584fc65cb0787024dd24d2a8f4b3.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Franco's Hurricane Mix",
      dsc: "New Orleans Hurricane Mix",
      price: 39,
      rate: 5,
      country: "Natchitoches, LA",
    },
    {
      id: "evan-williams-gourmet-mint-julep-mix-2-pack",
      img: "https://goldbelly.imgix.net/uploads/product_image/image/42820/evan-williams-gourmet-mint-julep-mix-2-pack.a0bd561099dd14bfb33e3363c1c025d0.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Evan Williams",
      dsc: "Evan Williams Gourmet Mint Julep Mix - 2 Pack",
      price: 39,
      rate: 4,
      country: "Louisville, KY",
    },
    {
      id: "margarita-mix",
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132643/margarita-mix.bd48a000d589d3147b14790af3c33fcd.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Johnny Sanchez",
      dsc: "Margarita Mix",
      price: 59,
      rate: 5,
      country: "New Orleans, LA",
    },
    {
      id: "woodford-reserve-mint-julep-syrup-2-pack",
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133235/woodford-reserve-mint-julep-syrup-2-pack.0ac76063f151988113cbaabd0eaa829f.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Woodford Reserve",
      dsc: "Woodford Reserve Mint Julep Syrup - 2 Pack",
      price: 59,
      rate: 5,
      country: "Louisville, KY",
    },
    {
      id: "evan-williams-gourmet-mint-julep-mix",
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/92899/evan-williams-gourmet-mint-julep-mix.c90e8c3ed5ac0dc1c85139e6b7b8521c.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Evan Williams",
      dsc: "Evan Williams Gourmet Mint Julep Mix",
      price: 25,
      rate: 5,
      country: "Louisville, KY",
    },
    {
      id: "knock-you-naked-strawberry-margarita-mix",
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132264/knock-you-naked-strawberry-margarita-mix.c51ce9329ab84709e5b1d3d474cbb7e2.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Fat Mama's Tamales",
      dsc: '"Knock-You-Naked" Strawberry Margarita Mix',
      price: 39,
      rate: 4,
      country: "Natchez, MS",
    },
    {
      id: "cold-brew-concentrate-variety-6-pack",
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134399/cold-brew-concentrate-variety-6-pack.ee2c1ff6e21556a824d07fcd6dc96682.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Grady's Cold Brew",
      dsc: "Cold Brew Concentrate Variety - 6 Pack",
      price: 60,
      rate: 5,
      country: "New York, NY",
    },
    {
      id: "organic-shots-bundle-12-pack",
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134437/organic-shots-bundle-12-pack.73d62cee42bd9a0c561331b2806e3ac0.png?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Juice Press",
      dsc: "Organic Shots Bundle-12 Pack",
      price: 69,
      rate: 4,
      country: "New York, NY",
    },
    {
      id: "papaya-king-tropical-drink",
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132258/papaya-king-tropical-drink.206f7c5b09ed7affb414f9bc7fe32447.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Papaya King",
      dsc: "Papaya King - Tropical Drink",
      price: 69,
      rate: 4,
      country: "New York, NY",
    },
    {
      id: "dels-x-iggys-frozen-lemonade-mix",
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/136231/Iggys-Del-Lemonade-Mix-Product-1.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Iggy's",
      dsc: "Del's x Iggy's Frozen Lemonade Mix",
      price: 10,
      rate: 4,
      country: "Warwick, RI",
    },
    {
      id: "unicorn-parade-milkshake-kit-for-8",
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132626/unicorn-parade-milkshake-kit-for-2.9052d04c1cf25b29442048bd3e535f21.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "New Territories",
      dsc: "Unicorn Parade Milkshake Kit for 8",
      price: 109,
      rate: 5,
      country: "New York, NY",
    },
    {
      id: "15193-old-honey-barn-mint-julep-mixer-750ml",
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133924/old-honey-barn-mint-julep-750ml.169d91ce479cb7cd99ed97b2148ff6ff.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Old Honey Barn Mint Julep",
      dsc: "Old Honey Barn Mint Julep - 750ml Fifth",
      price: 34,
      rate: 5,
      country: "Louisville, KY",
    },
    {
      id: "15323-cocktail-pack",
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132819/cocktail-party-4-pack.97b92c6a6c87168fc547da5f7bed8c73.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Rick's Picks",
      dsc: "Cocktail Party 4 PACK",
      price: 49,
      rate: 4,
      country: "New York, NY",
    },
  ];
  return (
    <>
      <div className="w-[90%] mx-auto py-10 mt-9 lg:mt-16">
        <h1 className="text-4xl bg-yellow-200 p-3 heading font-mono font-semibold text-center mb-8">
          Drinks
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {drink.map((item) => (
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

export default Drinks;
