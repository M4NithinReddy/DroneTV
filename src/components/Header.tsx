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
    <header className="fixed w-full top-0 z-50 bg-[#FCC509] text-black">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="/src/images/logo.jpg"
            alt="Drone TV Logo"
            className="h-16 w-[280px]"
          />
        </div>
        <nav className="hidden md:flex space-x-8">
          <button
            onClick={() => scrollToSection(refs.aboutRef)}
            className="text-black hover:text-[#FFE131]"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection(refs.internshipsRef)}
            className="text-black hover:text-[#FFE131]"
          >
            Internships
          </button>
          <button
            onClick={() => scrollToSection(refs.galleryRef)}
            className="text-black hover:text-[#FFE131]"
          >
            Gallery
          </button>
          <button
            onClick={() => scrollToSection(refs.contactRef)}
            className="text-black hover:text-[#FFE131]"
          >
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
};
