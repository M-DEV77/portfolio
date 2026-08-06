import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ChevronLeft, ChevronRight, FileText, Download, CheckCircle2 } from 'lucide-react';
import { certificatesData } from '../data/certificatesData';
import PdfViewerModal from './PdfViewerModal';
import SandTitle from './SandTitle';

const CertificateSlider = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeModalCert, setActiveModalCert] = useState(null);

  const categories = ['Todos', 'Engenharia & BIM', 'Desenvolvimento Web', 'Tecnologia & TI'];

  const filteredCertificates = selectedCategory === 'Todos'
    ? certificatesData
    : certificatesData.filter(cert => cert.category === selectedCategory);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredCertificates.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + filteredCertificates.length) % filteredCertificates.length);
  };

  return (
    <section id="certificados" className="py-24 bg-egypt-bg relative overflow-hidden papyrus-texture border-t border-gold-700/20">
      
      {/* Luzes sutis egípcias */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho de Seção Limpo & Leve */}
        <SandTitle
          badge="Certificações & Documentos PDF"
          badgeIcon={Award}
          subtitle="Navegue pelos 28 certificados verificados de Marcelo Olimpio. Clique em qualquer card para abrir o leitor de PDF interativo."
        >
          Slider de <span className="text-gold-glow">Certificados PDF</span>
        </SandTitle>

        {/* Filtros de Categoria */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setCurrentIndex(0);
              }}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-300 ${
                selectedCategory === cat
                  ? 'bg-gold-shine text-egypt-bg shadow-gold-glow font-bold scale-105'
                  : 'bg-egypt-card text-egypt-sand border border-gold-600/30 hover:border-gold-400 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Componente do Slider Principal (Desliza Suavemente para o Centro) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
          className="relative max-w-5xl mx-auto"
        >
          
          {/* Botões de Navegação Lateral Desktop */}
          <button
            onClick={handlePrev}
            className="absolute left-0 sm:-left-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-egypt-card/90 border border-gold-500/50 text-gold-400 hover:bg-gold-500 hover:text-egypt-bg transition-all duration-300 shadow-gold-glow hover:scale-110"
            aria-label="Certificado Anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 sm:-right-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-egypt-card/90 border border-gold-500/50 text-gold-400 hover:bg-gold-500 hover:text-egypt-bg transition-all duration-300 shadow-gold-glow hover:scale-110"
            aria-label="Próximo Certificado"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Exibição do Card Ativo no Slider */}
          <div className="px-4 sm:px-12">
            <AnimatePresence mode="wait">
              {filteredCertificates.length > 0 && (
                <motion.div
                  key={filteredCertificates[currentIndex].id}
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="bg-egypt-card rounded-2xl border-2 border-gold-500/50 p-6 sm:p-10 shadow-gold-glow-lg relative overflow-hidden group"
                >
                  {/* Cantos Ornamentados Egípcios */}
                  <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-gold-400"></div>
                  <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-gold-400"></div>
                  <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-gold-400"></div>
                  <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-gold-400"></div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    
                    {/* Imagem de Pré-visualização com Efeito de Brilho */}
                    <div className="lg:col-span-5 relative group/img cursor-pointer" onClick={() => setActiveModalCert(filteredCertificates[currentIndex])}>
                      <div className="relative overflow-hidden rounded-xl border border-gold-500/40 shadow-xl bg-egypt-darkSlate">
                        <img
                          src={filteredCertificates[currentIndex].previewImage}
                          alt={filteredCertificates[currentIndex].title}
                          className="w-full h-56 sm:h-64 object-cover filter brightness-90 group-hover/img:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-egypt-bg via-transparent to-transparent"></div>
                        
                        {/* Overlay "Clique para Visualizar PDF" */}
                        <div className="absolute inset-0 bg-egypt-darkSlate/70 opacity-0 group-hover/img:opacity-100 flex flex-col items-center justify-center gap-2 transition-opacity duration-300 backdrop-blur-sm">
                          <FileText className="w-10 h-10 text-gold-400 animate-bounce" />
                          <span className="text-xs font-bold uppercase tracking-wider text-white font-cinzel">
                            Abrir Leitor PDF Interativo
                          </span>
                        </div>

                        {/* Tag de Categoria na Imagem */}
                        <span className="absolute top-3 left-3 px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md bg-gold-shine text-egypt-bg shadow-md">
                          {filteredCertificates[currentIndex].category}
                        </span>
                      </div>
                    </div>

                    {/* Conteúdo Informativo do Certificado */}
                    <div className="lg:col-span-7 space-y-4">
                      
                      {/* Selo Dourado & Credencial */}
                      <div className="flex items-center justify-between text-xs">
                        <span className="flex items-center gap-1.5 text-gold-400 font-semibold">
                          <CheckCircle2 className="w-4 h-4 text-gold-400" />
                          <span>Certificado Autêntico Verificado</span>
                        </span>
                        <span className="text-egypt-sand/70 font-mono text-[11px]">
                          {filteredCertificates[currentIndex].code}
                        </span>
                      </div>

                      {/* Título do Certificado */}
                      <h3 className="text-2xl sm:text-3xl font-bold font-cinzel text-white group-hover:text-gold-300 transition-colors">
                        {filteredCertificates[currentIndex].title}
                      </h3>

                      {/* Emissor e Data */}
                      <p className="text-sm font-semibold text-gold-400 font-cinzel">
                        {filteredCertificates[currentIndex].issuer} • <span className="text-egypt-sand/80 font-sans font-normal">{filteredCertificates[currentIndex].date}</span>
                      </p>

                      {/* Descrição */}
                      <p className="text-sm text-egypt-sand/90 leading-relaxed">
                        {filteredCertificates[currentIndex].description}
                      </p>

                      {/* Badges de Skills */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {filteredCertificates[currentIndex].skillsCovered.map((skill) => (
                          <span key={skill} className="px-2.5 py-1 text-[11px] font-medium rounded bg-gold-500/10 text-gold-300 border border-gold-500/30">
                            {skill}
                          </span>
                        ))}
                      </div>

                      {/* Botões de Ação CTA */}
                      <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-gold-700/20">
                        <button
                          onClick={() => setActiveModalCert(filteredCertificates[currentIndex])}
                          className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-egypt-bg bg-gold-shine hover:brightness-110 rounded-lg shadow-gold-glow transition-all hover:-translate-y-0.5"
                        >
                          <FileText className="w-4 h-4" />
                          <span>Visualizar Certificado PDF</span>
                        </button>

                        <a
                          href={filteredCertificates[currentIndex].pdfUrl}
                          download={filteredCertificates[currentIndex].pdfUrl.split('/').pop()}
                          className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-gold-300 bg-egypt-darkSlate border border-gold-500/30 hover:border-gold-400 hover:bg-gold-500/10 rounded-lg transition-all"
                        >
                          <Download className="w-4 h-4 text-gold-400" />
                          <span>Baixar PDF</span>
                        </a>
                      </div>

                    </div>

                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Indicadores de Paginação do Slider */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {filteredCertificates.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx
                    ? 'w-8 bg-gold-gradient shadow-gold-glow'
                    : 'w-2.5 bg-egypt-card border border-gold-600/40 hover:bg-gold-500/40'
                }`}
                aria-label={`Ir para certificado ${idx + 1}`}
              />
            ))}
          </div>

        </motion.div>

      </div>

      {/* Modal Leitor de PDF */}
      {activeModalCert && (
        <PdfViewerModal
          certificate={activeModalCert}
          onClose={() => setActiveModalCert(null)}
        />
      )}

    </section>
  );
};

export default CertificateSlider;
