import React from 'react';

const HeroSection = () => {
  return (
    <div className="bg-blue-900 text-white py-20 md:py-20 ">
      <div className="container mx-auto flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
          IT Solutions for Your Business
        </h1>
        <p className="text-lg lg:text-xl mb-6">
          We specialize in Android and Web Development Services
        </p>
        <div className="mb-40  flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
          <button className="bg-white text-blue-900 font-semibold py-2 px-6 rounded hover:bg-opacity-80 transition duration-300">
            Get Started
          </button>
          <button className="bg-transparent border border-white text-white font-semibold py-2 px-6 rounded hover:bg-white hover:text-blue-900 transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
