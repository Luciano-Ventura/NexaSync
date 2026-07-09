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
      <div style={{
        maxWidth: '800px',
        borderLeft: '4px solid var(--emerald)',
        paddingLeft: '32px',
        marginLeft: '-36px' // offset the border visually
      }}>
        <h1 className="section-title" style={{ fontSize: '4.5rem', marginBottom: '24px' }}>
          Sistemas e Automações que <span className="text-emerald">Multiplicam</span> seu Resultado
        </h1>
        <p className="section-subtitle" style={{ fontSize: '1.35rem', color: 'var(--off-white)', opacity: 0.9 }}>
          A NexaSync transforma operações estagnadas em negócios previsíveis e escaláveis. 
          Sem templates. Sem jargão técnico. Entregamos a máquina de vendas e gestão que sua empresa precisa.
        </p>
        <div style={{ display: 'flex', gap: '16px', marginTop: '40px' }}>
          <a href="#contact" className="btn-primary">
            Agendar Diagnóstico Gratuito
          </a>
          <a href="#portfolio" className="btn-secondary">
            Ver Casos de Sucesso
          </a>
        </div>
      </div>
      
      {/* Decorative Asymmetric Element */}
      <div style={{
        position: 'absolute',
        right: '0',
        top: '50%',
        transform: 'translateY(-50%)',
        width: '400px',
        height: '400px',
        border: '1px solid var(--glass-border)',
        borderRight: 'none',
        borderBottom: 'none',
        background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.05) 0%, transparent 100%)',
        zIndex: -1,
        borderRadius: '8px 0 0 0'
      }}></div>
    </section>
  );
};

export default Hero;
