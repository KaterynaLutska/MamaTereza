import { FC } from "react";

import CallToActionSection from "@/sections/HomeSections/CallToActionSection";
import FeaturedSection from "@/sections/HomeSections/FeaturedSection";
import HeroSection from "@/sections/HomeSections/HeroSection";
import StatisticsSection from "@/sections/HomeSections/StatisticsSection";
import TestimonialsSection from "@/sections/HomeSections/TestimonialsSection";

const HomePage: FC = () => {
  return (
    <div>
      <HeroSection />
      <FeaturedSection />
      <StatisticsSection />
      <TestimonialsSection />
      <CallToActionSection />
    </div>
  );
};

export default HomePage;
