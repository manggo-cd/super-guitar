
import React from "react";
import { Music } from "lucide-react";

const NavBar = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Music className="h-8 w-8 text-primary mr-2" />
            <span className="text-xl font-bold gradient-text">SuperGuitar</span>
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <a href="#features" className="text-gray-700 hover:text-primary transition-colors">Features</a>
              </li>
              <li>
                <a href="#specs" className="text-gray-700 hover:text-primary transition-colors">Specs</a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-700 hover:text-primary transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#preorder" className="button-glow">Pre-Order</a>
              </li>
            </ul>
          </nav>
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
