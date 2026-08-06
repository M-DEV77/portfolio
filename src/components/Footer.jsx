import React from 'react';
import { ArrowUp, Hexagon, Github, Globe } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-egypt-darkSlate border-t border-gold-600/30 text-egypt-sand py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-gold-700/20">
          
          {/* Logo Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-egypt-card border border-gold-500/40 flex items-center justify-center text-gold-400">
              <Hexagon className="w-6 h-6" />
            </div>
            <div>
              <span className="font-cinzel text-lg font-bold text-gold-glow block">
                BOXHONEY
              </span>
              <span className="text-[10px] uppercase tracking-widest text-gold-400/80">
                Estruturando Ideias, Codificando o Futuro
              </span>
            </div>
          </div>

          {/* Links Sociais */}
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.website}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-egypt-card border border-gold-600/30 text-gold-400 hover:bg-gold-500 hover:text-egypt-bg transition-colors"
              aria-label="Website"
            >
              <Globe className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-egypt-card border border-gold-600/30 text-gold-400 hover:bg-gold-500 hover:text-egypt-bg transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-gold-shine text-egypt-bg font-bold shadow-gold-glow hover:brightness-110 transition-transform hover:-translate-y-1"
              aria-label="Voltar ao Topo"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>

        </div>

        {/* Direitos Autorais */}
        <div className="pt-6 text-center text-xs text-egypt-sand/70 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© BoxHoney 2024 - 2026 • Desenvolvido para Marcelo Olimpio.</p>
          <p className="font-cinzel text-gold-400/90 font-medium">Engenharia de Software & Soluções BIM</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
