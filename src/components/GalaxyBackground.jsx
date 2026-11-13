import React, { useEffect, useRef } from 'react';

const GalaxyBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Generate Stars
    const starCount = Math.floor((width * height) / 3500);
    const stars = Array.from({ length: starCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.6 + 0.3,
      alpha: Math.random() * 0.8 + 0.2,
      speed: Math.random() * 0.015 + 0.005,
      direction: Math.random() > 0.5 ? 1 : -1,
      color: ['#ffffff', '#c084fc', '#818cf8', '#38bdf8', '#f472b6'][Math.floor(Math.random() * 5)],
    }));

    // Shooting stars
    const shootingStars = [];
    const spawnShootingStar = () => {
      if (shootingStars.length < 2 && Math.random() < 0.03) {
        shootingStars.push({
          x: Math.random() * width,
          y: Math.random() * (height * 0.5),
          length: Math.random() * 80 + 40,
          speed: Math.random() * 10 + 6,
          angle: Math.PI / 4 + (Math.random() - 0.5) * 0.2,
          opacity: 1,
        });
      }
    };

    // Animation Loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Render Stars
      stars.forEach((star) => {
        star.alpha += star.speed * star.direction;
        if (star.alpha > 0.9) {
          star.alpha = 0.9;
          star.direction = -1;
        } else if (star.alpha < 0.15) {
          star.alpha = 0.15;
          star.direction = 1;
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.globalAlpha = star.alpha;
        ctx.shadowBlur = star.radius > 1 ? 8 : 0;
        ctx.shadowColor = star.color;
        ctx.fill();
      });

      // Render Shooting Stars
      spawnShootingStar();
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const s = shootingStars[i];
        ctx.beginPath();
        const endX = s.x - Math.cos(s.angle) * s.length;
        const endY = s.y - Math.sin(s.angle) * s.length;

        const grad = ctx.createLinearGradient(s.x, s.y, endX, endY);
        grad.addColorStop(0, `rgba(255, 255, 255, ${s.opacity})`);
        grad.addColorStop(0.5, `rgba(168, 85, 247, ${s.opacity * 0.8})`);
        grad.addColorStop(1, 'rgba(56, 189, 248, 0)');

        ctx.strokeStyle = grad;
        ctx.lineWidth = 2;
        ctx.shadowBlur = 10;
        ctx.shadowColor = '#c084fc';
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(endX, endY);
        ctx.stroke();

        s.x += Math.cos(s.angle) * s.speed;
        s.y += Math.sin(s.angle) * s.speed;
        s.opacity -= 0.015;

        if (s.opacity <= 0 || s.x > width || s.y > height) {
          shootingStars.splice(i, 1);
        }
      }

      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Deep Galaxy Glowing Nebulae */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-purple-900/20 blur-[130px]" />
      <div className="absolute top-[30%] right-[-10%] w-[45vw] h-[45vw] rounded-full bg-indigo-900/20 blur-[140px]" />
      <div className="absolute bottom-[-10%] left-[20%] w-[55vw] h-[55vw] rounded-full bg-blue-950/30 blur-[160px]" />
      <div className="absolute top-[60%] left-[5%] w-[35vw] h-[35vw] rounded-full bg-violet-950/25 blur-[120px]" />

      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />
    </div>
  );
};

export default GalaxyBackground;
