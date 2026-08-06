import React, { useEffect, useRef, useState } from 'react';

const DesertSandEffect = () => {
  const canvasRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeoutRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Redimensiona o canvas para a tela
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    // Micro-partículas de Areia do Deserto Ultra Fina
    const particleCount = Math.min(Math.floor(window.innerWidth / 6), 220);
    const particles = [];

    const sandColors = [
      'rgba(255, 252, 224, ',  // Poeira de Ouro Ultra Claro
      'rgba(245, 215, 127, ',  // Dourado Fino
      'rgba(224, 169, 67, ',   // Areia do Deserto
      'rgba(213, 152, 56, ',   // Ouro Ambar
      'rgba(143, 92, 9, ',     // Bronze
    ];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 0.9 + 0.3, // Partícula Fina (0.3px - 1.2px)
        colorPrefix: sandColors[Math.floor(Math.random() * sandColors.length)],
        alpha: Math.random() * 0.65 + 0.15,
        vx: Math.random() * 1.8 + 0.9, // Vento lateral fino
        vy: Math.random() * 0.7 + 0.15,
        pulse: Math.random() * 0.025,
      });
    }

    // Detecção de Rolagem (Scroll)
    let lastScrollY = window.scrollY;
    let scrollSpeed = 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      scrollSpeed = Math.abs(currentScrollY - lastScrollY);
      lastScrollY = currentScrollY;

      if (currentScrollY > 30) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }

      clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = setTimeout(() => {
        scrollSpeed = 0;
      }, 150);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Loop de Animação das Micro-Partículas
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const boost = Math.min(scrollSpeed * 0.18, 4.5);

      particles.forEach((p) => {
        p.x += p.vx + boost;
        p.y += p.vy + (boost * 0.25);

        p.alpha += p.pulse;
        if (p.alpha > 0.85 || p.alpha < 0.15) p.pulse = -p.pulse;

        if (p.x > canvas.width) {
          p.x = -10;
          p.y = Math.random() * canvas.height;
        }
        if (p.y > canvas.height) {
          p.y = -10;
          p.x = Math.random() * canvas.width;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.colorPrefix}${p.alpha})`;
        ctx.shadowBlur = 3;
        ctx.shadowColor = '#f5d77f';
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none z-30 transition-opacity duration-700 ${
        isScrolling ? 'opacity-100' : 'opacity-40'
      }`}
    />
  );
};

export default DesertSandEffect;
