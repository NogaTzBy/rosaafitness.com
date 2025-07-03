import React from 'react';

const Hero = () => {
  const handleWhatsAppClick = () => {
    window.open('https://form.typeform.com/to/Jpe1p1jk', '_blank');
  };

  return (
    <section className="relative min-h-screen md:min-h-screen">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="/header.jpg"
          alt="Background"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-800/80" />
      </div>

      {/* Content */}
      <div className="relative min-h-screen md:min-h-screen container mx-auto px-6 flex items-center">
        <div className="max-w-2xl mx-auto text-center header-container mt-0 md:mt-0">
          <div className="pt-0 pb-1 md:pt-16 md:pb-8">
            <h1 className="text-2xl md:text-3xl font-semibold text-white mb-1 md:mb-6 leading-tight animate-fade-in-up [text-shadow:_0_0_15px_rgba(234,155,37,0.3)]">
              Descubre como <span className="text-brand-400 font-bold">eliminar grasa</span> y volver a tener<br />
              <span className="text-brand-300 font-bold">el mejor cuerpo de tu vida</span> en <span className="text-brand-400 font-bold text-3xl md:text-4xl">28 días</span>
            </h1>

            <div className="highlight-text animate-fade-in-up delay-200 mb-6">
              Pierde de <span className="text-brand-400 font-bold text-base md:text-lg">3 a 10 kilos</span> sin dietas extremas ni obsesiones, con el método que ya ha transformado a más de <span className="text-brand-300 font-bold">10.000 mujeres reales</span>.
            </div>
          </div>

          <div className="w-full animate-fade-in-up delay-300">
            <div className="step step-1 mb-4 md:mb-0">
              <span style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.95)', fontWeight: 600, display: 'block', letterSpacing: 0.2 }}>
                PASO 1: <span className="text-brand-400">Mirar este breve video</span>
              </span>
            </div>
            <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://player.vimeo.com/video/1095548543?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                title="Video rosa landing (VSL)"
              ></iframe>
            </div>
            <p className="text-sm md:text-lg text-white/90 mt-1 md:mt-2 mb-3 md:mb-6 animate-fade-in-up delay-400 leading-relaxed">
              Aprende a <span className="text-brand-400 font-semibold">perder grasa sin dietas</span> y con entrenamientos de <span className="text-brand-300 font-semibold">sólo 30 minutos</span>, 3 veces a la semana
            </p>
            
            {/* WhatsApp Button with Brand Colors and Orange Glow */}
            <div className="animate-fade-in-up delay-500 mb-6 md:mb-12">
              <div>
                {/* Mobile */}
                <div className="step-2 mb-2 md:hidden">
                  <span>
                    PASO 2: Hacer clic en este botón para hablar conmigo
                  </span>
                </div>
                {/* Desktop */}
                <div className="hidden md:block step-2-desktop mb-4">
                  <span>
                    PASO 2: Hacer clic en este botón para hablar conmigo
                  </span>
                </div>
              </div>
              <button
                onClick={handleWhatsAppClick}
                className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-brand-500 to-brand-600 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden group"
                style={{
                  boxShadow: '0 0 20px rgba(234, 155, 37, 0.6), 0 0 40px rgba(234, 155, 37, 0.4), 0 0 60px rgba(234, 155, 37, 0.2)'
                }}
              >
                {/* Animated glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-brand-300/20 via-brand-200/30 to-brand-300/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Moving shine effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"></div>
                
                {/* WhatsApp Icon */}
                <svg className="w-6 h-6 mr-3 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488"/>
                </svg>
                
                <span className="relative z-10">HAZ CLIC AQUÍ PARA SABER MÁS</span>
                
                {/* Enhanced pulsing glow animation */}
                <div 
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: 'radial-gradient(circle, rgba(234, 155, 37, 0.4) 0%, transparent 70%)',
                    animation: 'glow-pulse 3s ease-in-out infinite'
                  }}
                ></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;