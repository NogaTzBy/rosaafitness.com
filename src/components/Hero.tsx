import React, { useEffect } from 'react';

const Hero = () => {
  useEffect(() => {
    // Preconnect to Google Drive domain
    const link = document.createElement('link');
    link.rel = 'preconnect';
    link.href = 'https://drive.google.com';
    document.head.appendChild(link);

    // Preload the video
    const preloadLink = document.createElement('link');
    preloadLink.rel = 'preload';
    preloadLink.as = 'iframe';
    preloadLink.href = 'https://drive.google.com/file/d/1rPc4y0HvS38Bcfek5wFSoI8zVUFvciVf/preview';
    document.head.appendChild(preloadLink);
  }, []);

  return (
    <section className="relative min-h-screen md:min-h-screen">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="/header.jpg"
          alt="Background"
          className="w-full h-full object-cover object-center"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-800/80" />
      </div>

      {/* Content */}
      <div className="relative min-h-screen md:min-h-screen container mx-auto px-6 flex items-center">
        <div className="max-w-2xl mx-auto text-center">
          <div className="pt-0 pb-2 md:py-8">
            <h1 className="text-2xl md:text-3xl font-semibold text-white mb-2 md:mb-4 leading-tight animate-fade-in-up [text-shadow:_0_0_15px_rgba(234,155,37,0.3)]">
              Descubre como eliminar grasa y volver a tener<br />
              el mejor cuerpo de tu vida en 28 días
            </h1>

            <p className="text-sm md:text-base text-white/80 mb-2 md:mb-4 max-w-xl mx-auto animate-fade-in-up delay-200">
              Pierde de 3 a 10 kilos sin dietas extremas ni obsesiones, con el método que ya ha transformado a más de 10.000 mujeres reales.
            </p>
            <p className="text-[0.8rem] text-white/80 mb-2 md:mb-4 max-w-xl mx-auto animate-fade-in-up delay-200">
              Aunque estés embarazada<br />
              Aunque tengas poco tiempo
            </p>
          </div>

          <div className="w-full animate-fade-in-up delay-300">
            <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
              <iframe
                src="https://drive.google.com/file/d/1rPc4y0HvS38Bcfek5wFSoI8zVUFvciVf/preview"
                className="absolute top-0 left-0 w-full h-full"
                allow="autoplay"
                loading="lazy"
                title="Video de presentación"
                style={{ 
                  border: 'none', 
                  objectFit: 'cover',
                  backgroundColor: 'transparent'
                }}
                sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                referrerPolicy="origin"
              />
            </div>
            <p className="text-sm md:text-lg text-white/90 mt-2 md:mt-2 mb-0 md:mb-0 animate-fade-in-up delay-400">
              Aprende a perder grasa sin dietas y con entrenamientos de sólo 30 minutos, 3 veces a la semana
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;