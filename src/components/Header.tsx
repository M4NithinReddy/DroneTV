import React from "react";

interface HeaderProps {
  scrollToSection: (ref: React.RefObject<HTMLDivElement>) => void;
  refs: {
    aboutRef: React.RefObject<HTMLDivElement>;
    internshipsRef: React.RefObject<HTMLDivElement>;
    galleryRef: React.RefObject<HTMLDivElement>;
    contactRef: React.RefObject<HTMLDivElement>;
  };
}

export const Header: React.FC<HeaderProps> = ({ scrollToSection, refs }) => {
  return (
    <header className="fixed w-full top-0 z-50 bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="/src/images/logo.png"
            alt="Drone TV Logo"
            className="h-12"
          />
        </div>
        <nav className="hidden md:flex space-x-8">
          <button
            onClick={() => scrollToSection(refs.aboutRef)}
            className="text-white hover:text-[#FFE135]"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection(refs.internshipsRef)}
            className="text-white hover:text-[#FFE135]"
          >
            Internships
          </button>
          <button
            onClick={() => scrollToSection(refs.galleryRef)}
            className="text-white hover:text-[#FFE135]"
          >
            Gallery
          </button>
          <button
            onClick={() => scrollToSection(refs.contactRef)}
            className="text-white hover:text-[#FFE135]"
          >
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
};
