import React from 'react';

const Hero = () => {
  return (
    <section style={{
      minHeight: '80vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
      position: 'relative'
    }}>
      <div className="hero-container" style={{
        maxWidth: '800px',
        borderLeft: '4px solid var(--emerald)',
        paddingLeft: '32px',
        marginLeft: '-36px', // offset the border visually
        position: 'relative',
        zIndex: 2
      }}>
        <h1 className="section-title" style={{ marginBottom: '24px' }}>
          Sistemas e Automações que <span className="text-emerald">Multiplicam</span> seu Resultado
        </h1>
        <p className="section-subtitle" style={{ fontSize: '1.35rem', color: 'var(--off-white)', opacity: 0.9 }}>
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
      
      {/* Visual representation on the right side */}
      <div className="hide-on-mobile" style={{
        position: 'absolute',
        right: '5%',
        top: '50%',
        transform: 'translateY(-50%)',
        width: '40%',
        maxWidth: '500px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        zIndex: -1,
        opacity: 0.8
      }}>
        <div style={{
          background: 'linear-gradient(145deg, var(--glass-bg) 0%, rgba(15, 17, 21, 0.8) 100%)',
          border: '1px solid var(--glass-border)',
          borderRadius: '12px',
          padding: '24px',
          boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
          transform: 'rotate(-2deg)',
        }}>
          <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ef4444' }}></div>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#eab308' }}></div>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--emerald)' }}></div>
          </div>
          <div style={{ width: '100%', height: '8px', background: 'var(--glass-border)', borderRadius: '4px', marginBottom: '12px' }}></div>
          <div style={{ width: '70%', height: '8px', background: 'var(--glass-border)', borderRadius: '4px', marginBottom: '24px' }}></div>
          
          <div style={{ display: 'flex', gap: '12px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'rgba(16, 185, 129, 0.2)', border: '1px solid rgba(16, 185, 129, 0.5)' }}></div>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px', justifyContent: 'center' }}>
              <div style={{ width: '80%', height: '6px', background: 'var(--glass-border)', borderRadius: '3px' }}></div>
              <div style={{ width: '50%', height: '6px', background: 'var(--glass-border)', borderRadius: '3px' }}></div>
            </div>
          </div>
        </div>
        
        <div style={{
          background: 'linear-gradient(145deg, var(--glass-bg) 0%, rgba(15, 17, 21, 0.8) 100%)',
          border: '1px solid var(--emerald)',
          borderRadius: '12px',
          padding: '16px',
          width: '70%',
          alignSelf: 'flex-end',
          boxShadow: '0 10px 30px rgba(16, 185, 129, 0.1)',
          transform: 'rotate(2deg) translateY(-10px)',
          display: 'flex',
          alignItems: 'center',
          gap: '12px'
        }}>
          <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--emerald)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0f1115" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div>
            <div style={{ fontSize: '0.9rem', color: 'var(--off-white)', fontWeight: '600' }}>Automação Concluída</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--emerald)' }}>+ R$ 2.450,00 gerados</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
