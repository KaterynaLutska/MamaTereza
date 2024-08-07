import React, { FC } from "react";

import CallToActionSection from "@/sections/HomeSections/CallToActionSection";
import FeaturedSection from "@/sections/HomeSections/FeaturedSection";
import HeroSection from "@/sections/HomeSections/HeroSection";
import StatisticsSection from "@/sections/HomeSections/StatisticsSection";
import TestimonialsSection from "@/sections/HomeSections/TestimonialsSection";
import theme from "@/theme/theme";
import { useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";

const HomePage: FC = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const containerStyle = {
    display: "flex",
    padding: "10px",
    justifyContent: "space-between",
    alignItems: "flex-start",
    backgroundColor: "#f0f0f0",
  };

  return (
    <div>
      <HeroSection />
      <Box flexDirection={isMobile ? "column" : "row"} style={containerStyle}>
        <FeaturedSection />
        <StatisticsSection />
        <TestimonialsSection />
        <CallToActionSection />
      </Box>
    </div>
  );
};

export default HomePage;
