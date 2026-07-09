import React from 'react';
import { motion } from 'framer-motion';

const Process = () => {
  const steps = [
    { num: '01', title: 'Diagnóstico', desc: 'Identificamos os gargalos e as oportunidades de escala no seu negócio, focando no retorno financeiro.' },
    { num: '02', title: 'Planejamento', desc: 'Desenhamos a arquitetura do sistema e os processos exatos que serão automatizados.' },
    { num: '03', title: 'Design & Código', desc: 'Criamos interfaces exclusivas (zero templates) e código seguro e escalável.' },
    { num: '04', title: 'Entrega', desc: 'Implementação rigorosamente no prazo, com validação de performance e usabilidade.' }
  ];

  return (
    <section id="process" style={{ padding: '80px 24px', borderTop: '1px solid var(--glass-border)' }}>
      <h2 className="section-title">Nossa Metodologia</h2>
      <p className="section-subtitle">Um processo de engenharia validado para garantir que você receba uma solução de alto nível, no prazo combinado.</p>
      
      <motion.div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '24px',
        marginTop: '64px'
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
        hidden: { opacity: 0 }
      }}
      >
        {steps.map((step, idx) => (
          <motion.div key={idx} className="premium-card" style={{ position: 'relative', overflow: 'hidden' }}
          variants={{
            visible: { opacity: 1, y: 0, scale: 1 },
            hidden: { opacity: 0, y: 50, scale: 0.95 }
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(16, 185, 129, 0.15)" }}
          >
            <span style={{
              position: 'absolute',
              top: '-10px',
              right: '-10px',
              fontSize: '6rem',
              fontWeight: '800',
              fontFamily: 'var(--font-display)',
              color: 'var(--glass-border)',
              zIndex: 0,
              lineHeight: 1
            }}>
              {step.num}
            </span>
            <div style={{ position: 'relative', zIndex: 1 }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: 'var(--emerald)' }}>{step.title}</h3>
              <p style={{ color: 'var(--muted-gray)' }}>{step.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Process;
