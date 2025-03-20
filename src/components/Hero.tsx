import React from 'react';
import { Play, ArrowRight } from 'lucide-react';
import bannerImage from '../assets/images/banner.jpg';

interface HeroProps {
  handleWatchNow: () => void;
  handleInternshipApplication: () => void;
}

export const Hero: React.FC<HeroProps> = ({ handleWatchNow, handleInternshipApplication }) => {
  return (
    <div 
      className="relative h-screen flex items-center justify-center pt-16"
      style={{
        backgroundImage: `url(${bannerImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">Welcome to Drone TV</h1>
        <p className="text-xl md:text-2xl mb-8">The Future of Aerial Views</p>
        <p className="text-lg md:text-xl mb-12">Capturing the Best of Drone Expos, Live Events, and Industry Insights</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={handleWatchNow}
            className="bg-[#FFE135] hover:bg-[#FFD700] text-black px-8 py-3 rounded-full flex items-center justify-center gap-2"
          >
            <Play className="w-5 h-5" />
            Watch Now
          </button>
          <button 
            onClick={handleInternshipApplication}
            className="bg-[#FF3B3B] hover:bg-[#FF0000] text-white px-8 py-3 rounded-full flex items-center justify-center gap-2"
          >
            <ArrowRight className="w-5 h-5" />
            Apply for Internship
          </button>
        </div>
      </div>
    </div>
  );
};