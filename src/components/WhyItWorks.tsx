import React from 'react';

const WhyItWorks = () => {
  return (
    <section id="why" className="py-12 md:py-20 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-500/10 via-transparent to-transparent opacity-50" />
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10 md:mb-16 animate-fade-in-up">
            <div className="inline-flex items-center gap-3 mb-4">
              <svg className="w-6 h-6 md:w-8 md:h-8 text-brand-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                ¿Por qué esto funciona?
              </h2>
            </div>
          </div>
          
          {/* Content Grid */}
          <div className="space-y-8 md:space-y-16">
            {/* First Row */}
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
              <div className="animate-fade-in-left">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-start gap-3 mb-3 md:mb-4">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-brand-400 mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                    </svg>
                    <h3 className="text-lg md:text-xl font-bold text-brand-400 leading-tight">
                      Esto no es un reto más
                    </h3>
                  </div>
                  <p className="text-sm md:text-base text-white/90 leading-relaxed font-medium">
                    Porque <span className="text-brand-300 font-semibold">no estás rota</span>. 
                  </p>
                  <p className="text-sm md:text-base text-slate-300 leading-relaxed mt-2">
                    Estás cansada. Cansada de intentarlo todo. De empezar y volver a caer.
                  </p>
                </div>
              </div>
              <div className="animate-fade-in-right order-first md:order-last">
                <div className="relative rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="/1-1.jpg"
                    alt="Mujer entrenando"
                    className="w-full h-[250px] md:h-[300px] object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Separator */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-700"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="px-4 bg-slate-800">
                  <div className="w-2 h-2 rounded-full bg-brand-400 shadow-[0_0_10px_rgba(234,155,37,0.5)]"></div>
                </span>
              </div>
            </div>

            {/* Second Row */}
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
              <div className="animate-fade-in-left">
                <div className="relative rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="/1-2.jpg"
                    alt="Mujer entrenando"
                    className="w-full h-[250px] md:h-[300px] object-cover"
                  />
                </div>
              </div>
              <div className="animate-fade-in-right">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-start gap-3 mb-3 md:mb-4">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-brand-400 mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                    <h3 className="text-lg md:text-xl font-bold text-brand-400 leading-tight">
                      De mirarte al espejo
                    </h3>
                  </div>
                  <p className="text-sm md:text-base text-white/90 leading-relaxed font-medium mb-2">
                    De mirarte al espejo y <span className="text-brand-300 font-semibold">no reconocerte</span>.
                  </p>
                  <p className="text-sm md:text-base text-slate-300 leading-relaxed">
                    De hacer esfuerzos sin ver cambios… y encima, sentir culpa.
                  </p>
                </div>
              </div>
            </div>

            {/* Separator */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-700"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="px-4 bg-slate-800">
                  <div className="w-2 h-2 rounded-full bg-brand-400 shadow-[0_0_10px_rgba(234,155,37,0.5)]"></div>
                </span>
              </div>
            </div>

            {/* Third Row */}
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
              <div className="animate-fade-in-left">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-start gap-3 mb-3 md:mb-4">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-brand-400 mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2v20M2 12h20" />
                      <path d="M12 2l4 4M12 2l-4 4" />
                    </svg>
                    <h3 className="text-lg md:text-xl font-bold text-brand-400 leading-tight">
                      Es una forma de volver a ti
                    </h3>
                  </div>
                  <p className="text-sm md:text-base text-white/90 leading-relaxed font-medium">
                    Es una forma de <span className="text-brand-300 font-semibold">volver a ti</span>.
                  </p>
                  <p className="text-sm md:text-base text-slate-300 leading-relaxed mt-2">
                    Con calma. Con una estructura. Con apoyo real.
                  </p>
                </div>
              </div>
              <div className="animate-fade-in-right order-first md:order-last">
                <div className="relative rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="/1-3.jpeg"
                    alt="Mujer entrenando"
                    className="w-full h-[250px] md:h-[300px] object-cover"
                    style={{ objectPosition: 'top' }}
                  />
                </div>
              </div>
            </div>

            {/* Call to action */}
            <div className="mt-12 md:mt-20 text-center">
                <button
                    onClick={() => window.open('https://form.typeform.com/to/Jpe1p1jk', '_blank')}
                    className="transform transition-transform duration-300 hover:scale-105 px-8 py-4 bg-brand-500 text-white font-bold text-lg rounded-full shadow-lg"
                    style={{
                        boxShadow: '0 0 20px rgba(234, 155, 37, 0.6), 0 0 40px rgba(234, 155, 37, 0.4), 0 0 60px rgba(234, 155, 37, 0.2)'
                    }}
                >
                    Quiero volver a tener el cuerpo que tenía antes
                </button>
            </div>

            {/* Benefits List */}
            <div className="mt-10 md:mt-16 animate-fade-in-up">
              <div className="mb-6 text-center">
                <h3 className="text-xl md:text-2xl font-bold text-brand-400 mb-2">
                  ¿Qué hace que esto sea diferente?
                </h3>
                <div className="w-16 h-1 bg-brand-400 mx-auto rounded-full"></div>
              </div>
              
              <ul className="space-y-4 md:space-y-6">
                <li className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-start gap-3">
                    <div className="bg-brand-500 rounded-full p-1.5 mt-0.5 flex-shrink-0">
                      <svg className="w-3 h-3 md:w-4 md:h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm md:text-base font-semibold text-brand-300 mb-1">
                        Clases cortas y potentes
                      </h4>
                      <p className="text-sm md:text-base text-slate-300 leading-relaxed">
                        Para que sientas el cambio desde el primer día.
                      </p>
                    </div>
                  </div>
                </li>
                
                <li className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-start gap-3">
                    <div className="bg-brand-500 rounded-full p-1.5 mt-0.5 flex-shrink-0">
                      <svg className="w-3 h-3 md:w-4 md:h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm md:text-base font-semibold text-brand-300 mb-1">
                        Alimentación sencilla y rica
                      </h4>
                      <p className="text-sm md:text-base text-slate-300 leading-relaxed">
                        Sin reglas absurdas ni restricciones extremas.
                      </p>
                    </div>
                  </div>
                </li>
                
                <li className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-start gap-3">
                    <div className="bg-brand-500 rounded-full p-1.5 mt-0.5 flex-shrink-0">
                      <svg className="w-3 h-3 md:w-4 md:h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm md:text-base font-semibold text-brand-300 mb-1">
                        Comunidad de apoyo real
                      </h4>
                      <p className="text-sm md:text-base text-slate-300 leading-relaxed">
                        Mujeres que están en el mismo punto que tú.
                      </p>
                    </div>
                  </div>
                </li>
                
                <li className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-start gap-3">
                    <div className="bg-brand-500 rounded-full p-1.5 mt-0.5 flex-shrink-0">
                      <svg className="w-3 h-3 md:w-4 md:h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm md:text-base font-semibold text-brand-300 mb-1">
                        Acompañamiento personal
                      </h4>
                      <p className="text-sm md:text-base text-slate-300 leading-relaxed">
                        Yo, contigo, guiándote en directo. Sin juicios y con resultados.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            {/* Final Message */}
            <div className="mt-10 md:mt-16 text-center animate-fade-in-up">
              <div className="bg-gradient-to-r from-brand-500/20 to-brand-400/20 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-lg border border-brand-400/30">
                <div className="mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-brand-500 rounded-full mb-3">
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-brand-400 mb-3">
                    La diferencia está en el enfoque
                  </h3>
                </div>
                <p className="text-base md:text-lg text-white font-medium leading-relaxed">
                  Esto funciona porque <span className="text-brand-300 font-bold">no parte del castigo</span>. 
                </p>
                <p className="text-base md:text-lg text-slate-300 leading-relaxed mt-2">
                  Parte del cuidado. Y cuando te cuidas de verdad, el cuerpo responde.
                </p>
                <div className="text-center mt-6">
                    <button
                        onClick={() => window.open('https://form.typeform.com/to/Jpe1p1jk', '_blank')}
                        className="transform transition-transform duration-300 hover:scale-105 px-8 py-4 bg-brand-500 text-white font-bold text-lg rounded-full shadow-lg"
                        style={{
                            boxShadow: '0 0 20px rgba(234, 155, 37, 0.6), 0 0 40px rgba(234, 155, 37, 0.4), 0 0 60px rgba(234, 155, 37, 0.2)'
                        }}
                    >
                        Quiero volver a tener el cuerpo que tenía antes
                    </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyItWorks;