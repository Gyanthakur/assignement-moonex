// src/pages/Home.jsx
import React from "react";
import Hero from "../components/Hero";
import FeatureCard from "../components/FeatureCard";
import FAQs from "./FAQs";
import Table from "../components/Table";

const Home = () => {
	return (
		<div className="bg-darkBlue text-white">
			{/* Hero Section */}
			<Hero />

			<Table />

			<FeatureCard />
			<FAQs />
		</div>
	);
};

export default Home;
