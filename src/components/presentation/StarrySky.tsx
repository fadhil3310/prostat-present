import React, { useRef, useEffect, forwardRef } from 'react';

export interface StarrySkyProps {
  /** The background color of the sky (CSS hex color) */
  backgroundColor?: string;
  /** The color of the stars and falling lines (CSS hex color) */
  starColor?: string;
  /** The thickness of the falling lines in pixels */
  lineSize?: number;
  /** The number of static background stars */
  staticStarCount?: number;
  /** The number of falling star lines */
  fallingLineCount?: number;
  /** Optional Tailwind classes to apply to the canvas element */
  className?: string;
}

// Helper to convert hex to RGB so we can use transparency in Canvas gradients
const hexToRgb = (hex: string) => {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  const fullHex = hex.replace(shorthandRegex, (_, r, g, b) => r + r + g + g + b + b);
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(fullHex);
  return result
    ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
    : '255, 255, 255'; // Fallback to white
};

export const StarrySky = forwardRef<HTMLCanvasElement, StarrySkyProps>(
  (
    {
      backgroundColor = '#0b0f19',
      starColor = '#ffffff',
      lineSize = 2,
      staticStarCount = 150,
      fallingLineCount = 15,
      className = '',
    },
    forwardedRef
  ) => {
    const internalRef = useRef<HTMLCanvasElement>(null);

    // Sync the internal ref with the forwarded ref
    useEffect(() => {
      if (typeof forwardedRef === 'function') {
        forwardedRef(internalRef.current);
      } else if (forwardedRef) {
        forwardedRef.current = internalRef.current;
      }
    }, [forwardedRef]);

    useEffect(() => {
      const canvas = internalRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      let animationFrameId: number;
      let width = canvas.offsetWidth;
      let height = canvas.offsetHeight;

      // Handle canvas resizing to avoid stretching
      const setCanvasSize = () => {
        width = canvas.offsetWidth;
        height = canvas.offsetHeight;
        canvas.width = width;
        canvas.height = height;
      };
      setCanvasSize();
      window.addEventListener('resize', setCanvasSize);

      // Initialize Static Stars
      const staticStars = Array.from({ length: staticStarCount }).map(() => ({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.8 + 0.2,
      }));

      // Initialize Falling Lines
      const fallingLines = Array.from({ length: fallingLineCount }).map(() => ({
        x: Math.random() * width,
        y: Math.random() * height - height, // Start randomly above and across the screen
        length: Math.random() * 80 + 40,
        speed: Math.random() * 4 + 3, // Fall speed in pixels per frame
      }));

      const starColorRgb = hexToRgb(starColor);

      // Main animation loop
      const render = () => {
        // 1. Draw Background
        ctx.fillStyle = backgroundColor;
        ctx.fillRect(0, 0, width, height);

        // 2. Draw Static Stars
        staticStars.forEach((star) => {
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${starColorRgb}, ${star.opacity})`;
          ctx.shadowBlur = star.radius * 2;
          ctx.shadowColor = starColor;
          ctx.fill();
        });
        ctx.shadowBlur = 0; // Reset shadow for next drawings

        // 3. Update and Draw Falling Lines
        fallingLines.forEach((line) => {
          // Move line down
          line.y += line.speed;

          // Reset to top if it falls completely off the bottom
          if (line.y - line.length > height) {
            line.y = -line.length;
            line.x = Math.random() * width;
            line.speed = Math.random() * 4 + 3;
            line.length = Math.random() * 80 + 40;
          }

          // Draw the fading streak tail
          ctx.beginPath();
          const gradient = ctx.createLinearGradient(line.x, line.y - line.length, line.x, line.y);
          gradient.addColorStop(0, `rgba(${starColorRgb}, 0)`); // Transparent at the top
          gradient.addColorStop(1, `rgba(${starColorRgb}, 1)`); // Solid at the bottom

          ctx.strokeStyle = gradient;
          ctx.lineWidth = lineSize;
          ctx.lineCap = 'round';
          ctx.moveTo(line.x, line.y - line.length);
          ctx.lineTo(line.x, line.y);
          ctx.stroke();

          // Draw a glowing head at the leading edge of the falling line
          ctx.beginPath();
          ctx.arc(line.x, line.y, lineSize / 2, 0, Math.PI * 2);
          ctx.fillStyle = starColor;
          ctx.shadowBlur = 10;
          ctx.shadowColor = starColor;
          ctx.fill();
          ctx.shadowBlur = 0; // Reset shadow
        });

        animationFrameId = requestAnimationFrame(render);
      };

      // Kick off animation
      render();

      // Cleanup
      return () => {
        window.removeEventListener('resize', setCanvasSize);
        cancelAnimationFrame(animationFrameId);
      };
    }, [backgroundColor, starColor, lineSize, staticStarCount, fallingLineCount]);

    return (
      <canvas
        ref={internalRef}
        className={`block w-full h-full ${className}`}
      />
    );
  }
);

StarrySky.displayName = 'StarrySky';