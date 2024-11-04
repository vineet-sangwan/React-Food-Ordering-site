import React from "react";

const Cart = () => {
  // Example cart items
  const cartItems = [
    { id: 1, name: "Pizza Margherita", price: 129.95, quantity: 2 },
    { id: 2, name: "Spaghetti Carbonara", price: 454.9, quantity: 1 },
    { id: 3, name: "Caesar Salad", price: 149, quantity: 3 },
  ];

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6 mt-9 lg:mt-16">
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Cart</h2>
        <ul className="divide-y divide-gray-200">
          {cartItems.map((item) => (
            <li
              key={item.id}
              className="py-4 flex items-center justify-between"
            >
              <div className="flex items-center">
                <img
                  src={`https://via.placeholder.com/80?text=${item.name}`}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-md mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {item.name}
                  </h3>
                  <p className="text-gray-600">
                    Price: Rs {item.price.toFixed(2)}
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-gray-700 mr-4">Qty: {item.quantity}</span>
                <span className="text-gray-900 font-bold">
                  Rs {(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-6 flex justify-between items-center border-t border-gray-200 pt-4">
          <h3 className="text-xl font-bold text-gray-900">Total</h3>
          <span className="text-xl font-semibold text-gray-900">
            Rs {totalPrice.toFixed(2)}
          </span>
        </div>
        <div className="mt-6 flex justify-end">
          <button className="px-6 py-2 bg-teal-600 text-white font-semibold rounded-md shadow-md hover:bg-teal-700 transition duration-300 ease-in-out">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
