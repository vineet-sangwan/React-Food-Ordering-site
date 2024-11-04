import React from "react";

const Desert = ({ handleAdd }) => {
  const desert = [
    {
      id: "15259-german-chocolate-killer-brownie-tin-pack",
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132029/german-chocolate-killer-brownie-tin-pack.5ebc34160f28767a9d94c4da2e04c4b9.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Killer Brownie®",
      dsc: "German Chocolate Killer Brownie®",
      price: 39.99,
      rate: 4,
      country: "Dayton, OH",
    },
    {
      id: "world-famous-banana-pudding-party-sized",
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/84893/world-famous-banana-pudding-bowl-64-oz.85af650f8f51512f8f3181a11d6587d6.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Magnolia Bakery",
      dsc: "World Famous Banana Pudding Bowl (64 oz.)",
      price: 56,
      rate: 4,
      country: "New York, NY",
    },
    {
      id: "jacques-world-famous-chocolate-chip-cookies",
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/81172/jacques-world-famous-chocolate-chip-cookies-6-pack.2217a14c443602493bba88aa9335319a.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Jacques Torres Chocolate",
      dsc: "Jacques’ World Famous Chocolate Chip Cookies - 6 Pack",
      price: 39.95,
      rate: 4,
      country: "New York, NY",
    },
    {
      id: "luigis-original-cannoli-pie",
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132206/original-cannoli-pie.4cb5b9ba82f57b69b90765fd9f07aa1a.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "The Cannoli Pie Company",
      dsc: "Original Cannoli Pie",
      price: 69,
      rate: 4,
      country: "Bridgeport, CT",
    },
    {
      id: "sea-salted-caramel-swirl-cheesecake",
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134006/sea-salted-caramel-swirl-cheesecake.e2825335433fb7a272a5d77649a6849e.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Cotton Blues Cheesecake Company",
      dsc: "Sea-Salted Caramel Swirl Cheesecake",
      price: 65,
      rate: 4,
      country: "Hattiesburg, MS",
    },
    {
      id: "brooklyn-blackout-cookie-brownie-combo-pack-2-tins",
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/123456/brooklyn-blackout-cookie-brownie-combo-pack-2-tins.d8805325baf6b23b4f01d119dc4531a7.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Brooklyn Blackout Company",
      dsc: "Brooklyn Blackout Cookie + Brownie Combo Pack - 2 Tins",
      price: 89,
      rate: 5,
      country: "Brooklyn, NY",
    },
    {
      id: "smores-variety-pack",
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/78037/smores-variety-pack.86cf47d40c0c3508ce14d2659b3f99d4.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Gotta Have S'more",
      dsc: "S'mores - Variety Pack",
      price: 49,
      rate: 5,
      country: "Los Angeles, CA",
    },
    {
      id: "best-seller-cupcake-dozen",
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/94478/best-seller-cupcake-dozen.f93b21993f6a2da11c975d45b9b0d08f.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Crave Cupcakes",
      dsc: "Best Seller Cupcake Dozen",
      price: 89,
      rate: 4,
      country: "Houston, TX",
    },
    {
      id: "choose-your-own-ice-cream-donuts-6-pack",
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132716/choose-your-own-ice-cream-donuts-6-pack.24d0b44765a7c54237fcd7ea9d9d8093.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Elegant Desserts",
      dsc: "Choose Your Own Ice Cream Donuts - 6 Pack",
      price: 69,
      rate: 5,
      country: "Brooklyn, NY",
    },
    {
      id: "17481-jewish-dessert-3-pack",
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/72507/jewish-classics-dessert-pack.7d4b76630f2fe75dcb7bbcf2501b7390.png?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Ess-a-Bagel",
      dsc: "Jewish Classics Dessert Pack",
      price: 89.95,
      rate: 5,
      country: "New York, NY",
    },
    {
      id: "dessert-bar-care-package",
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131609/dessert-bar-care-package.324aa28fe98c9dc67b75aac43376902e.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Bread and Roses Bakery",
      dsc: "Dessert Bar Care Package",
      price: 65,
      rate: 4,
      country: "Wells, ME",
    },
    {
      id: "donut-cookies-12-pack",
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/97746/donut-cookies-12-pack.46f42c61c4a79fd2051a99b2f23e890e.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Stan's Donuts",
      dsc: "Donut Cookies - 12 Pack",
      price: 49,
      rate: 5,
      country: "Chicago, IL",
    },
    {
      id: "gulab-jamun-ice-cream-cakes-2-pack",
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/105133/gulab-jamun-ice-cream-cakes-2-pack.c45b4d0750ad22d741f84dc1f26d20e7.JPG?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Malai Ice Cream",
      dsc: "Gulab Jamun Ice Cream Cakes - 2 Pack",
      price: 79,
      rate: 4,
      country: "Brooklyn, NY",
    },
    {
      id: "jacques-world-famous-chocolate-chip-cookies-12-pack",
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/83825/jacques-world-famous-chocolate-chip-cookies-12-pack.3b373bdd67cd25084182c21499f675d1.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Jacques Torres Chocolate",
      dsc: "Jacques’ World Famous Chocolate Chip Cookies - 12 Pack",
      price: 69.95,
      rate: 5,
      country: "New York, NY",
    },
    {
      id: "assorted-rice-krispie-treats-12-pack",
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/95324/assorted-rice-krispie-treats-12-pack.801c4bad4750f54e7a27652df3a7b6ca.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Treat House",
      dsc: "Assorted Rice Krispie Treats - 12 Pack",
      price: 49,
      rate: 4,
      country: "New York, NY",
    },
    {
      id: "choose-your-own-ice-cream-6-pints",
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/95947/ice-cream-choose-your-own-6-pints.ae6a75a1b5d518d9cbf2982ebc504f4c.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Graeter's Ice Cream",
      dsc: "Ice Cream - Choose Your Own 6 Pints",
      price: 79.95,
      rate: 4,
      country: "Cincinnati, OH",
    },
    {
      id: "candy-cookie-cheesecake-sampler",
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/82267/candy-cookie-cheesecake-sampler.bb8e5e3fb399edaa00a529271565d16f.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Eli's Cheesecake Company",
      dsc: "Candy Cookie Cheesecake Sampler",
      price: 79,
      rate: 5,
      country: "Chicago, IL",
    },
    {
      id: "chocolate-marshmallows",
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/108670/chocolate-marshmallows.a5bb2a6f0b25f6058e82e486bc34020b.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Colts Chocolate",
      dsc: "Chocolate Marshmallows",
      price: 25,
      rate: 4,
      country: "Nashville, TN",
    },
    {
      id: "magnolia-banana-pudding-explore",
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/136779/Magnolia-NEW-BP-Pudding-Cup.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Magnolia Bakery",
      dsc: "World Famous Banana Pudding",
      price: 65,
      rate: 5,
      country: "New York, NY",
    },
    {
      id: "brooklyn-blackout-parfait",
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/82266/brooklyn-blackout-parfait.756b6c8cf3066aaca322fb12595bb3a4.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Brooklyn Cupcake",
      dsc: "Brooklyn Blackout Cupcake Jars",
      price: 79,
      rate: 4,
      country: "Brooklyn, NY",
    },
  ];
  return (
    <>
      <div className="w-[90%] mx-auto py-10 mt-9 lg:mt-16">
        <h1 className="text-4xl bg-yellow-200 p-3 heading font-mono font-semibold text-center mb-8">
          Desert Special
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {desert.map((item) => (
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

export default Desert;
