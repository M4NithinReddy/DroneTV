import React from 'react';
import { Youtube, Instagram, Twitter, Linkedin } from 'lucide-react';

interface FooterProps {
  scrollToSection: (ref: React.RefObject<HTMLDivElement>) => void;
  refs: {
    internshipsRef: React.RefObject<HTMLDivElement>;
    galleryRef: React.RefObject<HTMLDivElement>;
  };
  handleWatchNow: () => void;
  setCurrentPage: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ scrollToSection, refs, handleWatchNow, setCurrentPage }) => {
  return (
    <footer className="bg-black text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#FFE135]">Quick Links</h3>
            <ul className="space-y-2">
              <li><button onClick={() => scrollToSection(refs.internshipsRef)} className="hover:text-[#FFE135]">Internship Application</button></li>
              <li><button onClick={() => scrollToSection(refs.galleryRef)} className="hover:text-[#FFE135]">Media Gallery</button></li>
              <li><button onClick={handleWatchNow} className="hover:text-[#FFE135]">Live Events</button></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#FFE135]">Contact</h3>
            <p>Email: info@dronetv.in</p>
            <p>Phone: +91 7520123555</p>
            <p className="mt-2">5A, White Waters, Timber Lake Colony,</p>
            <p>Shaikpet, Gachibowli,</p>
            <p>Hyderabad 500008</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#FFE135]">Legal</h3>
            <ul className="space-y-2">
              <li><button onClick={() => setCurrentPage('privacy')} className="hover:text-[#FFE135]">Privacy Policy</button></li>
              <li><button onClick={() => setCurrentPage('terms')} className="hover:text-[#FFE135]">Terms of Service</button></li>
              <li><button onClick={() => setCurrentPage('cookies')} className="hover:text-[#FFE135]">Cookie Policy</button></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>&copy; 2025 Drone TV. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};