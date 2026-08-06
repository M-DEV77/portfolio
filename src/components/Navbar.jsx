import React, { useState, useEffect } from 'react';
import { Menu, X, Award, Hexagon, Sparkles } from 'lucide-react';

const Navbar = ({ onOpenCertificate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'BoxHoney', href: '#boxhoney' },
    { name: 'Habilidades', href: '#habilidades' },
    { name: 'Certificados PDF', href: '#certificados' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-egypt-darkSlate/90 backdrop-blur-md border-b border-gold-700/40 shadow-gold-glow/20 py-3' 
        : 'bg-gradient-to-b from-egypt-bg/90 to-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Brand Egípcia BoxHoney / Marcelo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-egypt-card border border-gold-500/50 shadow-gold-glow group-hover:scale-105 transition-transform duration-300">
              <Hexagon className="w-6 h-6 text-gold-400 group-hover:rotate-45 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gold-400/10 blur-sm rounded-lg"></div>
            </div>
            <div className="flex flex-col">
              <span className="font-cinzel text-lg sm:text-xl font-bold tracking-wider text-gold-glow">
                MARCELO OLIMPIO
              </span>
              <span className="text-[10px] uppercase tracking-widest text-gold-400/80 font-medium">
                BoxHoney • Eng. Software
              </span>
            </div>
          </a>

          {/* Links Desktop */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-egypt-sand/90 hover:text-gold-300 hover:bg-gold-500/10 rounded-md transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Botão de Destaque CTA Desktop */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#certificados"
              className="relative inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-egypt-bg bg-gold-shine hover:brightness-110 rounded-md shadow-gold-glow transition-all duration-300 hover:-translate-y-0.5"
            >
              <Award className="w-4 h-4" />
              <span>Certificados PDF</span>
            </a>
          </div>

          {/* Botão Hambúrguer Mobile */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-egypt-card border border-gold-600/40 text-gold-400 hover:text-gold-300 focus:outline-none"
            aria-label="Abrir Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Drawer Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-egypt-card/95 backdrop-blur-lg border-b border-gold-600/40 px-4 pt-3 pb-6 space-y-3 mt-3 animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-egypt-sand hover:text-gold-300 hover:bg-gold-500/10 rounded-md"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#certificados"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-semibold uppercase tracking-wider text-egypt-bg bg-gold-shine rounded-md shadow-gold-glow"
          >
            <Award className="w-4 h-4" />
            <span>Ver Certificados em PDF</span>
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
