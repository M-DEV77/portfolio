import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Globe, Send, CheckCircle, MessageSquare } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import SandTitle from './SandTitle';

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 5000);
  };

  return (
    <section id="contato" className="py-24 bg-egypt-darkSlate/60 relative overflow-hidden border-t border-gold-700/20">
      
      {/* Luzes de fundo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-gold-600/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho Limpo & Leve */}
        <SandTitle
          badge="Canais de Comunicação"
          badgeIcon={MessageSquare}
          subtitle="Disponível para novos projetos de software, sites de alto impacto, consultoria BIM ou oportunidades profissionais."
        >
          Entre em <span className="text-gold-glow">Contato</span>
        </SandTitle>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 overflow-hidden">
          
          {/* Informações & Redes Diretas (Vem da Esquerda para o Centro) */}
          <motion.div
            initial={{ opacity: 0, x: -90 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="bg-egypt-card p-6 sm:p-8 rounded-2xl border border-gold-600/30 shadow-egypt-card space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold font-cinzel text-white">
                Canais Oficiais
              </h3>

              <div className="space-y-4">
                
                {/* Website */}
                <a
                  href={personalInfo.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-egypt-darkSlate/80 border border-gold-600/20 hover:border-gold-400 transition-all duration-300 group"
                >
                  <div className="p-3 rounded-lg bg-gold-500/10 text-gold-400 group-hover:bg-gold-500 group-hover:text-egypt-bg transition-colors">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-egypt-sand/70 uppercase tracking-widest font-semibold block">Portfólio Web</span>
                    <span className="text-sm font-bold text-white group-hover:text-gold-300">{personalInfo.website.replace('https://', '')}</span>
                  </div>
                </a>

                {/* GitHub */}
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-egypt-darkSlate/80 border border-gold-600/20 hover:border-gold-400 transition-all duration-300 group"
                >
                  <div className="p-3 rounded-lg bg-gold-500/10 text-gold-400 group-hover:bg-gold-500 group-hover:text-egypt-bg transition-colors">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-egypt-sand/70 uppercase tracking-widest font-semibold block">Repositório GitHub</span>
                    <span className="text-sm font-bold text-white group-hover:text-gold-300">github.com/M-DEV77</span>
                  </div>
                </a>

                {/* E-mail */}
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-4 p-4 rounded-xl bg-egypt-darkSlate/80 border border-gold-600/20 hover:border-gold-400 transition-all duration-300 group"
                >
                  <div className="p-3 rounded-lg bg-gold-500/10 text-gold-400 group-hover:bg-gold-500 group-hover:text-egypt-bg transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-egypt-sand/70 uppercase tracking-widest font-semibold block">E-mail Profissional</span>
                    <span className="text-sm font-bold text-white group-hover:text-gold-300">{personalInfo.email}</span>
                  </div>
                </a>

              </div>
            </div>
          </motion.div>

          {/* Form de Mensagem Direta (Vem da Direita para o Centro) */}
          <motion.div
            initial={{ opacity: 0, x: 90 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1], delay: 0.15 }}
            className="lg:col-span-7 bg-egypt-card p-6 sm:p-8 rounded-2xl border border-gold-600/30 shadow-egypt-card"
          >
            <h3 className="text-xl sm:text-2xl font-bold font-cinzel text-white mb-6">
              Enviar Mensagem Direta
            </h3>

            {formSubmitted ? (
              <div className="p-6 rounded-xl bg-gold-500/10 border border-gold-400 text-center space-y-3">
                <CheckCircle className="w-12 h-12 text-gold-400 mx-auto" />
                <h4 className="text-lg font-bold font-cinzel text-white">Mensagem Enviada com Sucesso!</h4>
                <p className="text-xs sm:text-sm text-egypt-sand/90">
                  Obrigado pelo contato! Marcelo Olimpio responderá em breve.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-gold-400 font-semibold mb-1">
                      Seu Nome
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ex: Carlos Silva"
                      className="w-full px-4 py-3 rounded-lg bg-egypt-darkSlate border border-gold-600/30 text-white placeholder-egypt-sand/40 focus:outline-none focus:border-gold-400 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-gold-400 font-semibold mb-1">
                      Seu E-mail
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Ex: carlos@empresa.com"
                      className="w-full px-4 py-3 rounded-lg bg-egypt-darkSlate border border-gold-600/30 text-white placeholder-egypt-sand/40 focus:outline-none focus:border-gold-400 text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-gold-400 font-semibold mb-1">
                    Assunto
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Ex: Projeto de Software / Desenvolvimento de Site"
                    className="w-full px-4 py-3 rounded-lg bg-egypt-darkSlate border border-gold-600/30 text-white placeholder-egypt-sand/40 focus:outline-none focus:border-gold-400 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-gold-400 font-semibold mb-1">
                    Mensagem
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Escreva os detalhes da sua proposta ou mensagem..."
                    className="w-full px-4 py-3 rounded-lg bg-egypt-darkSlate border border-gold-600/30 text-white placeholder-egypt-sand/40 focus:outline-none focus:border-gold-400 text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-egypt-bg bg-gold-shine hover:brightness-110 rounded-lg shadow-gold-glow transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar Mensagem</span>
                </button>
              </form>
            )}

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
