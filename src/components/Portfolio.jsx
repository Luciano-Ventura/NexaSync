import React from 'react';

const Portfolio = () => {
  const projects = [
    {
      title: "Lumière Clínica",
      desc: "Landing Page de altíssima conversão para clínica de estética de alto padrão, focada em agendamentos via WhatsApp.",
      link: "https://lp-lumiere-clinic.vercel.app",
      tag: "Landing Page",
      image: "/images/proj_lumiere.png"
    },
    {
      title: "Fadetime",
      desc: "Plataforma de gestão para barbearias, focada em recorrência e automação de agendamentos.",
      link: "https://fadetime.vercel.app/",
      tag: "SaaS / CRM",
      image: "/images/proj_fadetime.png"
    },
    {
      title: "Zelare",
      desc: "Sistema inteligente para gestão de prestadores de serviços.",
      link: "https://zelare.vercel.app/",
      tag: "Site Institucional",
      image: "/images/proj_zelare.png"
    },
    {
      title: "EventWall",
      desc: "Plataforma de interação para eventos com mural de memórias (MemoryWall) em tempo real.",
      link: "https://wallmemory.vercel.app/",
      tag: "MicroSaaS",
      image: "/images/proj_eventwall.png"
    }
  ];

  return (
    <section id="portfolio" style={{ padding: '100px 24px', borderTop: '1px solid var(--glass-border)' }}>
      <h2 className="section-title">Casos de Sucesso</h2>
      <p className="section-subtitle">Conheça algumas das soluções construídas pela NexaSync para impulsionar o mercado.</p>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '80px',
        marginTop: '60px'
      }}>
        {projects.map((proj, idx) => (
          <div key={idx} className="premium-card flex-col-mobile" style={{ 
            display: 'flex', 
            flexDirection: idx % 2 !== 0 ? 'row-reverse' : 'row',
            alignItems: 'center', 
            gap: '40px', 
            padding: '40px',
            borderLeft: idx % 2 === 0 ? '4px solid var(--emerald)' : 'none',
            borderRight: idx % 2 !== 0 ? '4px solid var(--emerald)' : 'none'
          }}>
            
            {/* Image Side */}
            <div style={{ flex: '1', width: '100%' }}>
              <div style={{ 
                borderRadius: '8px', 
                overflow: 'hidden', 
                boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                border: '1px solid var(--glass-border)'
              }}>
                <img 
                  src={proj.image} 
                  alt={`Screenshot do projeto ${proj.title}`} 
                  style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
                />
              </div>
            </div>

            {/* Text Side */}
            <div style={{ flex: '1', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <span style={{ 
                background: 'rgba(16, 185, 129, 0.1)', 
                color: 'var(--emerald)', 
                padding: '4px 12px', 
                borderRadius: '16px',
                fontSize: '0.85rem',
                fontWeight: '600',
                letterSpacing: '0.5px',
                textTransform: 'uppercase'
              }}>{proj.tag}</span>
              
              <h3 style={{ fontSize: '2.5rem', marginTop: '16px', marginBottom: '16px' }}>{proj.title}</h3>
              <p style={{ color: 'var(--muted-gray)', fontSize: '1.1rem', marginBottom: '32px', lineHeight: '1.7' }}>{proj.desc}</p>
              
              <a href={proj.link} target={proj.link !== '#' ? '_blank' : '_self'} rel="noreferrer" className="btn-secondary">
                Ver Projeto
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </a>
            </div>
            
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
