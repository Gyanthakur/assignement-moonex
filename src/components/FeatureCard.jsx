import React from "react";

const features = [
  {
    icon: "Group 19 (1).png", // Replace with your actual icon path
    title: "Cheapest TXs",
    description: "Exchange popular digital currencies at the cheapest possible transaction price.",
  },
  {
    icon: "Group 19.png", // Replace with your actual icon path
    title: "CerTIK",
    description:
      "We are Audited by Certik. Certik is the leading security-focused ranking platform.",
  },
  {
    icon: "Group 19 (2).png", // Replace with your actual icon path
    title: "No Contract Sells",
    description: "No contract sells to fund the marketing wallets.",
  },
  {
    icon: "Group 19 (3).png", // Replace with your actual icon path
    title: "CrossDex Support",
    description: "Exchange popular digital currencies at the cheapest possible transaction price.",
  },
];

const FeatureCard = () => {
  return (
    <div className="min-h-screen bg-darkGray text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-yellow-400">
          Our <span className="text-yellow">Features</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-featureBg border border-gray-700 p-6 rounded-lg shadow-lg flex flex-col  hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={feature.icon}
                alt={feature.title}
                className="h-16 w-16 mb-4"
              />
              <h2 className="text-xl font-semibold mb-2 mt-4">{feature.title}</h2>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
