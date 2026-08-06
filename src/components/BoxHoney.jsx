import React from 'react';
import { motion } from 'framer-motion';
import { Hexagon, Code2, Layout, Building2, Layers, Cpu, CheckCircle } from 'lucide-react';
import { boxHoneyInfo } from '../data/portfolioData';
import SandTitle from './SandTitle';

const BoxHoney = () => {
  const serviceIcons = {
    sistemas: Code2,
    sites: Layout,
    bim: Building2,
  };

  return (
    <section id="boxhoney" className="py-24 bg-egypt-bg relative overflow-hidden papyrus-texture border-t border-gold-700/20">
      
      {/* Elementos decorativos hexagonais / piramidais de fundo */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 opacity-5 pointer-events-none">
        <Hexagon className="w-96 h-96 text-gold-400 stroke-1" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho da Empresa Limpo & Leve */}
        <SandTitle
          badge="Apresentação Institucional"
          badgeIcon={Hexagon}
          subtitle={`"${boxHoneyInfo.slogan}"`}
        >
          Empresa <span className="text-gold-glow">BoxHoney</span>
        </SandTitle>

        {/* Banner de Quem Somos & História (Desliza para o centro) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.92, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
          className="bg-egypt-card p-8 sm:p-10 rounded-2xl border border-gold-500/40 shadow-egypt-card mb-16 relative overflow-hidden"
        >
          {/* Efeito de brilho de fundo no card */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-gold-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Quem Somos (Vem da Esquerda) */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-8 space-y-4"
            >
              <h3 className="text-2xl sm:text-3xl font-bold font-cinzel text-white flex items-center gap-3">
                <Layers className="w-7 h-7 text-gold-400" />
                <span>Quem Somos & Nossa História</span>
              </h3>
              <p className="text-egypt-sand/90 text-base sm:text-lg leading-relaxed">
                {boxHoneyInfo.about}
              </p>
              <p className="text-egypt-sand/80 text-sm sm:text-base leading-relaxed">
                {boxHoneyInfo.history}
              </p>
            </motion.div>

            {/* Quadro de Destaque (Vem da Direita) */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-4 bg-egypt-darkSlate/90 p-6 rounded-xl border border-gold-500/40 shadow-inner space-y-3"
            >
              <div className="flex items-center gap-2 text-gold-400 font-cinzel font-bold text-lg">
                <Cpu className="w-5 h-5" />
                <span>Diferencial Estrutural</span>
              </div>
              <p className="text-xs sm:text-sm text-egypt-sand/90 leading-relaxed italic">
                "{boxHoneyInfo.differential}"
              </p>
              <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-gold-300">
                <CheckCircle className="w-4 h-4 text-gold-400" />
                <span>Rigor BIM + Código Escalável</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Grade de Serviços Oferecidos */}
        <div className="mb-8 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold font-cinzel text-white">
            Nossos <span className="text-gold-glow">Serviços</span>
          </h3>
          <p className="text-sm text-egypt-sand/80 mt-1">
            Soluções híbridas combinando Engenharia de Software e Modelagem BIM
          </p>
        </div>

        {/* Cards de Serviços Deslizando Alternadamente das Laterais para o Centro */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 overflow-hidden">
          {boxHoneyInfo.services.map((service, index) => {
            const Icon = serviceIcons[service.id] || Code2;
            const xOffset = index === 0 ? -80 : index === 2 ? 80 : 0;
            const yOffset = index === 1 ? 50 : 0;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, x: xOffset, y: yOffset }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: [0.25, 1, 0.5, 1] }}
                className="bg-egypt-card p-6 sm:p-8 rounded-2xl border border-gold-600/30 hover:border-gold-400 hover:shadow-gold-glow transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Ícone com Brilho Egípcio */}
                  <div className="w-14 h-14 rounded-xl bg-egypt-darkSlate border border-gold-500/40 flex items-center justify-center text-gold-400 group-hover:scale-110 group-hover:bg-gold-500 group-hover:text-egypt-bg transition-all duration-300 shadow-gold-glow/30 mb-6">
                    <Icon className="w-7 h-7" />
                  </div>

                  <h4 className="text-xl font-bold font-cinzel text-white mb-3 group-hover:text-gold-300 transition-colors">
                    {service.title}
                  </h4>

                  <p className="text-sm text-egypt-sand/80 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Tags de Tecnologias / Competências */}
                <div className="pt-4 border-t border-gold-700/20 flex flex-wrap gap-1.5">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-[11px] font-medium rounded-md bg-gold-500/10 text-gold-300 border border-gold-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default BoxHoney;
