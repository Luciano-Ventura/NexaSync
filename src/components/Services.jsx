import React from 'react';

const Services = () => {
  const services = [
    {
      title: "Landing Pages & Sites",
      desc: "Presença digital de alto impacto focada exclusivamente em gerar leads e fechar vendas de forma acelerada.",
      features: ["Alta Conversão", "SEO Técnico", "Carregamento Instantâneo"]
    },
    {
      title: "CRM Personalizado",
      desc: "Uma ferramenta de gestão construída do zero para a sua operação, eliminando planilhas e processos manuais.",
      features: ["Sem mensalidade por usuário", "Processos sob medida", "Controle total"]
    },
    {
      title: "Automações com IA (n8n)",
      desc: "Integramos suas ferramentas (WhatsApp, CRMs, APIs) para trabalharem sozinhas, reduzindo custo operacional.",
      features: ["Fluxos n8n", "Integração OpenAI/Claude", "Atendimento automatizado"]
    },
    {
      title: "MicroSaaS",
      desc: "Criamos produtos digitais escaláveis para você gerar receita recorrente sem se preocupar com infraestrutura.",
      features: ["Sistemas Web", "Arquitetura Escalável", "Código Limpo"]
    }
  ];

  return (
    <section id="services" style={{ padding: '100px 24px' }}>
      <h2 className="section-title">Nossas Soluções</h2>
      <p className="section-subtitle">Não vendemos tecnologia, vendemos crescimento. Nossas soluções são pensadas para resolver problemas reais de gestão e vendas.</p>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '32px'
      }}>
        {services.map((svc, idx) => (
          <div key={idx} className="premium-card">
            <h3 style={{ fontSize: '1.75rem', marginBottom: '16px' }}>{svc.title}</h3>
            <p style={{ color: 'var(--muted-gray)', marginBottom: '24px' }}>{svc.desc}</p>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {svc.features.map((feat, fidx) => (
                <li key={fidx} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--off-white)', fontSize: '0.9rem' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--emerald)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  {feat}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
