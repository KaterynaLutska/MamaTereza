import React, { FC } from "react";

import CallToActionSection from "@/sections/HomeSections/CallToActionSection";
import FeaturedSection from "@/sections/HomeSections/FeaturedSection";
import HeroSection from "@/sections/HomeSections/HeroSection";
import StatisticsSection from "@/sections/HomeSections/StatisticsSection";
import TestimonialsSection from "@/sections/HomeSections/TestimonialsSection";

const HomePage: FC = () => {
  const containerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    height: "100vh",
    backgroundColor: "#f0f0f0",
    padding: "20px",
  };

  return (
    <div>
      <HeroSection />
      <div style={containerStyle}>
        <FeaturedSection />
        <StatisticsSection />
        <TestimonialsSection />
        <CallToActionSection />
      </div>
    </div>
  );
};

export default HomePage;
