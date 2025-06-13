import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonialImages = [
  {
    image: "/1.jpeg",
    alt: "Testimonio de paciente"
  },
  {
    image: "/2.jpeg",
    alt: "Testimonio de paciente"
  },
  {
    image: "/3.jpeg",
    alt: "Testimonio de paciente"
  },
  {
    image: "/4.jpeg",
    alt: "Testimonio de paciente"
  },
  {
    image: "/5.jpeg",
    alt: "Testimonio de paciente"
  },
  {
    image: "/6.jpeg",
    alt: "Testimonio de paciente"
  },
  {
    image: "/7.jpeg",
    alt: "Testimonio de paciente"
  }
];

const AUTOPLAY_INTERVAL = 5000; // 5 seconds

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoplayTimerRef = useRef<number>();

  // Enhanced autoplay functionality
  useEffect(() => {
    const startAutoplay = () => {
      if (isAutoPlaying && !isDragging) {
        autoplayTimerRef.current = window.setInterval(() => {
          setCurrentIndex((prev) => (prev + 1) % testimonialImages.length);
        }, AUTOPLAY_INTERVAL);
      }
    };

    const stopAutoplay = () => {
      if (autoplayTimerRef.current) {
        clearInterval(autoplayTimerRef.current);
      }
    };

    startAutoplay();

    // Cleanup function
    return () => {
      stopAutoplay();
    };
  }, [isAutoPlaying, isDragging]);

  const nextImage = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonialImages.length);
  };

  const prevImage = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonialImages.length) % testimonialImages.length);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (carouselRef.current?.offsetLeft || 0));
    setScrollLeft(currentIndex);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (carouselRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    const newIndex = Math.round(scrollLeft - walk / (carouselRef.current?.offsetWidth || 1));
    if (newIndex >= 0 && newIndex < testimonialImages.length) {
      setCurrentIndex(newIndex);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - (carouselRef.current?.offsetLeft || 0));
    setScrollLeft(currentIndex);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - (carouselRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    const newIndex = Math.round(scrollLeft - walk / (carouselRef.current?.offsetWidth || 1));
    if (newIndex >= 0 && newIndex < testimonialImages.length) {
      setCurrentIndex(newIndex);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <section id="testimonials" className="py-8 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {/* Image Carousel */}
          <div className="relative">
            <div 
              ref={carouselRef}
              className="relative overflow-hidden rounded-xl shadow-lg"
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseUp}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div 
                className="flex transition-transform duration-300 ease-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonialImages.map((testimonial, index) => (
                  <div 
                    key={index}
                    className="w-full flex-shrink-0"
                  >
                    <img 
                      src={testimonial.image}
                      alt={testimonial.alt}
                      className="w-full h-[400px] object-contain bg-white"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button 
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-slate-800 p-2 rounded-full shadow-lg transition-colors z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-slate-800 p-2 rounded-full shadow-lg transition-colors z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="flex justify-center mt-4 space-x-1.5">
              {testimonialImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setCurrentIndex(index);
                  }}
                  className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                    index === currentIndex ? 'bg-brand-600' : 'bg-brand-200'
                  }`}
                />
              ))}
            </div>

            <div className="mt-6 mb-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 shadow-[0_0_15px_rgba(0,0,0,0.1)]">
                <p className="text-lg text-slate-700 text-center">
                  Las palabras de alguien que ya pasó por este proceso valen más que cualquier promesa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;