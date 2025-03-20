import React from "react";

interface GalleryImage {
  url: string;
  title: string;
  description: string;
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
      url: "/src/images/image01.jpg",
      title: "Aerial City View",
      description: "Stunning drone shot of urban landscape",
    },
    {
      url: "/src/images/image02.jpg",
      title: "Nature Photography",
      description: "Breathtaking aerial view of natural landscapes",
    },
    {
      url: "/src/images/image03.jpg",
      title: "Drone Technology",
      description: "Latest drone equipment in action",
    },
    {
      url: "/src/images/image04.jpg",
      title: "Event Coverage",
      description: "Professional drone coverage of major events",
    },
    {
      url: "/src/images/image05.jpg",
      title: "Sunset Drone Shot",
      description: "Magnificent aerial view during golden hour",
    },
    {
      url: "/src/images/image06.jpg",
      title: "Urban Architecture",
      description: "Geometric patterns of city buildings from above",
    },
    {
      url: "/src/images/image07.jpg",
      title: "Coastal Beauty",
      description: "Breathtaking shoreline captured by drone",
    },
    {
      url: "/src/images/image08.jpg",
      title: "Mountain Range",
      description: "Majestic peaks viewed from above",
    },
    {
      url: "/src/images/image09.jpg",
      title: "Rural Landscape",
      description: "Pastoral scenes from a bird's eye view",
    },
    {
      url: "/src/images/image10.jpg",
      title: "Industrial Zones",
      description: "Complex industrial architecture from above",
    },
    {
      url: "/src/images/image11.jpg",
      title: "Forest Aerial",
      description: "Dense forest canopy from drone perspective",
    },
    {
      url: "/src/images/image12.jpg",
      title: "Desert Patterns",
      description: "Abstract patterns in desert landscapes",
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
                alt={image.title}
                className="w-full h-64 object-cover transform transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity" />
              <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <h3 className="text-white font-bold">{image.title}</h3>
                <p className="text-white text-sm">{image.description}</p>
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
              alt={galleryImages[selectedImage].title}
              className="w-full h-auto rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 rounded-b-lg">
              <h3 className="text-xl font-bold">
                {galleryImages[selectedImage].title}
              </h3>
              <p>{galleryImages[selectedImage].description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
