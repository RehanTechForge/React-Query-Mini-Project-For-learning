import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-purple-600 py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-5xl font-extrabold text-white mb-4">
          Welcome to Our Product Store
        </h2>
        <p className="text-lg text-gray-200 mb-8">
          Discover a variety of products that meet all your needs.
        </p>
        <Link
          to="/products"
          className="inline-block bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-gray-100 transition duration-300"
        >
          Shop Now
        </Link>
      </div>
    </section>
  );
};

export default Hero;
