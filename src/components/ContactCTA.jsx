import React from 'react';

const ContactCTA = () => {
  return (
    <section id="contact" style={{ 
      padding: '120px 24px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center'
    }}>
      <div style={{
        background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, transparent 100%)',
        border: '1px solid var(--glass-border)',
        padding: '60px 40px',
        borderRadius: '16px',
        maxWidth: '800px',
        width: '100%',
        boxShadow: '0 20px 40px -20px rgba(16, 185, 129, 0.1)'
      }}>
        <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '16px' }}>
          Pronto para <span className="text-emerald">Escalar</span>?
        </h2>
        <p style={{ color: 'var(--muted-gray)', fontSize: '1.2rem', marginBottom: '40px' }}>
          Pare de perder tempo com processos manuais e sites que não vendem. Fale com nossos especialistas e descubra a solução ideal para o seu negócio.
        </p>
        <a href="https://wa.me/5548999324253" target="_blank" rel="noreferrer" className="btn-primary" style={{ padding: '16px 40px', fontSize: '1.2rem' }}>
          Falar com um Especialista Agora
        </a>
      </div>

      <footer style={{ marginTop: '80px', color: 'var(--muted-gray)', fontSize: '0.9rem', width: '100%', display: 'flex', justifyContent: 'space-between', borderTop: '1px solid var(--glass-border)', paddingTop: '24px' }}>
        <p>&copy; {new Date().getFullYear()} NexaSync. Todos os direitos reservados.</p>
        <div style={{ display: 'flex', gap: '24px' }}>
          <a href="#" style={{ hover: { color: 'var(--emerald)' }}}>Instagram</a>
          <a href="#" style={{ hover: { color: 'var(--emerald)' }}}>LinkedIn</a>
        </div>
      </footer>
    </section>
  );
};

export default ContactCTA;
