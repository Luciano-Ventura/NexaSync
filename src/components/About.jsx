import React from 'react';
import { IconTarget, IconTrendingUp } from './Icons';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container glass-panel">
        <div className="about-content">
          <h2 className="section-title text-left">Quem Somos</h2>
          <p className="about-body">
            Na NexaSync, não escrevemos apenas linhas de código. Nós construímos motores reais de aquisição e eficiência.
            Nossa visão de desenvolvimento é 100% atrelada à mentalidade de negócio.
          </p>
          <div className="highlight-box">
            <h3 className="highlight-text text-gradient">"Mais do que código, entregamos soluções que aumentam faturamento"</h3>
          </div>

          <div className="about-features">
            <div className="feature-item">
              <div className="feature-icon"><IconTarget size={24} color="var(--neon-blue)" /></div>
              <div>
                <h4>Foco em Resultados</h4>
                <p>Nossas entregas são medidas pelo impacto que geram na sua operação e caixa.</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon"><IconTrendingUp size={24} color="var(--neon-purple)" /></div>
              <div>
                <h4>Escalabilidade</h4>
                <p>Arquitetura pensada para que seu negócio suporte o crescimento com segurança.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="about-visual">
          <div className="stats-box glass-panel">
            <span className="stat-number text-gradient">+ ROI</span>
            <span className="stat-label">Desenvolvimento voltado <br/>para retorno financeiro</span>
          </div>
          <div className="stats-box glass-panel">
            <span className="stat-number text-gradient">Fast</span>
            <span className="stat-label">Entrega de MVPs <br/>para validação rápida</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
