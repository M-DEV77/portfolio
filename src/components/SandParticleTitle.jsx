import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const SandParticleTitle = ({ text, highlightText = '', subtitle = '', badge = '', badgeIcon: BadgeIcon }) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const fullText = highlightText ? `${text} ${highlightText}` : text;

    // Configura resolução de alta definição do canvas
    const setupCanvas = () => {
      const rect = containerRef.current.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = 120 * dpr;
      ctx.scale(dpr, dpr);
    };

    setupCanvas();

    const particles = [];
    const width = containerRef.current.clientWidth;
    const height = 120;

    // Renderiza o texto em um canvas temporário para extrair as posições em alta densidade
    const tempCanvas = document.createElement('canvas');
    const tempCtx = tempCanvas.getContext('2d');
    tempCanvas.width = width;
    tempCanvas.height = height;

    const fontSize = width < 480 ? 28 : width < 768 ? 38 : 48;
    tempCtx.font = `bold ${fontSize}px "Cinzel", serif`;
    tempCtx.fillStyle = '#ffffff';
    tempCtx.textAlign = 'center';
    tempCtx.textBaseline = 'middle';
    tempCtx.fillText(fullText, width / 2, height / 2);

    const imgData = tempCtx.getImageData(0, 0, width, height);
    const data = imgData.data;

    // Amostra de altíssima densidade para grãos de areia ultra finos (gap = 2)
    const gap = width < 480 ? 2.5 : 2;
    const targetPoints = [];

    for (let y = 0; y < height; y += gap) {
      for (let x = 0; x < width; x += gap) {
        const index = (Math.floor(y) * width + Math.floor(x)) * 4;
        const alpha = data[index + 3];
        if (alpha > 120) {
          targetPoints.push({ x, y });
        }
      }
    }

    const fineSandColors = ['#fffce0', '#fdf0c3', '#f5d77f', '#e0a943', '#c28b29', '#8f5c09'];

    // Criando micro-partículas de areia fina
    targetPoints.forEach((pt) => {
      particles.push({
        x: pt.x + (Math.random() - 0.5) * 350,
        y: pt.y + (Math.random() - 0.5) * 220 - 40,
        targetX: pt.x,
        targetY: pt.y,
        radius: Math.random() * 0.65 + 0.35, // Micro-partícula fina (0.35px - 1.0px)
        color: fineSandColors[Math.floor(Math.random() * fineSandColors.length)],
        vx: (Math.random() - 0.5) * 3,
        vy: (Math.random() - 0.5) * 3,
        ease: Math.random() * 0.07 + 0.03,
        jitter: Math.random() * 0.4 - 0.2,
      });
    });

    let isInView = false;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isInView = true;
          }
        });
      },
      { threshold: 0.15 }
    );

    if (containerRef.current) observer.observe(containerRef.current);

    // Efeito de dispersão de areia fina com a aproximação do cursor
    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    // Loop de física dos micro-grãos de areia
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        if (isInView) {
          const dx = p.targetX - p.x;
          const dy = p.targetY - p.y;
          p.x += dx * p.ease + p.jitter * 0.1;
          p.y += dy * p.ease + p.jitter * 0.1;

          // Dispersão sutil de poeira com o mouse
          const mdx = p.x - mouseX;
          const mdy = p.y - mouseY;
          const dist = Math.sqrt(mdx * mdx + mdy * mdy);
          if (dist < 50) {
            const force = (50 - dist) / 50;
            const angle = Math.atan2(mdy, mdx);
            p.x += Math.cos(angle) * force * 10;
            p.y += Math.sin(angle) * force * 10;
          }
        }

        // Renderiza o micro-grão de areia com brilho dourado fino
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 2;
        ctx.shadowColor = '#f5d77f';
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [text, highlightText]);

  return (
    <div ref={containerRef} className="text-center max-w-4xl mx-auto mb-12 relative select-none">
      
      {/* Badge Superior */}
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-egypt-card border border-gold-500/30 text-xs font-semibold uppercase tracking-wider text-gold-400 mb-4 shadow-gold-glow/20"
        >
          {BadgeIcon && <BadgeIcon className="w-4 h-4 text-gold-300" />}
          <span>{badge}</span>
        </motion.div>
      )}

      {/* Canvas com micro-partículas de areia fina */}
      <div className="relative flex justify-center items-center overflow-hidden">
        <canvas ref={canvasRef} className="block cursor-pointer max-w-full" />
      </div>

      {/* Subtítulo complementar */}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 0.9, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-sm sm:text-base text-egypt-sand/80 mt-2 max-w-xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}

      {/* Linha Dourada de Areia */}
      <motion.div
        initial={{ width: '0px', opacity: 0 }}
        whileInView={{ width: '140px', opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="h-1 bg-gold-gradient mx-auto mt-4 rounded-full shadow-gold-glow"
      ></motion.div>
    </div>
  );
};

export default SandParticleTitle;
