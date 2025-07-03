import React from 'react';

const Benefits = () => {
  return (
    <section className="features-section py-12 bg-slate-50 min-h-[calc(100vh-4rem)]">
      <div className="container mx-auto px-4">
        <h2 className="text-center mb-[40px] text-2xl md:text-3xl font-bold text-slate-800 leading-[1.3] [text-shadow:_0_0_15px_rgba(234,155,37,0.2)]">¿QUÉ INCLUYE?</h2>
        <div className="features-grid">
          {/* 1 */}
          <div className="feature-card">
            <div className="feature-image-wrapper" style={{marginBottom: 8}}>
              <img className="feature-image" src="/Sesión en directo grupal.png" alt="Sesión en directo grupal" loading="lazy" style={{width: '100%', aspectRatio: '1/1', height: 'auto', objectFit: 'cover', display: 'block', borderTopLeftRadius: 12, borderTopRightRadius: 12}} />
            </div>
            <div className="icon-wrapper">
              <svg width="24" height="24" fill="none" stroke="#ea9b25" strokeWidth="2" viewBox="0 0 24 24"><path d="M23 7l-7 5 7 5V7z"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>
            </div>
            <h3 className="feature-title">Sesión en directo grupal</h3>
            <p className="feature-desc">con Rosa para marcar tu punto de partida y acompañarte paso a paso.</p>
          </div>
          {/* 2 */}
          <div className="feature-card">
            <div className="feature-image-wrapper hidden md:block" style={{marginBottom: 8}}>
              <img className="feature-image" src="/Plan de alimentación personalizado.jpeg" alt="6 clases del Desafío Asiático" loading="lazy" style={{width: '100%', aspectRatio: '1/1', height: 'auto', objectFit: 'cover', display: 'block', borderTopLeftRadius: 12, borderTopRightRadius: 12}} />
              </div>
            <div className="icon-wrapper">
              <svg width="24" height="24" fill="none" stroke="#ea9b25" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>
            </div>
            <h3 className="feature-title">6 clases del Desafío Asiático</h3>
            <p className="feature-desc">quema grasa y activa tu metabolismo como nunca antes.</p>
          </div>
          {/* 3 */}
          <div className="feature-card">
            <div className="feature-image-wrapper" style={{marginBottom: 8}}>
              <img className="feature-image" src="/IMG_3576.JPG" alt="4 clases EXTREMAS de cardio quemagrasa" loading="lazy" style={{width: '100%', aspectRatio: '1/1', height: 'auto', objectFit: 'cover', display: 'block', borderTopLeftRadius: 12, borderTopRightRadius: 12}} />
              </div>
            <div className="icon-wrapper">
              <svg width="24" height="24" fill="none" stroke="#ea9b25" strokeWidth="2" viewBox="0 0 24 24"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
            </div>
            <h3 className="feature-title">4 clases EXTREMAS de cardio quemagrasa</h3>
            <p className="feature-desc">cortas, potentes y diseñadas para transformar tu cuerpo desde casa.</p>
              </div>
          {/* 4 */}
          <div className="feature-card">
            <div className="feature-image-wrapper hidden md:block" style={{marginBottom: 8}}>
              <img className="feature-image" src="/comiendo.jpg" alt="Plan de alimentación" loading="lazy" style={{width: '100%', aspectRatio: '1/1', height: 'auto', objectFit: 'cover', display: 'block', borderTopLeftRadius: 12, borderTopRightRadius: 12}} />
            </div>
            <div className="icon-wrapper">
              <svg width="24" height="24" fill="none" stroke="#ea9b25" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 3h18v18H3z"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
            </div>
            <h3 className="feature-title">Plan de alimentación</h3>
            <p className="feature-desc">adaptado a tu verano, a tu ritmo, a tu vida.</p>
                </div>
          {/* 5 */}
          <div className="feature-card">
            <div className="feature-image-wrapper" style={{marginBottom: 8}}>
              <img className="feature-image" src="/Recetas reales para mujeres reales.png" alt="Recetas reales para mujeres reales" loading="lazy" style={{width: '100%', aspectRatio: '1/1', height: 'auto', objectFit: 'cover', display: 'block', borderTopLeftRadius: 12, borderTopRightRadius: 12}} />
              </div>
            <div className="icon-wrapper">
              <svg width="24" height="24" fill="none" stroke="#ea9b25" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2v20M2 12h20"/><path d="M12 2l4 4M12 2l-4 4"/></svg>
            </div>
            <h3 className="feature-title">Recetas reales para mujeres reales:</h3>
            <ul className="feature-desc">
              <li><span className="highlight">Comidas simples</span>, rápidas y saludables.</li>
              <li><span className="highlight">Postres fit</span> que no engordan (y que de verdad vas a querer comer)</li>
            </ul>
              </div>
          {/* 6 */}
          <div className="feature-card">
            <div className="feature-image-wrapper" style={{marginBottom: 8}}>
              <img className="feature-image" src="/Masterclass Descubre la comida que te inflama.jpeg" alt="Masterclass Descubre la comida que te inflama" loading="lazy" style={{width: '100%', aspectRatio: '1/1', height: 'auto', objectFit: 'cover', display: 'block', borderTopLeftRadius: 12, borderTopRightRadius: 12}} />
            </div>
            <div className="icon-wrapper">
              <svg width="24" height="24" fill="none" stroke="#ea9b25" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2v20M2 12h20"/><path d="M12 2l4 4M12 2l-4 4"/></svg>
            </div>
            <h3 className="feature-title">Masterclass "Descubre la comida que te inflama"</h3>
            <p className="feature-desc">para dejar de sentirte hinchada sin necesidad de contar calorías.</p>
          </div>
          {/* 7 */}
          <div className="feature-card">
            <div className="feature-image-wrapper hidden md:block" style={{marginBottom: 8}}>
              <img className="feature-image" src="/IMG_1457.JPG" alt="Masterclass de hábitos duraderos" loading="lazy" style={{width: '100%', aspectRatio: '1/1', height: 'auto', objectFit: 'cover', display: 'block', borderTopLeftRadius: 12, borderTopRightRadius: 12}} />
            </div>
            <div className="icon-wrapper">
              <svg width="24" height="24" fill="none" stroke="#ea9b25" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
            </div>
            <h3 className="feature-title">Masterclass de hábitos duraderos</h3>
            <p className="feature-desc">para que esta vez no empieces de cero en septiembre.</p>
          </div>
          {/* 8 */}
          <div className="feature-card">
            <div className="feature-image-wrapper" style={{marginBottom: 8}}>
              <img className="feature-image" src="/Comunidad privada de mujeres como tu.jpg" alt="Comunidad privada de mujeres como tu" loading="lazy" style={{width: '100%', aspectRatio: '1/1', height: 'auto', objectFit: 'cover', display: 'block', borderTopLeftRadius: 12, borderTopRightRadius: 12}} />
              </div>
            <div className="icon-wrapper">
              <svg width="24" height="24" fill="none" stroke="#ea9b25" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            </div>
            <h3 className="feature-title">Comunidad privada de mujeres como tú</h3>
            <p className="feature-desc">sin juicios, sin postureo, con apoyo real.</p>
          </div>
        </div>
        {/* Guarantee Card */}
        <div className="feature-card feature-card--wide guarantee mt-8" style={{
          background: 'linear-gradient(90deg, #ffeda3 0%, #ea9b25 100%)',
          border: '2px solid #ea9b25',
          boxShadow: '0 6px 32px 0 rgba(234,155,37,0.25)',
          color: '#fff',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <h3 className="feature-title" style={{
            color: '#ea9b25',
            borderBottom: '3px solid #ea9b25',
            background: 'rgba(255,255,255,0.85)',
            display: 'inline-block',
            padding: '0 1rem',
            borderRadius: 6,
            marginBottom: 12,
            fontWeight: 800,
            fontSize: '1.4rem',
            letterSpacing: 1,
            boxShadow: '0 2px 8px 0 rgba(234,155,37,0.10)'
          }}>
            GARANTÍA TOTAL
          </h3>
          <p className="feature-desc" style={{
            color: '#fff',
            fontWeight: 600,
            fontSize: '1.1rem',
            textShadow: '0 2px 8px rgba(234,155,37,0.15)',
            marginTop: 8
          }}>
            Tienes 7 días de prueba. Si no conectas, te devolvemos el dinero sin hacer preguntas. Así de simple.
          </p>
        </div>
        <p style={{
          color: '#6b7280',
          fontWeight: 400,
          fontSize: '0.75rem',
          marginTop: 4,
          textAlign: 'center'
        }}>
          Solamente aplica antes de recibir la dieta
        </p>
        {/* Desktop/Mobile CTA at bottom */}
        <div className="text-center pt-8" style={{ marginBottom: '2rem' }}>
          <button
            onClick={() => window.open('https://form.typeform.com/to/Jpe1p1jk', '_blank')}
            className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-brand-500 to-brand-600 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden group"
            style={{
              boxShadow: '0 0 20px rgba(234, 155, 37, 0.6), 0 0 40px rgba(234, 155, 37, 0.4), 0 0 60px rgba(234, 155, 37, 0.2)'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-brand-300/20 via-brand-200/30 to-brand-300/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"></div>
            <svg className="w-6 h-6 mr-3 relative z-10" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
              <path d="M12.05 21.785h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c0-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884"/>
              <path d="M20.463 3.488A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488"/>
            </svg>
            <span className="relative z-10">QUIERO HACER DE ESTE VERANO MI VERANO</span>
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
    </section>
  );
};

export default Benefits;