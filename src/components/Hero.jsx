import React from "react";

const Hero = () => {
  return (
    <section className="relative bg-darkBlue h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">

      <div className="absolute top-1 right-20 mr-10">
          <img src="circles.png" alt="star" className="h-screen lg:w-full lg:h-full ml-5" />
        </div>
       
        <div className="absolute top-5 left-10 bg-gradient-to-r from-yellow via-yellow-400 to-transparent h-96 w-96 rounded-full blur-3xl opacity-30"></div>

        <div className="absolute top-1 right-20 mr-10">
          <img src="star-img.png" alt="star" className="h-6 w-6" />
        </div>

        <div className="absolute top-1/5 right-10">
          <img src="bg-gradient-img-1.png" alt="star" className="h-90 w-60" />
        </div>

        <img src="bg-gradient-img-1.png" alt="sun" className="h-10 w-10" />
        <div className="absolute top-1/2 right-20 mr-10">
          <img src="star-img-1.png" alt="star" className="h-10 w-10" />
        </div>

        <div className="absolute  top-1/5 left-20">
          <img src="star-img-1.png" alt="star" className="h-8 w-8" />
        </div>
      </div>

      {/* Hero Content */}
      <div className="z-10 max-w-3xl text-left">
        <h1 className="text-4xl md:text-6xl font-bold">
          Trusted Multi-Chain <span className="text-yellow">DEX</span> Platform
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300">
          Trade, earn, and own crypto on the all-in-one multi-chain DEX
        </p>
        <div className="mt-6 flex  gap-4">
          <button className="bg-yellow text-darkBlue px-6 py-3 rounded-full font-semibold shadow-md hover:bg-yellow-500 transition">
            Connect Wallet
          </button>
          <button className="bg-transparent border-2 border-yellow text-yellow px-6 py-3 rounded-full font-semibold shadow-md hover:bg-yellow-500 hover:text-darkBlue transition">
            Trade Crypto
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
