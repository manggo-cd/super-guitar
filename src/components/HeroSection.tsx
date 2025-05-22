
import React from "react";

const HeroSection = () => {
  return (
    <section className="hero-gradient text-white py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Unlock Your <span className="gradient-text">Magical</span> Musical Potential
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              The SuperGuitar isn't just an instrument. It's a gateway to abilities 
              beyond human comprehension. Play it and discover powers you never knew existed.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#preorder" className="button-glow">Pre-Order Now</a>
              <a href="#features" className="px-8 py-3 rounded-lg border border-white/30 hover:bg-white/10 transition-colors">
                Learn More
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="w-full h-full absolute top-0 left-0 bg-blue-500 rounded-full opacity-20 blur-3xl"></div>
            <img 
              src="/guitar.png" 
              alt="SuperGuitar" 
              className="relative z-10 w-full max-w-md mx-auto float-animation pulse-glow rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
