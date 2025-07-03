import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  // Smooth scroll handler
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-300 py-10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Rosa Fitness</h3>
              <p className="text-sm text-slate-400 mb-4">
                Entrenamientos y nutrición diseñados para mujeres reales, con métodos sostenibles que transforman tu energía, tu cuerpo y tu confianza.
              </p>
            </div>
            
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Enlaces rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#benefits" className="text-sm text-slate-400 hover:text-brand-400 transition-colors" onClick={e => handleSmoothScroll(e, 'benefits')}>Programa</a>
                </li>
                <li>
                  <a href="#why" className="text-sm text-slate-400 hover:text-brand-400 transition-colors" onClick={e => handleSmoothScroll(e, 'why')}>¿Por qué funciona?</a>
                </li>
                <li>
                  <a href="#about" className="text-sm text-slate-400 hover:text-brand-400 transition-colors" onClick={e => handleSmoothScroll(e, 'about')}>Sobre mí</a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Contacto</h3>
              <p className="text-sm text-slate-400 mb-2">
                Para más información, escríbenos a:
              </p>
              <a href="mailto:info@rosaafitness.com" className="text-teal-400 hover:text-teal-300 transition-colors">
                info@rosaafitness.com
              </a>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-10 pt-6 text-center text-sm text-slate-500">
            <p>© {currentYear} Rosa Fitness. Todos los derechos reservados.</p>
            <p className="mt-2">
              <a href="#" className="text-slate-500 hover:text-slate-400 transition-colors mx-2">
                Política de privacidad
              </a>
              <a href="#" className="text-slate-500 hover:text-slate-400 transition-colors mx-2">
                Términos y condiciones
              </a>
              <a href="#" className="text-slate-500 hover:text-slate-400 transition-colors mx-2">
                Aviso legal
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;