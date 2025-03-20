import React from "react";
import imageo1 from '../images/image01.jpg';
import imageo2 from '../images/image02.jpg';
import imageo3 from '../images/image03.jpg';
import imageo4 from '../images/image04.jpg';
import imageo5 from '../images/image05.jpg';
import imageo6 from '../images/image06.jpg';
import imageo7 from '../images/image07.jpg';
import imageo8 from '../images/image08.jpg';
import imageo9 from '../images/image09.jpg';
import imageo10 from '../images/image10.jpg';
import imageo11 from '../images/image11.jpg';
import imageo12 from '../images/image12.jpg';


interface GalleryImage {
  url: string;
}

interface GalleryProps {
  galleryRef: React.RefObject<HTMLDivElement>;
  selectedImage: number | null;
  setSelectedImage: (index: number | null) => void;
}

export const Gallery: React.FC<GalleryProps> = ({
  galleryRef,
  selectedImage,
  setSelectedImage,
}) => {
  const galleryImages: GalleryImage[] = [
    {
      url: `${imageo1}`,
    },
    {
      url: `${imageo2}`,
    },
    {
      url: `${imageo3}`,
      
    },
    {
      url: `${imageo4}`,
    },
    {
      url: `${imageo5}`,
    },
    {
      url: `${imageo6}`,
    },
    {
      url: `${imageo7}`,
    },
    {
      url: `${imageo8}`,
    },
    {
      url: `${imageo9}`,
    },
    {
      url: `${imageo10}`,
    },
    {
      url: `${imageo11}`,
    },
    {
      url: `${imageo12}`,
    },
  ];

  return (
    <section ref={galleryRef} className="py-20 px-4 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#FFE135]">
          Drone Expo Gallery
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image.url}
                className="w-full h-64 object-cover transform transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity" />
              <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity">
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full">
            <img
              src={galleryImages[selectedImage].url}

              className="w-full h-auto rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 rounded-b-lg">
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
