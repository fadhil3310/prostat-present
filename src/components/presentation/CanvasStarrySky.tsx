import React, { useRef, useEffect } from 'react';

interface CanvasStarrySkyProps {
  /** Number of stars to render */
  starCount?: number;
  /** Color of the stars (hex, rgb, or named color) */
  starColor?: string;
  /** CSS background property (solid color, gradient, etc.) */
  backgroundColor?: string;
  /** Additional Tailwind classes */
  className?: string;
}

interface Star {
  x: number;
  y: number;
  radius: number;
  alpha: number;
  delta: number;
}

const CanvasStarrySky: React.FC<CanvasStarrySkyProps> = ({
  starCount = 200,
  starColor = '#ffffff',
  backgroundColor = 'linear-gradient(to bottom, #111827, #0f172a, #1e1b4b)',
  className = '',
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let stars: Star[] = [];

    // Initialize canvas size and generate stars
    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      stars = Array.from({ length: starCount }).map(() => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5 + 0.5,
        alpha: Math.random(),
        // Speed and direction of the twinkle
        delta: (Math.random() * 0.015 + 0.005) * (Math.random() < 0.5 ? 1 : -1),
      }));
    };

    // Animation loop
    const render = () => {
      // Clear the previous frame (transparent, exposing the CSS background)
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      stars.forEach((star) => {
        // Update opacity for the twinkle effect
        star.alpha += star.delta;
        
        // Reverse fade direction if it hits min/max bounds
        if (star.alpha <= 0.1 || star.alpha >= 1) {
          star.delta = -star.delta;
        }

        // Draw the star
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = starColor;
        // Use globalAlpha so it works safely with any color string format
        ctx.globalAlpha = Math.max(0, Math.min(1, star.alpha));
        ctx.fill();
      });

      // Reset global alpha so it doesn't affect other potential draw calls
      ctx.globalAlpha = 1.0;

      animationFrameId = window.requestAnimationFrame(render);
    };

    init();
    render();

    // Handle window resize dynamically
    const handleResize = () => {
      init();
    };
    
    window.addEventListener('resize', handleResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [starCount, starColor]); // Re-initialize if count or color props change

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 block w-full h-full -z-10 ${className}`}
      style={{ background: backgroundColor }}
      aria-hidden="true"
    />
  );
};

export default CanvasStarrySky;