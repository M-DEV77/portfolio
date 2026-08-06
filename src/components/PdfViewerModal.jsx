import React, { useState } from 'react';
import { X, Download, ExternalLink, ShieldCheck, Award, FileText, CheckCircle2, Sparkles, Layers, Eye } from 'lucide-react';

const PdfViewerModal = ({ certificate, onClose }) => {
  const [viewMode, setViewMode] = useState('card'); // 'card' (100% seguro/elegante) ou 'embed' (pdf nativo)

  if (!certificate) return null;

  const encodedPdfUrl = encodeURI(certificate.pdfUrl);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 glass-modal overflow-y-auto animate-fadeIn">
      
      {/* Moldura Principal do Modal Egípcio */}
      <div className="relative w-full max-w-4xl bg-egypt-card rounded-2xl border-2 border-gold-500/60 shadow-gold-glow-lg overflow-hidden flex flex-col my-auto max-h-[92vh]">
        
        {/* Cantos Ornamentados Egípcios */}
        <div className="absolute top-2 left-2 w-5 h-5 border-t-2 border-l-2 border-gold-400 z-20 pointer-events-none"></div>
        <div className="absolute top-2 right-2 w-5 h-5 border-t-2 border-r-2 border-gold-400 z-20 pointer-events-none"></div>
        <div className="absolute bottom-2 left-2 w-5 h-5 border-b-2 border-l-2 border-gold-400 z-20 pointer-events-none"></div>
        <div className="absolute bottom-2 right-2 w-5 h-5 border-b-2 border-r-2 border-gold-400 z-20 pointer-events-none"></div>

        {/* Cabeçalho do Modal */}
        <div className="bg-egypt-darkSlate px-4 sm:px-6 py-3.5 border-b border-gold-600/40 flex items-center justify-between z-10 shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-gold-500/20 text-gold-400 border border-gold-500/40">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold font-cinzel text-white leading-tight line-clamp-1">
                {certificate.title}
              </h3>
              <p className="text-xs text-gold-400/90 font-medium">
                {certificate.issuer} • {certificate.date}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-egypt-card border border-gold-600/40 text-gold-400 hover:text-white hover:bg-gold-600/20 transition-colors"
            title="Fechar Visualizador"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Barra de Ferramentas / Alternador de Modo de Exibição */}
        <div className="bg-egypt-card/90 px-4 sm:px-6 py-2.5 border-b border-gold-700/30 flex flex-wrap items-center justify-between gap-3 text-xs z-10 shrink-0">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setViewMode('card')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                viewMode === 'card'
                  ? 'bg-gold-shine text-egypt-bg shadow-gold-glow font-bold'
                  : 'bg-egypt-darkSlate text-egypt-sand border border-gold-600/30 hover:text-white'
              }`}
            >
              <Award className="w-3.5 h-3.5" />
              <span>Certificado Interativo</span>
            </button>

            <button
              onClick={() => setViewMode('embed')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                viewMode === 'embed'
                  ? 'bg-gold-shine text-egypt-bg shadow-gold-glow font-bold'
                  : 'bg-egypt-darkSlate text-egypt-sand border border-gold-600/30 hover:text-white'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>PDF Embutido</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={encodedPdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-egypt-darkSlate border border-gold-600/40 text-gold-300 hover:bg-gold-500/10 transition-colors font-semibold"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Abrir PDF em Nova Aba</span>
            </a>

            <a
              href={encodedPdfUrl}
              download={certificate.pdfUrl.split('/').pop()}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-gold-shine text-egypt-bg font-bold uppercase tracking-wider hover:brightness-110 shadow-gold-glow transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Baixar PDF</span>
            </a>
          </div>
        </div>

        {/* Corpo do Modal */}
        <div className="flex-1 bg-egypt-bg/95 papyrus-texture overflow-y-auto p-4 sm:p-8 flex items-center justify-center min-h-[400px]">
          
          {viewMode === 'card' ? (
            /* Documento do Certificado Egípcio em Alta Qualidade (100% confiável em qualquer dispositivo) */
            <div className="w-full max-w-3xl bg-egypt-card rounded-2xl border-2 border-gold-500/60 p-6 sm:p-10 shadow-2xl relative overflow-hidden my-auto">
              
              {/* Moldura Interna Dourada Ornamentada */}
              <div className="absolute inset-3 border border-gold-500/30 rounded-xl pointer-events-none"></div>
              <div className="absolute inset-5 border border-gold-500/15 rounded-lg pointer-events-none"></div>

              {/* Marca d'água Egípcia ao fundo */}
              <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
                <Award className="w-96 h-96 text-gold-400 stroke-1" />
              </div>

              <div className="relative z-10 text-center space-y-6">
                
                {/* Topo do Certificado */}
                <div className="flex items-center justify-between border-b border-gold-500/30 pb-4">
                  <div className="text-left">
                    <span className="font-cinzel text-xs uppercase tracking-widest text-gold-400 font-bold flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-gold-300" />
                      Certificado Oficial Verificado
                    </span>
                    <p className="text-[10px] text-egypt-sand/70 mt-0.5">DIO • Digital Innovation One & Parceiros</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-6 h-6 text-gold-400" />
                    <span className="font-cinzel text-sm font-bold text-white tracking-wider">BOXHONEY</span>
                  </div>
                </div>

                {/* Nome do Aluno */}
                <div className="py-2 space-y-1">
                  <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold">Conferido ao Aluno</span>
                  <h2 className="text-2xl sm:text-4xl font-bold font-cinzel text-gold-glow">
                    MARCELO OLIMPIO
                  </h2>
                  <p className="text-xs sm:text-sm text-egypt-sand/90 max-w-xl mx-auto pt-2 leading-relaxed">
                    Por ter concluído com êxito todos os módulos e requisitos do programa de formação técnica:
                  </p>
                </div>

                {/* Título do Curso */}
                <div className="p-4 rounded-xl bg-egypt-darkSlate/90 border border-gold-500/40 inline-block max-w-xl w-full shadow-inner">
                  <h3 className="text-lg sm:text-2xl font-bold font-cinzel text-white">
                    {certificate.title}
                  </h3>
                  <p className="text-xs text-gold-300 font-semibold mt-1">
                    {certificate.issuer}
                  </p>
                </div>

                {/* Descrição Detalhada */}
                <p className="text-xs sm:text-sm text-egypt-sand/80 max-w-lg mx-auto leading-relaxed">
                  {certificate.description}
                </p>

                {/* Badges das Competências Adquiridas */}
                <div className="flex flex-wrap justify-center gap-2 pt-1">
                  {certificate.skillsCovered.map((skill) => (
                    <span key={skill} className="px-3 py-1 text-xs font-semibold rounded-md bg-gold-500/10 text-gold-300 border border-gold-500/30">
                      ✓ {skill}
                    </span>
                  ))}
                </div>

                {/* Rodapé com Selo e Ações */}
                <div className="pt-6 border-t border-gold-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-left text-xs space-y-0.5">
                    <p className="text-egypt-sand/70">Emissão: <strong className="text-white font-cinzel">{certificate.date}</strong></p>
                    <p className="text-[10px] text-gold-400 font-mono">Código de Autenticação: {certificate.code}</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <a
                      href={encodedPdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gold-shine text-egypt-bg font-bold text-xs uppercase tracking-wider shadow-gold-glow hover:brightness-110 transition-transform hover:-translate-y-0.5"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Abrir Arquivo PDF</span>
                    </a>
                  </div>
                </div>

              </div>

            </div>
          ) : (
            /* Modo PDF Embutido via iframe nativo */
            <div className="w-full h-full min-h-[550px] rounded-xl overflow-hidden border border-gold-500/40 shadow-2xl bg-egypt-darkSlate">
              <iframe
                src={encodedPdfUrl}
                title={certificate.title}
                className="w-full h-full min-h-[550px] border-0"
              />
            </div>
          )}

        </div>

      </div>

    </div>
  );
};

export default PdfViewerModal;
