import React from "react";

const Chocaltes = ({ handleAdd }) => {
  const choco = [
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
      id: "chocolate-stack-12-bars",
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/82587/chocolate-stack-12-bars.1d613389b988a1b21bcf46105306a55a.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Kreuther Handcrafted Chocolate",
      dsc: "Chocolate Stack - 12 Bars",
      price: 99,
      rate: 5,
      country: "New York, NY",
    },
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
      id: "dark-chocolate-truffle-collection-16-pieces",
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131532/dark-chocolate-truffle-collection-16-pieces.4109f4f80d9d9ddf81d7b704424245f8.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Vosges Haut-Chocolat",
      dsc: "Dark Chocolate Truffle Collection - 16 Pieces",
      price: 49,
      rate: 5,
      country: "Chicago, IL",
    },
    {
      id: "raspberry-chocolate-pie",
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131947/raspberry-chocolate-pie.c40248c44adb974a159d7f100011c987.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Pietisserie",
      dsc: "Raspberry Chocolate Pie",
      price: 79,
      rate: 4,
      country: "Oakland, CA",
    },
    {
      id: "k-m-chocolate-sampler-gift-box",
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/97479/k-m-chocolate-sampler-gift-box.e29912ba4410a090b1659cbe8aa8e2fa.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Chocolate by Thomas Keller + Armando Manni",
      dsc: "K+M Chocolate Sampler Gift Box",
      price: 59,
      rate: 4,
      country: "Napa, CA",
    },
    {
      id: "chocolate-fudge-cake",
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/89476/chocolate-fudge-cake.1b255e0cd6b684b34d9e8f7c3f0fbb3a.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Carlo's Bakery",
      dsc: "Chocolate Fudge Cake",
      price: 69.95,
      rate: 4,
      country: "Hoboken, NJ",
    },
    {
      id: "chocolate-covered-cupcake-half-dozen",
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/98898/chocolate-covered-cupcake-half-dozen.90ecdfa8028d2e46ead8f3c210e1946e.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Brooklyn Cupcake",
      dsc: "Chocolate Covered Cupcake - 6 Pack",
      price: 65,
      rate: 4,
      country: "Brooklyn, NY",
    },
    {
      id: "double-chocolate-cake",
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131604/double-chocolate-cake.bff63e243145fe04ec8a384d1bc1926c.gif?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Magnolia Bakery",
      dsc: "Double Chocolate Cake",
      price: 65,
      rate: 5,
      country: "New York, NY",
    },
    {
      id: "chocolate-ganache-fudge-brownie",
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/108595/chocolate-ganache-fudge-brownie.fb14f000098178f7520f89e167756deb.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Colts Chocolate",
      dsc: "Chocolate Ganache Fudge Brownie",
      price: 45,
      rate: 4,
      country: "Nashville, TN",
    },
    {
      id: "award-winning-chocolate-4-layer-cake",
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/90005/award-winning-chocolate-4-layer-cake.b1667fe724c35e1461aad64bc1f982d3.jpeg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "We Take the Cake",
      dsc: "Award-Winning Chocolate 4-Layer Cake",
      price: 79,
      rate: 5,
      country: "Ft Lauderdale, FL",
    },
    {
      id: "whisky-dark-chocolate-cake",
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134355/whisky-dark-chocolate-cake.bef20867a13e7e802310b10b63eba282.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Lady M Confections",
      dsc: "Whisky Dark Chocolate Cake",
      price: 125,
      rate: 5,
      country: "New York, NY",
    },
  ];
  return (
    <>
      <div className="w-[90%] mx-auto py-10 mt-9 lg:mt-16">
        <h1 className="text-4xl bg-yellow-200 p-3 heading font-mono font-semibold text-center mb-8">
          Choclate Delite Special
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {choco.map((item) => (
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

export default Chocaltes;
