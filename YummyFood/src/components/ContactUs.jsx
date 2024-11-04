import React from "react";

const ContactUs = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-12 px-4 sm:px-6 mt-9 lg:px-8">
      <div className="bg-white shadow-md rounded-lg max-w-4xl w-full p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h1>
        <p className="text-lg text-gray-600 mb-8">
          We’d love to hear from you! Whether you have questions, feedback, or
          just want to say hello, feel free to reach out using the form below.
        </p>
        <form className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="john.doe@example.com"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows="4"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Your message here..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Send Message
          </button>
        </form>
      </div>
      <footer className="mt-12 text-center text-gray-600">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ContactUs;
