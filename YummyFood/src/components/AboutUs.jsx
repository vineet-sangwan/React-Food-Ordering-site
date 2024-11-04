import React from "react";
import about1 from "../assets/about1.jpeg";
import about2 from "../assets/about2.jpeg";
import about3 from "../assets/about3.jpeg";
const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center p-6 mt-9">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-40"></div>
        <div className="p-6 md:p-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
            About Us
          </h2>

          {/* Our Mission */}
          <div className="flex flex-col md:flex-row items-center mb-8 space-y-6 md:space-y-0 md:space-x-6">
            <img
              src={about1}
              alt="Our Mission"
              className="w-full md:w-1/3 rounded-lg shadow-lg transform transition duration-500 hover:scale-105"
            />
            <div className="bg-gray-100 max-w-lg p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:bg-blue-500 hover:text-white">
              <h3 className="text-xl font-semibold text-center">Our Mission</h3>
              <p className="text-center mt-2">
                To innovate and inspire through cutting-edge design and
                development practices. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Quisquam voluptates ratione pariatur quas ea,
                laudantium architecto dicta perspiciatis quasi, nihil obcaecati
                a porro nostrum, quos rem optio doloremque repellendus. A!
              </p>
            </div>
          </div>

          {/* Our Vision */}
          <div className="flex flex-col md:flex-row items-center mb-8 space-y-6 md:space-y-0 md:space-x-6">
            <img
              src={about2}
              alt="Our Vision"
              className="w-full md:w-1/3 rounded-lg shadow-lg transform transition duration-500 hover:scale-105"
            />
            <div className="bg-gray-100 max-w-lg p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:bg-purple-500 hover:text-white">
              <h3 className="text-xl font-semibold text-center">Our Vision</h3>
              <p className="text-center mt-2">
                To be a global leader in digital experiences that captivate and
                engage users. Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Non cum culpa repellendus officiis, natus
                veniam sit, voluptate, pariatur iste cupiditate at similique in
                asperiores aspernatur dicta nihil? Magni, molestias sint!
              </p>
            </div>
          </div>

          {/* Our Values */}
          <div className="flex flex-col md:flex-row items-center mb-8 space-y-6 md:space-y-0 md:space-x-6">
            <img
              src={about3}
              alt="Our Values"
              className="w-full md:w-1/3 rounded-lg shadow-lg transform transition duration-500 hover:scale-105"
            />
            <div className="bg-gray-100 max-w-lg p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:bg-green-500 hover:text-white">
              <h3 className="text-xl font-semibold text-center">Our Values</h3>
              <p className="text-center mt-2">
                Integrity, Innovation, Excellence, and Customer Satisfaction.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
                dolorem itaque praesentium ad reprehenderit incidunt aliquam
                ipsam nam facere provident alias architecto recusandae odit
                cupiditate velit! Magni pariatur et quos!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
