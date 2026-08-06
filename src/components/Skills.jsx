import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, Award, CheckCircle, Code, ShieldCheck } from 'lucide-react';
import { skillsData } from '../data/portfolioData';
import SandTitle from './SandTitle';

const Skills = () => {
  return (
    <section id="habilidades" className="py-24 bg-egypt-darkSlate/60 relative overflow-hidden border-t border-gold-700/20">
      
      {/* Luzes de fundo */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-600/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho Limpo & Leve */}
        <SandTitle
          badge="Domínio Técnico & Soft Skills"
          badgeIcon={Wrench}
        >
          Habilidades & <span className="text-gold-glow">Competências</span>
        </SandTitle>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 overflow-hidden">
          
          {/* Hard Skills (Vem da Esquerda para o Centro) */}
          <motion.div
            initial={{ opacity: 0, x: -90 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
            className="lg:col-span-7 bg-egypt-card p-6 sm:p-8 rounded-2xl border border-gold-600/30 shadow-egypt-card space-y-6"
          >
            <h3 className="text-xl sm:text-2xl font-bold font-cinzel text-white flex items-center gap-3">
              <Code className="w-6 h-6 text-gold-400" />
              <span>Hard Skills • Engenharia de Software & BIM</span>
            </h3>

            <div className="space-y-5">
              {skillsData.hardSkills.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center text-xs sm:text-sm font-medium">
                    <span className="text-egypt-sand/90 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-400"></span>
                      {skill.name}
                    </span>
                    <span className="text-gold-400 font-cinzel font-bold">{skill.level}%</span>
                  </div>
                  {/* Barra de Progresso Dourada */}
                  <div className="w-full h-2.5 bg-egypt-darkSlate rounded-full overflow-hidden border border-gold-600/20 p-0.5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="h-full bg-gold-gradient rounded-full shadow-gold-glow"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills (Vem da Direita para o Centro) */}
          <motion.div
            initial={{ opacity: 0, x: 90 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1], delay: 0.15 }}
            className="lg:col-span-5 bg-egypt-card p-6 sm:p-8 rounded-2xl border border-gold-600/30 shadow-egypt-card flex flex-col justify-between space-y-6"
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-bold font-cinzel text-white flex items-center gap-3 mb-6">
                <ShieldCheck className="w-6 h-6 text-gold-400" />
                <span>Soft Skills & Diferenciais</span>
              </h3>

              <div className="space-y-4">
                {skillsData.softSkills.map((skill) => (
                  <div key={skill.name} className="bg-egypt-darkSlate/80 p-4 rounded-xl border border-gold-600/20 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-gold-500/10 text-gold-400">
                        <CheckCircle className="w-4 h-4" />
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-egypt-sand/90">
                        {skill.name}
                      </span>
                    </div>
                    <span className="text-xs font-bold text-gold-300 font-cinzel px-2.5 py-1 rounded bg-gold-500/10 border border-gold-500/30">
                      {skill.level}%
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Selo de Garantia Profissional */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-gold-900/30 to-egypt-darkSlate border border-gold-500/30 flex items-center gap-3">
              <Award className="w-8 h-8 text-gold-400 shrink-0" />
              <div>
                <p className="text-xs font-bold text-white font-cinzel">Rigor em Cada Projeto</p>
                <p className="text-[11px] text-egypt-sand/80">Compromisso com arquitetura de software limpa, segurança e prazos.</p>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
