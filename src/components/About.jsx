import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, ShieldCheck, Cpu, GraduationCap, Compass } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import SandTitle from './SandTitle';

const About = () => {
  const milestones = [
    {
      year: "Anos 90",
      title: "Primeiros Passos na TI",
      icon: Cpu,
      description: "Desvendando segredos de formatação de computadores e explorando linguagens fundamentais como HTML, JavaScript, CSS e PHP nos primórdios da web."
    },
    {
      year: "2013 - 2024",
      title: "11 Anos em Projetos Estruturais (BIM)",
      icon: Compass,
      description: "Carreira sólida na construção civil como desenhista e projetista técnico. Domínio da metodologia BIM, modelagem 3D e rigor analítico de estruturas."
    },
    {
      year: "Atualidade",
      title: "Graduação em Engenharia de Software",
      icon: GraduationCap,
      description: "Aos 47 anos e a apenas 2 semestres de concluir a Engenharia de Software, unindo vasta maturidade profissional com o que há de mais moderno na TI."
    }
  ];

  return (
    <section id="sobre" className="py-24 bg-egypt-darkSlate/60 relative overflow-hidden border-t border-gold-700/20">
      
      {/* Luz e textura egípcia */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-600/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho de Seção */}
        <SandTitle
          badge="Trajetória & Filosofia"
          badgeIcon={UserCheck}
        >
          Sobre <span className="text-gold-glow">Marcelo Olimpio</span>
        </SandTitle>

        {/* Conteúdo Principal: Biografia (Esquerda) + Timeline (Direita) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start overflow-hidden">
          
          {/* Coluna Esquerda: Biografia (Vem da Esquerda para o Centro) */}
          <motion.div 
            initial={{ opacity: 0, x: -90 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
            className="lg:col-span-6 bg-egypt-card p-6 sm:p-8 rounded-2xl border border-gold-600/30 shadow-egypt-card space-y-5"
          >
            <h3 className="text-xl sm:text-2xl font-bold font-cinzel text-gold-300 flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-gold-400" />
              <span>Resiliência, Adaptabilidade & Proatividade</span>
            </h3>

            {personalInfo.fullBio.map((paragraph, index) => (
              <p key={index} className="text-egypt-sand/90 leading-relaxed text-sm sm:text-base">
                {paragraph}
              </p>
            ))}

            {/* Destaque das Soft Skills */}
            <div className="pt-4 border-t border-gold-700/20">
              <h4 className="text-xs uppercase tracking-widest text-gold-400 font-semibold mb-3">
                Soft Skills Diferenciais:
              </h4>
              <div className="flex flex-wrap gap-2">
                {["Liderança Comprovada", "Visão Estrutural", "Resolução de Problemas", "Comunicação Técnica", "Adaptabilidade"].map((skill) => (
                  <span key={skill} className="px-3 py-1 text-xs rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-300">
                    ✨ {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Coluna Direita: Timeline (Vem da Direita para o Centro) */}
          <motion.div 
            initial={{ opacity: 0, x: 90 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1], delay: 0.15 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="bg-egypt-card p-6 sm:p-8 rounded-2xl border border-gold-600/30 shadow-egypt-card">
              <h3 className="text-xl sm:text-2xl font-bold font-cinzel text-white mb-6">
                Marcos da Minha Jornada
              </h3>

              <div className="relative border-l-2 border-gold-500/30 pl-6 space-y-8 ml-3">
                {milestones.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="relative group">
                      {/* Marcador Dourado na Linha do Tempo */}
                      <div className="absolute -left-[35px] top-0 w-8 h-8 rounded-full bg-egypt-card border-2 border-gold-400 flex items-center justify-center text-gold-400 group-hover:bg-gold-500 group-hover:text-egypt-bg transition-colors duration-300 shadow-gold-glow">
                        <Icon className="w-4 h-4" />
                      </div>

                      <div className="bg-egypt-darkSlate/60 p-4 rounded-xl border border-gold-600/20 group-hover:border-gold-500/40 transition-all duration-300">
                        <span className="inline-block text-xs font-semibold px-2.5 py-0.5 rounded bg-gold-500/20 text-gold-300 mb-1">
                          {item.year}
                        </span>
                        <h4 className="text-base sm:text-lg font-bold font-cinzel text-white">
                          {item.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-egypt-sand/80 mt-1">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
