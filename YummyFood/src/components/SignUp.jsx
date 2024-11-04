import React from "react";

const Signup = () => {
  return (
    <div className="flex min-h-screen flex-col lg:flex-row lg:mx-auto bg-gradient-to-r mt-9 from-purple-400 via-pink-500 to-red-500">
      {/* Left Side: Get Started Section */}
      <div
        className="lg:w-1/2 flex flex-col items-center justify-center p-8 text-white transform transition duration-500 ease-in-out hover:scale-105 hover:text-black"
        style={{ WebkitTextStroke: "1px white" }}
      >
        <h2 className="text-4xl text-center font-bold mb-4">
          Welcome to Our Restaurant
        </h2>
        <p className="text-lg text-center mb-8">
          Join us today and savor the finest culinary delights crafted to
          perfection.
        </p>
        <ul className="text-center space-y-4">
          <li>🍽️ Exclusive Member Discounts</li>
          <li>🍷 Complimentary Wine Tasting</li>
          <li>📅 Priority Reservations</li>
          <li>🎉 Invitations to Special Events</li>
        </ul>
      </div>

      {/* Right Side: Signup Form */}
      <div className="lg:w-1/2 w-full flex items-center justify-center p-6">
        <div className="max-w-md w-full bg-white bg-opacity-80 rounded-lg shadow-lg p-8 transform transition duration-500 ease-in-out hover:scale-105">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Sign Up
          </h2>
          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="confirm-password"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirm-password"
                name="confirm-password"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 sm:text-sm"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-purple-600 text-white font-semibold rounded-md shadow-md hover:bg-purple-700 transition duration-300 ease-in-out"
              >
                Sign Up
              </button>
            </div>
          </form>
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <a
                href="/login"
                className="text-purple-600 hover:text-purple-700 font-medium"
              >
                Log in
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
