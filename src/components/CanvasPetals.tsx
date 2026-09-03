import React, { useEffect, useRef } from "react";
import { useTheme } from "../context/ThemeContext";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  rotation: number;
  rotationSpeed: number;
  color: string;
  opacity: number;
  type: "petal" | "circle" | "sparkle" | "leaf" | "star";
}

export const CanvasPetals: React.FC = () => {
  const { palette, ambientEffect } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef<{ x: number; y: number; radius: number }>({
    x: -1000,
    y: -1000,
    radius: 140,
  });

  useEffect(() => {
    if (ambientEffect === "none") {
      const canvas = canvasRef.current;
      if (canvas) {
        const ctx = canvas.getContext("2d");
        if (ctx) ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    const colors = palette.swatches.length > 0 ? palette.swatches : [
      "#F7C8D3",
      "#B46A72",
      "#A8B58A",
      "#A9B7C6",
      "#FFF7E6",
    ];

    const particleCount = Math.min(32, Math.floor(width / 45));
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      let particleType: Particle["type"] = "petal";
      if (ambientEffect === "bubbles") particleType = "circle";
      else if (ambientEffect === "sparkles") particleType = "sparkle";
      else if (ambientEffect === "matcha") particleType = "leaf";
      else if (ambientEffect === "stars") particleType = "star";
      else particleType = i % 3 === 0 ? "petal" : i % 3 === 1 ? "circle" : "sparkle";

      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 8 + 4,
        speedX: (Math.random() - 0.5) * 0.5 + 0.15,
        speedY: Math.random() * 0.6 + 0.25,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 0.7,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: Math.random() * 0.45 + 0.15,
        type: particleType,
      });
    }

    const drawParticle = (p: Particle) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.globalAlpha = p.opacity;
      ctx.fillStyle = p.color;

      if (p.type === "petal") {
        ctx.beginPath();
        ctx.moveTo(0, -p.size);
        ctx.bezierCurveTo(p.size * 0.8, -p.size * 0.5, p.size * 0.8, p.size * 0.5, 0, p.size);
        ctx.bezierCurveTo(-p.size * 0.8, p.size * 0.5, -p.size * 0.8, -p.size * 0.5, 0, -p.size);
        ctx.fill();
      } else if (p.type === "leaf") {
        ctx.beginPath();
        ctx.ellipse(0, 0, p.size * 0.6, p.size * 1.2, 0, 0, Math.PI * 2);
        ctx.fill();
      } else if (p.type === "star" || p.type === "sparkle") {
        ctx.beginPath();
        const s = p.size * 0.8;
        ctx.moveTo(0, -s);
        ctx.quadraticCurveTo(0, 0, s, 0);
        ctx.quadraticCurveTo(0, 0, 0, s);
        ctx.quadraticCurveTo(0, 0, -s, 0);
        ctx.quadraticCurveTo(0, 0, 0, -s);
        ctx.fill();
      } else {
        // Bubbles / Soft Bokeh
        ctx.beginPath();
        ctx.arc(0, 0, p.size * 0.7, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = "rgba(255,255,255,0.6)";
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      ctx.restore();
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.rotation += p.rotationSpeed;

        const dx = p.x - mouseRef.current.x;
        const dy = p.y - mouseRef.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouseRef.current.radius) {
          const force = (mouseRef.current.radius - dist) / mouseRef.current.radius;
          p.x += (dx / dist) * force * 3;
          p.y += (dy / dist) * force * 3;
        }

        if (p.y > height + 20) {
          p.y = -20;
          p.x = Math.random() * width;
        }
        if (p.x > width + 20) {
          p.x = -20;
        } else if (p.x < -20) {
          p.x = width + 20;
        }

        drawParticle(p);
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [palette, ambientEffect]);

  return (
    <canvas
      ref={canvasRef}
      id="ambient-petals-canvas"
      className="fixed inset-0 pointer-events-none z-0 opacity-80"
      aria-hidden="true"
    />
  );
};
