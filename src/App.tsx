import React, { useRef, useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Internship } from './components/Internship';
import { Gallery } from './components/Gallery';
import { Footer } from './components/Footer';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsConditions } from './pages/TermsConditions';
import { CookiePolicy } from './pages/CookiePolicy';

function App() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<string>('home');

  const aboutRef = useRef<HTMLDivElement>(null);
  const internshipsRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleWatchNow = () => {
    window.open('https://www.youtube.com/your-channel', '_blank');
  };

  const handleInternshipApplication = () => {
    window.open('https://forms.google.com/your-form-link', '_blank');
  };

  const refs = {
    aboutRef,
    internshipsRef,
    galleryRef,
    contactRef
  };

  if (currentPage === 'privacy') {
    return <PrivacyPolicy />;
  }

  if (currentPage === 'terms') {
    return <TermsConditions />;
  }

  if (currentPage === 'cookies') {
    return <CookiePolicy />;
  }

  return (
    <div className="min-h-screen bg-[#FFE135]">
      <Header scrollToSection={scrollToSection} refs={refs} />
      <Hero 
        handleWatchNow={handleWatchNow}
        handleInternshipApplication={handleInternshipApplication}
      />
      <About aboutRef={aboutRef} />
      <Internship 
        internshipsRef={internshipsRef}
        selectedRole={selectedRole}
        setSelectedRole={setSelectedRole}
        handleInternshipApplication={handleInternshipApplication}
      />
      <Gallery 
        galleryRef={galleryRef}
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
      />
      <Footer 
        scrollToSection={scrollToSection}
        refs={{ internshipsRef, galleryRef }}
        handleWatchNow={handleWatchNow}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default App;