import React from 'react';
import { Tv, Globe, Calendar } from 'lucide-react';

interface AboutProps {
  aboutRef: React.RefObject<HTMLDivElement>;
}

export const About: React.FC<AboutProps> = ({ aboutRef }) => {
  const upcomingEvents = [
    {
      title: "International Drone Expo 2025",
      date: "April 24-26, 2025",
      location: "Hyderabad, Hytex Park ",
      description: "Join us for the largest drone technology showcase featuring industry leaders and innovative demonstrations."
    }
  ];

  return (
    <section ref={aboutRef} className="py-20 px-4 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8 text-[#FFE135]">About Drone TV</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg mb-6">
              Drone TV is your premier destination for comprehensive coverage of drone expos,
              cutting-edge technology advancements, and industry trends. We collaborate with
              leading drone manufacturers, event organizers, and media outlets to bring you
              the most exciting and informative drone content.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#FFE135] p-4 rounded-lg text-black">
                <Tv className="w-8 h-8 mb-2" />
                <h3 className="font-bold mb-1">Live Coverage</h3>
                <p className="text-sm">Real-time streaming of major drone events</p>
              </div>
              <div className="bg-[#FFE135] p-4 rounded-lg text-black">
                <Globe className="w-8 h-8 mb-2" />
                <h3 className="font-bold mb-1">Global Reach</h3>
                <p className="text-sm">International drone community coverage</p>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-4 text-[#FFE135]">Upcoming Events</h3>
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-[#222] p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-5 h-5 text-[#FFE135]" />
                  <h4 className="font-bold">{event.title}</h4>
                </div>
                <p className="text-sm text-gray-400 mb-1">{event.date} | {event.location}</p>
                <p className="text-sm">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};