import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export const GsapMagneticCursor: React.FC = () => {
  const cursorDotRef = useRef<HTMLDivElement | null>(null);
  const cursorRingRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Only enable on fine pointer / desktop
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const dot = cursorDotRef.current;
    const ring = cursorRingRef.current;
    if (!dot || !ring) return;

    // Quick setters for performant 60fps movement
    const setDotX = gsap.quickSetter(dot, "x", "px");
    const setDotY = gsap.quickSetter(dot, "y", "px");
    const setRingX = gsap.quickSetter(ring, "x", "px");
    const setRingY = gsap.quickSetter(ring, "y", "px");

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setDotX(mouseX);
      setDotY(mouseY);
    };

    // Smooth ticker for the soft trailing ring
    const ticker = gsap.ticker.add(() => {
      const dt = 1.0 - Math.pow(1.0 - 0.25, gsap.ticker.deltaRatio());
      ringX += (mouseX - ringX) * dt;
      ringY += (mouseY - ringY) * dt;
      setRingX(ringX);
      setRingY(ringY);
    });

    // Magnetic interaction on hoverable elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest("button") ||
        target.closest("a") ||
        target.closest("input") ||
        target.closest(".cursor-pointer") ||
        target.closest(".polaroid-card")
      ) {
        gsap.to(ring, {
          scale: 1.8,
          backgroundColor: "rgba(247, 200, 211, 0.4)",
          borderColor: "#B46A72",
          duration: 0.25,
          ease: "power2.out",
        });
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest("button") ||
        target.closest("a") ||
        target.closest("input") ||
        target.closest(".cursor-pointer") ||
        target.closest(".polaroid-card")
      ) {
        gsap.to(ring, {
          scale: 1,
          backgroundColor: "transparent",
          borderColor: "rgba(180, 106, 114, 0.6)",
          duration: 0.25,
          ease: "power2.out",
        });
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      gsap.ticker.remove(ticker);
    };
  }, []);

  return (
    <>
      {/* Inner Dot */}
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 w-2.5 h-2.5 -ml-1.25 -mt-1.25 rounded-full bg-[#B46A72] pointer-events-none z-50 transition-opacity hidden md:block"
        style={{ transform: "translate3d(-100px, -100px, 0)" }}
      />
      {/* Outer Soft Ring */}
      <div
        ref={cursorRingRef}
        className="fixed top-0 left-0 w-8 h-8 -ml-4 -mt-4 rounded-full border border-[#B46A72]/60 pointer-events-none z-50 backdrop-blur-[0.5px] transition-transform hidden md:block"
        style={{ transform: "translate3d(-100px, -100px, 0)" }}
      />
    </>
  );
};
