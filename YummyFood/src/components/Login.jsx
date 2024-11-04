import React from "react";

const Login = () => {
  return (
    <div className="flex p-4 items-center justify-center min-h-screen bg-gradient-to-r mt-9 from-purple-400 via-pink-500 to-red-500">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Log In
        </h2>
        <form className="space-y-6">
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
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 sm:text-sm"
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
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 sm:text-sm"
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember-me"
                name="remember-me"
                className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>
            <div>
              <a
                href="#"
                className="text-sm font-medium text-teal-600 hover:text-teal-700"
              >
                Forgot password?
              </a>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-teal-600 text-white font-semibold rounded-md shadow-md hover:bg-teal-700 transition duration-300 ease-in-out"
            >
              Log In
            </button>
          </div>
        </form>
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <a
              href="/signup"
              className="text-teal-600 hover:text-teal-700 font-medium"
            >
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
