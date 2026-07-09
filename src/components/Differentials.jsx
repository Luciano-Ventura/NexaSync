import React from 'react';
import { IconZap, IconCode, IconBarChart, IconMessage, IconDollar } from './Icons';
import './Differentials.css';

const diffs = [
  { text: 'Foco em resultado e não só design', icon: <IconBarChart size={24} color="var(--neon-blue)" /> },
  { text: 'Desenvolvimento rápido e escalável', icon: <IconZap size={24} color="var(--neon-purple)" /> },
  { text: 'Experiência estrutural com SaaS real', icon: <IconCode size={24} color="var(--neon-violet)" /> },
  { text: 'Comunicação direta e sem enrolação', icon: <IconMessage size={24} color="#00f0ff" /> },
  { text: 'Soluções pensadas para gerar lucro', icon: <IconDollar size={24} color="#bb86fc" /> }
];

const Differentials = () => {
  return (
    <section className="differentials-section">
      <h2 className="section-title">Por Que a NexaSync?</h2>
      <div className="differentials-grid">
        {diffs.map((d, i) => (
          <div key={i} className="differential-item glass-panel">
            <div className="diff-icon">{d.icon}</div>
            <p>{d.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Differentials;
