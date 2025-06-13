import React from 'react';

const Benefits = () => {
  return (
    <section id="benefits" className="py-12 bg-slate-50 min-h-[calc(100vh-4rem)]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-xl md:text-3xl font-bold mb-4 text-slate-800 leading-[1.3] [text-shadow:_0_0_15px_rgba(234,155,37,0.2)]">¿QUÉ INCLUYE?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
            <div className="bg-white/95 backdrop-blur-sm border border-white/20 rounded-lg p-4 md:p-6 shadow-sm hover:shadow-md transition-all duration-300 flex items-start gap-4">
              <div className="bg-[#ea9b25]/10 p-2.5 rounded-lg flex-shrink-0">
                <svg className="w-8 h-8 text-[#ea9b25]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M23 7l-7 5 7 5V7z" />
                  <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                </svg>
              </div>
              <p className="text-base md:text-lg leading-[1.5] text-[#333]">
                <span className="highlight">Sesión en directo grupal</span> con Rosa para marcar tu punto de partida y acompañarte paso a paso.
              </p>
            </div>

            <div className="bg-white/95 backdrop-blur-sm border border-white/20 rounded-lg p-4 md:p-6 shadow-sm hover:shadow-md transition-all duration-300 flex items-start gap-4">
              <div className="bg-[#ea9b25]/10 p-2.5 rounded-lg flex-shrink-0">
                <svg className="w-8 h-8 text-[#ea9b25]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                </svg>
              </div>
              <p className="text-base md:text-lg leading-[1.5] text-[#333]">
                <span className="highlight">6 clases</span> del <span className="highlight">Desafío Asiático</span>: quema grasa y activa tu metabolismo como nunca antes.
              </p>
            </div>

            <div className="bg-white/95 backdrop-blur-sm border border-white/20 rounded-lg p-4 md:p-6 shadow-sm hover:shadow-md transition-all duration-300 flex items-start gap-4">
              <div className="bg-[#ea9b25]/10 p-2.5 rounded-lg flex-shrink-0">
                <svg className="w-8 h-8 text-[#ea9b25]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>
              <p className="text-base md:text-lg leading-[1.5] text-[#333]">
                <span className="highlight">4 clases EXTREMAS</span> de <span className="highlight">cardio quemagrasa</span>: cortas, potentes y diseñadas para transformar tu cuerpo desde casa.
              </p>
            </div>

            <div className="bg-white/95 backdrop-blur-sm border border-white/20 rounded-lg p-4 md:p-6 shadow-sm hover:shadow-md transition-all duration-300 flex items-start gap-4">
              <div className="bg-[#ea9b25]/10 p-2.5 rounded-lg flex-shrink-0">
                <svg className="w-8 h-8 text-[#ea9b25]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 3h18v18H3z" />
                  <path d="M3 9h18" />
                  <path d="M9 21V9" />
                </svg>
              </div>
              <p className="text-base md:text-lg leading-[1.5] text-[#333]">
                <span className="highlight">Plan de alimentación personalizado</span>: adaptado a tu verano, a tu ritmo, a tu vida.
              </p>
            </div>

            <div className="bg-white/95 backdrop-blur-sm border border-white/20 rounded-lg p-4 md:p-6 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-start gap-4 mb-3">
                <div className="bg-[#ea9b25]/10 p-2.5 rounded-lg flex-shrink-0">
                  <svg className="w-8 h-8 text-[#ea9b25]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2v20M2 12h20" />
                    <path d="M12 2l4 4M12 2l-4 4" />
                  </svg>
                </div>
                <p className="font-semibold text-base md:text-lg text-[#333]"><span className="highlight">Recetas reales</span> para mujeres reales:</p>
              </div>
              <ul className="list-none pl-8 space-y-2.5">
                <li className="relative before:content-[''] before:absolute before:left-[-1rem] before:top-[0.5rem] before:w-[6px] before:h-[6px] before:bg-[#ea9b25] before:rounded-full text-base md:text-lg leading-[1.5] text-[#333]">
                  <span className="highlight">Comidas simples</span>, rápidas y saludables.
                </li>
                <li className="relative before:content-[''] before:absolute before:left-[-1rem] before:top-[0.5rem] before:w-[6px] before:h-[6px] before:bg-[#ea9b25] before:rounded-full text-base md:text-lg leading-[1.5] text-[#333]">
                  <span className="highlight">Postres fit</span> que no engordan (y que de verdad vas a querer comer)
                </li>
              </ul>
            </div>

            <div className="bg-white/95 backdrop-blur-sm border border-white/20 rounded-lg p-4 md:p-6 shadow-sm hover:shadow-md transition-all duration-300 flex items-start gap-4">
              <div className="bg-[#ea9b25]/10 p-2.5 rounded-lg flex-shrink-0">
                <svg className="w-8 h-8 text-[#ea9b25]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2v20M2 12h20" />
                  <path d="M12 2l4 4M12 2l-4 4" />
                </svg>
              </div>
              <p className="text-base md:text-lg leading-[1.5] text-[#333]">
                <span className="highlight">Sesiones exclusivas</span> de <span className="highlight">Zumba y cardio latino</span>: para sudar, reír y reconectar contigo.
              </p>
            </div>

            <div className="bg-white/95 backdrop-blur-sm border border-white/20 rounded-lg p-4 md:p-6 shadow-sm hover:shadow-md transition-all duration-300 flex items-start gap-4">
              <div className="bg-[#ea9b25]/10 p-2.5 rounded-lg flex-shrink-0">
                <svg className="w-8 h-8 text-[#ea9b25]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2v20M2 12h20" />
                  <path d="M12 2l4 4M12 2l-4 4" />
                </svg>
              </div>
              <p className="text-base md:text-lg leading-[1.5] text-[#333]">
                Masterclass "Descubre la comida que te inflama": para dejar de sentirte hinchada sin necesidad de contar calorías.
              </p>
            </div>

            <div className="bg-white/95 backdrop-blur-sm border border-white/20 rounded-lg p-4 md:p-6 shadow-sm hover:shadow-md transition-all duration-300 flex items-start gap-4">
              <div className="bg-[#ea9b25]/10 p-2.5 rounded-lg flex-shrink-0">
                <svg className="w-8 h-8 text-[#ea9b25]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                </svg>
              </div>
              <p className="text-base md:text-lg leading-[1.5] text-[#333]">
                Masterclass de hábitos duraderos: para que esta vez no empieces de cero en septiembre.
              </p>
            </div>

            <div className="bg-white/95 backdrop-blur-sm border border-white/20 rounded-lg p-4 md:p-6 shadow-sm hover:shadow-md transition-all duration-300 flex items-start gap-4">
              <div className="bg-[#ea9b25]/10 p-2.5 rounded-lg flex-shrink-0">
                <svg className="w-8 h-8 text-[#ea9b25]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <p className="text-base md:text-lg leading-[1.5] text-[#333]">
                Comunidad privada de mujeres como tú: sin juicios, sin postureo, con apoyo real.
              </p>
            </div>
          </div>

          <div className="mt-6 md:mt-8">
            <div className="bg-[#ea9b25]/10 backdrop-blur-sm border border-[#ea9b25]/20 rounded-lg p-6 md:p-8 shadow-sm">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-slate-800 text-center [text-shadow:_0_0_15px_rgba(234,155,37,0.2)]">
                GARANTÍA TOTAL
              </h2>
              <p className="text-base md:text-lg leading-[1.5] text-[#333] text-center">
                Tienes 7 días de prueba. Si no conectas, te devolvemos el dinero sin hacer preguntas. Así de simple.
              </p>
            </div>
          </div>

          <div className="mt-6 md:mt-8">
            <div className="bg-white/95 backdrop-blur-sm border border-white/20 rounded-lg p-6 md:p-8 shadow-sm">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-slate-800 text-center [text-shadow:_0_0_15px_rgba(234,155,37,0.2)]">
                PRECIO FINAL
              </h2>
              <p className="text-base md:text-lg leading-[1.5] text-[#333] text-center mb-6">
                TODO POR SOLO 97 € (Sin mensualidades, sin letra pequeña. Acceso completo durante 1 mes al programa más transformador que hemos creado.)
              </p>
              <div className="text-center">
                <p className="text-[#ea9b25] font-bold text-lg">
                  QUIERO HACER DE ESTE VERANO MI VERANO
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 md:mt-8 text-center">
            <p className="text-base md:text-lg leading-[1.5] text-[#333]">
              Olvidate de dietas y entrenamientos muy difíciles de seguir y muy fáciles de abandonar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;