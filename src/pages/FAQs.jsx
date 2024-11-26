import React from "react";

const FAQs = () => {
  const faqItems = [
    { icon: "Group 54.png",
      question: "How do I get a Referral Code?",
      answer: "You can obtain a referral code by signing up and navigating to your profile section.",
    },
    {icon: "Group 54-1.png",
      question: "Do I get rewarded in tokens or ETH when I refer buyers?",
      answer: "You receive your rewards in ETH instantly once someone you refer makes a transaction.",
    },
    {icon: "Group 54.png",
      question: "What is the process for redeeming my rewards?",
      answer: "You can redeem rewards via your dashboard under the Rewards section.",
    },
  ];

  // faq page

  return (
    <div className="bg-darkBlue text-white min-h-screen ">
      <div className="max-w-5xl mx-auto px-4">
        <div className="space-y-6 bg-faq ">
        <h1 className=" text-yellow text-3xl  font-bold  flex items-center justify-center"> <span className="mt-3">FAQs</span></h1>
        <hr />
          {faqItems.map((item, index) => (
            <div key={index} className="bg-darkGray p-6 rounded-md">
            <h2 className="text-xl font-semibold">{item.question}</h2>
            <div className="flex items-center justify-between mt-4">
              <p className="text-gray-400">{item.answer}</p>
              <img className="ml-4 w-10 h-10" src={item.icon} alt="" />
            </div>
            <hr className="opacity-20" />
          </div>
          
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
