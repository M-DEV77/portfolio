import React from 'react';
import { motion } from 'framer-motion';
import { Award, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden papyrus-texture">
      
      {/* Imagem de Fundo Sutil das Pirâmides do Egito */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none flex justify-center opacity-20 z-0">
        <img
          src="/img/piramides.png"
          alt="Pirâmides do Egito"
          className="w-full max-w-6xl h-auto max-h-[450px] object-contain object-bottom filter brightness-110 contrast-110 sepia-[0.25]"
        />
      </div>

      {/* Luzes de fundo e elementos sutis */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-gold-700/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Coluna Esquerda: Texto de Apresentação */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col space-y-6 text-center lg:text-left"
          >
            {/* Tag Badges */}
            <div className="inline-flex items-center gap-2 self-center lg:self-start px-3.5 py-1.5 rounded-full bg-egypt-card border border-gold-500/30 text-xs font-semibold uppercase tracking-wider text-gold-400 shadow-gold-glow/20">
              <Sparkles className="w-4 h-4 text-gold-300 animate-pulse" />
              <span>Engenharia de Software & BIM • BoxHoney</span>
            </div>

            {/* Nome com destaque egípcio nas iniciais */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-cinzel tracking-tight text-white leading-tight">
              <span className="text-gold-glow text-5xl sm:text-7xl lg:text-8xl inline-block drop-shadow-[0_4px_12px_rgba(213,152,56,0.4)]">M</span>arcelo{' '}
              <span className="text-gold-glow text-5xl sm:text-7xl lg:text-8xl inline-block drop-shadow-[0_4px_12px_rgba(213,152,56,0.4)]">O</span>limpio
            </h1>

            {/* Subtítulo / Especialidade */}
            <p className="text-xl sm:text-2xl text-gold-300 font-cinzel font-medium">
              Desenvolvedor Full Stack & Projetista de Estruturas
            </p>

            {/* Descrição resumida baseada no README */}
            <p className="text-base sm:text-lg text-egypt-sand/90 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Transformando a precisão da <strong className="text-white">Engenharia Estrutural (BIM)</strong> e 11+ anos de rigor técnico na robustez da <strong className="text-white">Engenharia de Software</strong>. Uma trajetória iniciada nos anos 90, lapidada com proatividade, liderança e adaptabilidade.
            </p>

            {/* Cards de Estatísticas em Destaque */}
            <div className="grid grid-cols-3 gap-3 py-2 max-w-lg mx-auto lg:mx-0">
              <div className="p-3 rounded-lg bg-egypt-card/80 border border-gold-600/30 text-center">
                <span className="block text-xl sm:text-2xl font-bold font-cinzel text-gold-400">11+</span>
                <span className="text-[11px] text-egypt-sand/80 uppercase tracking-wider">Anos Projetista BIM</span>
              </div>
              <div className="p-3 rounded-lg bg-egypt-card/80 border border-gold-600/30 text-center">
                <span className="block text-xl sm:text-2xl font-bold font-cinzel text-gold-400">Penúltimo</span>
                <span className="text-[11px] text-egypt-sand/80 uppercase tracking-wider">Semestre Eng. Software</span>
              </div>
              <div className="p-3 rounded-lg bg-egypt-card/80 border border-gold-600/30 text-center">
                <span className="block text-xl sm:text-2xl font-bold font-cinzel text-gold-400">Anos 90</span>
                <span className="text-[11px] text-egypt-sand/80 uppercase tracking-wider">Início na Tecnologia</span>
              </div>
            </div>

            {/* Botões de Ação */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="#certificados"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-egypt-bg bg-gold-shine hover:brightness-110 rounded-lg shadow-gold-glow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <Award className="w-5 h-5" />
                <span>Slider de Certificados PDF</span>
              </a>

              <a
                href="#boxhoney"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-gold-300 bg-egypt-card border border-gold-500/40 hover:border-gold-400 hover:bg-gold-500/10 rounded-lg transition-all duration-300"
              >
                <span>Conheça a BoxHoney</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </motion.div>

          {/* Coluna Direita: Foto com Moldura Egípcia Dourada */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative group max-w-md w-full">
              
              {/* Brilho egípcio sob a imagem */}
              <div className="absolute -inset-1 bg-gold-gradient rounded-2xl blur-lg opacity-40 group-hover:opacity-75 transition duration-500"></div>

              {/* Moldura Principal da Foto */}
              <div className="relative bg-egypt-card p-3 rounded-2xl border border-gold-500/50 shadow-2xl">
                
                {/* Detalhes de cantos ornamentados */}
                <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-gold-400"></div>
                <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-gold-400"></div>
                <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-gold-400"></div>
                <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-gold-400"></div>

                <div className="relative overflow-hidden rounded-xl bg-egypt-darkSlate max-h-[480px]">
                  <img
                    src="/img/foto.png"
                    alt="Marcelo Olimpio"
                    className="w-full h-full object-cover object-center filter brightness-105 contrast-105 group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Overlay gradiente egípcio sutil */}
                  <div className="absolute inset-0 bg-gradient-to-t from-egypt-bg via-transparent to-transparent opacity-80"></div>
                  
                  {/* Badge de Selo no Canto da Imagem */}
                  <div className="absolute bottom-4 left-4 right-4 bg-egypt-card/90 backdrop-blur-md p-3 rounded-lg border border-gold-500/40 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="p-1.5 rounded-full bg-gold-500/20 text-gold-400">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-white font-cinzel">Engenheiro de Software & BIM</p>
                        <p className="text-[10px] text-gold-400/90 uppercase tracking-widest">Marcelo Olimpio</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
