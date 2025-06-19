import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-12 bg-brand-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-2/5">
              <div className="rounded-full overflow-hidden w-48 h-48 mx-auto shadow-lg">
                <img 
                  src="/profile.jpg"
                  alt="Rosa" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-xl font-bold text-slate-800">Rosa</h3>
                <p className="text-brand-600 text-sm">Entrenadora y creadora del método</p>
              </div>
            </div>
            
            <div className="md:w-3/5">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-slate-800">¿Quién soy?</h2>
              <div className="space-y-3 text-slate-700 text-base">
                <p>
                  Soy Rosa, entrenadora, mujer, madre… y durante mucho tiempo, también estuve perdida.
                </p>
                <p>
                  Después de más de 20 años ayudando a transformar cuerpos, llegó mi embarazo… y me transformó a mí.
                </p>
                <p>
                  No solo el cuerpo cambió. Cambié yo. Dejé de reconocerme.
                </p>
                <p>
                  Me dolía mirar fotos. Me dolía entrenar. Me dolía intentar volver a ser "la de antes" y sentir que no podía.
                </p>
                <p>
                  Durante meses me escondí. Y en ese silencio, creé algo que jamás había existido:
                  un método para volver a ti desde el cuerpo, la mente y el alma.
                </p>
                <p>
                  Un sistema real. Para mujeres reales.
                </p>
                <p>
                  Que tienen familia. Pareja. Trabajo. Poco tiempo. Muchas responsabilidades.
                </p>
                <p>
                  Que a veces se sienten culpables por cuidarse… y en el fondo solo quieren volver a ellas mismas.
                </p>
                <p>
                  Un método sin extremos. Sin culpas. Sin promesas vacías.
                </p>
                <p>
                  Hoy, después de ayudar a más de 10.000 mujeres, no me interesa solo que bajes de peso.
                </p>
                <p>
                  Me interesa que vuelvas a sentirte tú. Sin presión. Sin miedo. Con fuerza real.
                </p>
                <p className="font-medium text-brand-700">
                  Y si has llegado hasta aquí, probablemente tú tampoco quieras seguir viviendo a medias.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;