
import React from "react";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import FeatureSection from "../components/FeatureSection";
import SpecsSection from "../components/SpecsSection";
import TestimonialSection from "../components/TestimonialSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <NavBar />
      <main>
        <HeroSection />
        <FeatureSection />
        <SpecsSection />
        <TestimonialSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
