
import React from "react";

const SpecsSection = () => {
  return (
    <section id="specs" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Specifications</h2>
          <p className="text-gray-600 text-lg">
            Beneath the magical abilities lies cutting-edge technology that defies conventional 
            understanding of musical instruments.
          </p>
        </div>
        
        <div className="specs-grid">
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
            <h3 className="text-xl font-semibold mb-4">Materials</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="w-3 h-3 rounded-full bg-primary mr-2"></span>
                <span>Body: Enchanted Rosewood</span>
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 rounded-full bg-primary mr-2"></span>
                <span>Neck: Celestial Maple</span>
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 rounded-full bg-primary mr-2"></span>
                <span>Fretboard: Starlight Ebony</span>
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 rounded-full bg-primary mr-2"></span>
                <span>Strings: Quantum Vibration Alloy</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
            <h3 className="text-xl font-semibold mb-4">Dimensions</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="w-3 h-3 rounded-full bg-primary mr-2"></span>
                <span>Length: 39 inches</span>
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 rounded-full bg-primary mr-2"></span>
                <span>Width: 14 inches</span>
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 rounded-full bg-primary mr-2"></span>
                <span>Weight: 7.5 lbs (3.4 kg)</span>
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 rounded-full bg-primary mr-2"></span>
                <span>Wavelength Reach: Unlimited</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
            <h3 className="text-xl font-semibold mb-4">Technology</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="w-3 h-3 rounded-full bg-primary mr-2"></span>
                <span>Neural-Link Pickups</span>
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 rounded-full bg-primary mr-2"></span>
                <span>Quantum Resonance Chamber</span>
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 rounded-full bg-primary mr-2"></span>
                <span>Emotion Amplification Coils</span>
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 rounded-full bg-primary mr-2"></span>
                <span>Temporal Distortion Bridge</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
            <h3 className="text-xl font-semibold mb-4">Power</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="w-3 h-3 rounded-full bg-primary mr-2"></span>
                <span>Source: Player's Emotional Energy</span>
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 rounded-full bg-primary mr-2"></span>
                <span>Capacity: Infinite (varies with player)</span>
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 rounded-full bg-primary mr-2"></span>
                <span>Activation: First Strum</span>
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 rounded-full bg-primary mr-2"></span>
                <span>Recharge Rate: Self-sustaining</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecsSection;
