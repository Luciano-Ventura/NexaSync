import React from 'react';
import './Hero.css'; // Mantenha se houver

const Hero = () => {
  return (
    <section id="home" className="hero-section" style={{ 
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '40px',
      position: 'relative',
      paddingTop: '80px', // Compensar a navbar
      overflow: 'hidden' // Evitar barra de rolagem por causa das rotações
    }}>
      {/* Conteúdo de Texto */}
      <div className="hero-content" style={{
        flex: '1.2',
        maxWidth: '700px',
        borderLeft: '4px solid var(--emerald)',
        paddingLeft: '32px',
        position: 'relative',
        zIndex: 2
      }}>
        <h1 className="section-title" style={{ marginBottom: '24px' }}>
          Sistemas e Automações que <span className="text-emerald">Multiplicam</span> seu Resultado
        </h1>
        <p className="section-subtitle" style={{ fontSize: '1.25rem', color: 'var(--off-white)', opacity: 0.9 }}>
          A NexaSync transforma operações estagnadas em negócios previsíveis e escaláveis. 
          Sem templates. Sem jargão técnico. Entregamos a máquina de vendas e gestão que sua empresa precisa.
        </p>
        <div className="hero-buttons" style={{ display: 'flex', gap: '16px', marginTop: '40px' }}>
          <a href="#contact" className="btn-primary">
            Agendar Diagnóstico Gratuito
          </a>
          <a href="#portfolio" className="btn-secondary">
            Ver Casos de Sucesso
          </a>
        </div>
      </div>
      
      {/* Representação Visual - Dashboard Mockup */}
      <div className="hero-visual hide-on-mobile" style={{
        flex: '0.8',
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        position: 'relative',
        zIndex: 1,
        maxWidth: '450px',
        perspective: '1000px'
      }}>
        {/* Mockup Principal */}
        <div className="premium-card" style={{
          padding: '24px',
          transform: 'rotateY(-15deg) rotateX(5deg)',
          transformStyle: 'preserve-3d',
          boxShadow: '-20px 20px 40px rgba(0,0,0,0.4)',
          border: '1px solid rgba(16, 185, 129, 0.2)'
        }}>
          <div style={{ display: 'flex', gap: '8px', marginBottom: '24px' }}>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ef4444' }}></div>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#eab308' }}></div>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--emerald)' }}></div>
          </div>
          <div style={{ width: '100%', height: '8px', background: 'var(--glass-border)', borderRadius: '4px', marginBottom: '16px' }}></div>
          <div style={{ width: '60%', height: '8px', background: 'var(--glass-border)', borderRadius: '4px', marginBottom: '32px' }}></div>
          
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '8px', background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)' }}></div>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ width: '90%', height: '6px', background: 'var(--glass-border)', borderRadius: '3px' }}></div>
              <div style={{ width: '40%', height: '6px', background: 'var(--glass-border)', borderRadius: '3px' }}></div>
            </div>
          </div>
        </div>
        
        {/* Mockup Secundário (Alerta de Sucesso) */}
        <div style={{
          background: 'linear-gradient(145deg, var(--deep-gray) 0%, var(--obsidian) 100%)',
          border: '1px solid var(--emerald)',
          borderRadius: '12px',
          padding: '20px',
          width: '85%',
          alignSelf: 'flex-end',
          boxShadow: '0 15px 35px rgba(16, 185, 129, 0.15)',
          transform: 'translateZ(30px) translateY(-20px)',
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          backdropFilter: 'blur(12px)'
        }}>
          <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--emerald)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0f1115" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div>
            <div style={{ fontSize: '1.05rem', color: 'var(--off-white)', fontWeight: '600', marginBottom: '4px' }}>Automação Concluída</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--emerald)', fontWeight: '500' }}>+ R$ 2.450,00 gerados</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
