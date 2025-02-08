import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { RevealOnScroll } from "../RevealOnScroll";

const Certificates = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const certificates = [
    {
      image:
        "https://res.cloudinary.com/diwerulix/image/upload/v1739040300/Learning-Management-System/uzair3_page-0001_mytvx7.jpg",
    },
    {
      image:
        "https://res.cloudinary.com/diwerulix/image/upload/v1739040299/Learning-Management-System/uzair7_page-0001_lcwhui.jpg",
    },
    {
      image:
        "https://res.cloudinary.com/diwerulix/image/upload/v1739040300/Learning-Management-System/uzair6_page-0001_ozg88x.jpg",
    },
    {
      image:
        "https://res.cloudinary.com/diwerulix/image/upload/v1739040299/Learning-Management-System/uzair4_page-0001_azpybg.jpg",
    },
    {
      image:
        "https://res.cloudinary.com/diwerulix/image/upload/v1739040299/Learning-Management-System/uzair5_page-0001_rau4n0.jpg",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === certificates.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? certificates.length - 1 : prevIndex - 1
    );
  };

  // Auto-advance carousel
  React.useEffect(() => {
    const timer = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="certificates"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Professional Certificates
          </h2>

          <div className="relative group">
            <div className="overflow-hidden rounded-xl border border-white/10 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition duration-300">
              <div className="relative">
                {/* Certificate Image */}
                <div className="aspect-[14/10] relative overflow-hidden">
                  <img
                    src={certificates[currentIndex].image}
                    alt={certificates[currentIndex].title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 
              transition-all text-white opacity-0 group-hover:opacity-100 focus:opacity-100"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 
              transition-all text-white opacity-0 group-hover:opacity-100 focus:opacity-100"
            >
              <ChevronRight size={24} />
            </button>

            {/* Progress Indicators */}
            <div className="flex justify-center mt-6 gap-2">
              {certificates.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-1.5 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-blue-500 w-8"
                      : "bg-blue-500/20 w-4 hover:bg-blue-500/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Certificates;
