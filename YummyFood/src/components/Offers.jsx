import React from "react";
const offers = [
  {
    id: 1,
    title: "20% Off on First Order",
    description:
      "Get 20% off on your first purchase. Use code: FIRST20 at checkout.",
    imgSrc: "https://via.placeholder.com/400x300?text=20%25+Off",
  },
  {
    id: 2,
    title: "Buy 1 Get 1 Free on Select Items",
    description: "Buy one item and get another one free. Limited time offer!",
    imgSrc: "https://via.placeholder.com/400x300?text=BOGO+Offer",
  },
  {
    id: 3,
    title: "Flat ₹100 Off on Orders Above ₹500",
    description:
      "Enjoy a flat ₹100 off on orders over ₹500. Use code: FLAT100.",
    imgSrc: "https://via.placeholder.com/400x300?text=Flat+%E2%82%B9100+Off",
  },
  {
    id: 4,
    title: "Free Shipping on Orders Over ₹290",
    description: "Get free shipping on all orders over ₹2000. No code needed.",
    imgSrc: "https://via.placeholder.com/400x300?text=Free+Shipping",
  },
  {
    id: 5,
    title: "₹500 Cashback on Purchases Above ₹1500",
    description:
      "Get ₹500 cashback on your next purchase when you spend above ₹1500. Use code: CASHBACK500.",
    imgSrc: "https://via.placeholder.com/400x300?text=%E2%82%B9500+Cashback",
  },
  {
    id: 6,
    title: "Flat 15% Off on All Products",
    description: "Get a flat 15% discount on all products. Use code: FLAT15.",
    imgSrc: "https://via.placeholder.com/400x300?text=15%25+Off",
  },
  {
    id: 7,
    title: "Special Diwali Offer: Buy 2 Get 1 Free",
    description:
      "Celebrate Diwali with our special offer: Buy 2 items and get 1 free.",
    imgSrc: "https://via.placeholder.com/400x300?text=Diwali+Offer",
  },
  {
    id: 8,
    title: "₹200 Off on Your Next Order",
    description: "Get ₹200 off on your next order. Use code: NEXT200.",
    imgSrc: "https://via.placeholder.com/400x300?text=%E2%82%B9200+Off",
  },
  {
    id: 9,
    title: "Student Discount: 10% Off on All Orders",
    description: "Students get 10% off on all orders. Use code: STUDENT10.",
    imgSrc: "https://via.placeholder.com/400x300?text=Student+Discount",
  },
  {
    id: 10,
    title: "Seasonal Sale: Upto 50% Off",
    description:
      "Shop our seasonal sale with discounts up to 50% off on selected items.",
    imgSrc: "https://via.placeholder.com/400x300?text=Seasonal+Sale",
  },
  {
    id: 11,
    title: "Free Gift with Every Purchase Above ₹1000",
    description: "Receive a free gift with every purchase above ₹1000.",
    imgSrc: "https://via.placeholder.com/400x300?text=Free+Gift",
  },
  {
    id: 12,
    title: "Refer a Friend and Get ₹250 Off",
    description:
      "Refer a friend and get ₹250 off on your next purchase when they make their first order.",
    imgSrc: "https://via.placeholder.com/400x300?text=Refer+and+Earn",
  },
  {
    id: 13,
    title: "Exclusive Members Discount: 25% Off",
    description:
      "Exclusive 25% off for our members. Sign up now to get the offer.",
    imgSrc: "https://via.placeholder.com/400x300?text=Members+Discount",
  },
  {
    id: 14,
    title: "Flash Sale: 30% Off for the Next 24 Hours",
    description:
      "Don’t miss out! Get 30% off on all orders for the next 24 hours.",
    imgSrc: "https://via.placeholder.com/400x300?text=Flash+Sale",
  },
  {
    id: 15,
    title: "Weekend Special: Buy 3 Get 2 Free",
    description:
      "This weekend only: Buy 3 items and get 2 additional items free.",
    imgSrc: "https://via.placeholder.com/400x300?text=Weekend+Special",
  },
];

const OfferCard = ({ offer }) => (
  <div className="bg-white shadow-md rounded-lg overflow-hidden">
    <img
      className="w-full h-48 object-cover"
      src={offer.imgSrc}
      alt={offer.title}
    />
    <div className="p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-2">{offer.title}</h2>
      <p className="text-gray-600 mb-4">{offer.description}</p>
      <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
        Learn More
      </button>
    </div>
  </div>
);

const Offers = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 py-12 px-4 sm:px-6 mt-9 lg:px-8">
      <div className="max-w-6xl w-full">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Special Offers
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {offers.map((offer) => (
            <OfferCard key={offer.id} offer={offer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offers;
