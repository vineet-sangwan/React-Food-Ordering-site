import React from "react";

const Footer = () => {
  return (
    <>
      <div className="w-full bg-black text-white py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:justify-between gap-8">
            <div className="w-full md:w-1/4">
              <h2 className="text-2xl font-bold mb-4">Yummy Food</h2>
              <p className="text-sm">
                &copy; {new Date().getFullYear()} Yummy Food. All rights
                reserved.
              </p>
            </div>
            <div className="w-full md:w-1/4">
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <p className="text-sm mb-2">
                <a href="#" className="hover:underline">
                  About
                </a>
              </p>
              <p className="text-sm mb-2">
                <a href="#" className="hover:underline">
                  Careers
                </a>
              </p>
              <p className="text-sm mb-2">
                <a href="#" className="hover:underline">
                  Teams
                </a>
              </p>
              <p className="text-sm mb-2">
                <a href="#" className="hover:underline">
                  Swiggy One
                </a>
              </p>
            </div>
            <div className="w-full md:w-1/4">
              <h3 className="text-lg font-semibold mb-4">Help & Support</h3>
              <p className="text-sm mb-2">
                <a href="#" className="hover:underline">
                  Company
                </a>
              </p>
              <p className="text-sm mb-2">
                <a href="#" className="hover:underline">
                  Partner with Us
                </a>
              </p>
              <p className="text-sm mb-2">
                <a href="#" className="hover:underline">
                  Ride with Us
                </a>
              </p>
            </div>
            <div className="w-full md:w-1/4">
              <h3 className="text-lg font-semibold mb-4">We Deliver To:</h3>
              <p className="text-sm mb-2">Bangalore</p>
              <p className="text-sm mb-2">Gurgaon</p>
              <p className="text-sm mb-2">Delhi</p>
              <p className="text-sm mb-2">Mumbai</p>
              <p className="text-sm mb-2">Pune</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
