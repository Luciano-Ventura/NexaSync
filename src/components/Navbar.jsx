import React from 'react';

const Navbar = () => {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '24px 40px',
      borderBottom: '1px solid var(--glass-border)',
      background: 'rgba(10, 10, 10, 0.8)',
      backdropFilter: 'blur(12px)',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      {/* Logo NexaSync */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Abstract Nexus/Sync loop */}
          <path d="M9 20C5.68629 20 3 17.3137 3 14C3 10.6863 5.68629 8 9 8C12.3137 8 15 11 16 13C17 15 19.6863 20 23 20C26.3137 20 29 17.3137 29 14C29 10.6863 26.3137 8 23 8" stroke="var(--emerald)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="23" cy="8" r="2.5" fill="var(--off-white)"/>
        </svg>
        <span style={{ 
          fontFamily: 'var(--font-display)', 
          fontSize: '1.6rem', 
          fontWeight: '700',
          letterSpacing: '-0.5px'
        }}>
          Nexa<span style={{ color: 'var(--emerald)' }}>Sync</span>
        </span>
      </div>

      <div className="hide-on-mobile" style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
        <a href="#services" style={{ fontWeight: '500' }}>Soluções</a>
        <a href="#portfolio" style={{ fontWeight: '500' }}>Casos de Sucesso</a>
        <a href="#process" style={{ fontWeight: '500' }}>Metodologia</a>
        <a href="#contact" className="btn-primary" style={{ padding: '8px 24px', fontSize: '0.95rem' }}>
          Agendar Diagnóstico
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
