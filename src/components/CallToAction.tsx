import React from 'react';
import CallToActionButton from './CallToActionButton';

const CallToAction = () => {
  return (
    <section id="join" className="py-20 bg-gradient-to-br from-teal-600 to-blue-600 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Comienza tu camino hacia una digestión saludable
          </h2>
          <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
            Únete ahora al grupo de WhatsApp y agenda tu reunión gratuita con el Dr. Alexandre para descubrir cómo la epigenética puede cambiar tu vida.
          </p>
          
          <div className="max-w-md mx-auto">
            <CallToActionButton isLarge={true} />
            
            <p className="mt-6 text-sm opacity-80">
              Plazas limitadas. Sin compromiso. Diagnóstico personalizado.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;