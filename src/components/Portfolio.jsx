import React from 'react';

const Portfolio = () => {
  const projects = [
    {
      title: "Fadetime",
      desc: "Plataforma de gestão para barbearias, focada em recorrência e automação de agendamentos.",
      link: "#", // Mantido sem link no prompt
      tag: "SaaS / CRM"
    },
    {
      title: "Zelare",
      desc: "Sistema inteligente para gestão de prestadores de serviços.",
      link: "https://zelare.vercel.app/",
      tag: "Site Institucional"
    },
    {
      title: "EventWall",
      desc: "Plataforma de interação para eventos com mural de memórias (MemoryWall) em tempo real.",
      link: "https://wallmemory.vercel.app/",
      tag: "MicroSaaS"
    }
  ];

  return (
    <section id="portfolio" style={{ padding: '100px 24px', borderTop: '1px solid var(--glass-border)' }}>
      <h2 className="section-title">Casos de Sucesso</h2>
      <p className="section-subtitle">Conheça algumas das soluções construídas pela NexaSync para impulsionar o mercado.</p>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '40px'
      }}>
        {projects.map((proj, idx) => (
          <div key={idx} className="premium-card" style={{ display: 'flex', flexDirection: 'column', gap: '16px', borderLeft: '4px solid var(--emerald)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px' }}>
              <div>
                <span style={{ 
                  background: 'rgba(16, 185, 129, 0.1)', 
                  color: 'var(--emerald)', 
                  padding: '4px 12px', 
                  borderRadius: '16px',
                  fontSize: '0.8rem',
                  fontWeight: '600',
                  letterSpacing: '0.5px',
                  textTransform: 'uppercase'
                }}>{proj.tag}</span>
                <h3 style={{ fontSize: '2rem', marginTop: '16px', marginBottom: '8px' }}>{proj.title}</h3>
                <p style={{ color: 'var(--muted-gray)', maxWidth: '600px' }}>{proj.desc}</p>
              </div>
              
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
