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
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="32" height="32" rx="6" fill="var(--obsidian)" stroke="var(--emerald)" strokeWidth="2"/>
          <path d="M10 22L10 10L20 22L20 10" stroke="var(--emerald)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span style={{ 
          fontFamily: 'var(--font-display)', 
          fontSize: '1.5rem', 
          fontWeight: '700',
          letterSpacing: '-0.5px'
        }}>
          Nexa<span style={{ color: 'var(--emerald)' }}>Sync</span>
        </span>
      </div>

      <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
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
