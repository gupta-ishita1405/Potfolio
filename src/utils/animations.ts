import gsap from "gsap";
import confetti from "canvas-confetti";

/**
 * Trigger soft pastel celebratory confetti
 */
export const triggerPastelConfetti = () => {
  confetti({
    particleCount: 50,
    spread: 60,
    origin: { y: 0.8 },
    colors: ["#C4B5FD", "#FECDD3", "#86EFAC", "#FEF08A", "#BAE6FD"],
  });
};

/**
 * Hook to attach magnetic physics to any DOM element using GSAP
 */
export const attachMagneticEffect = (el: HTMLElement | null, strength: number = 0.3) => {
  if (!el) return;

  const handleMouseMove = (e: MouseEvent) => {
    const rect = el.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = (e.clientX - centerX) * strength;
    const deltaY = (e.clientY - centerY) * strength;

    gsap.to(el, {
      x: deltaX,
      y: deltaY,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(el, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: "elastic.out(1, 0.4)",
    });
  };

  el.addEventListener("mousemove", handleMouseMove);
  el.addEventListener("mouseleave", handleMouseLeave);

  return () => {
    el.removeEventListener("mousemove", handleMouseMove);
    el.removeEventListener("mouseleave", handleMouseLeave);
  };
};
