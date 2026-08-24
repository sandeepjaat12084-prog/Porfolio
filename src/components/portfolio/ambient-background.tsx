import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function AmbientBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {/* Interactive mouse spotlight glow */}
      <div
        className="pointer-events-none absolute -inset-px opacity-30 transition-opacity duration-300 hidden md:block"
        style={{
          background: `radial-gradient(650px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(16, 185, 129, 0.08), transparent 80%)`,
        }}
      />

      {/* Floating ambient gradient orb 1 */}
      <motion.div
        animate={{
          x: [0, 50, -30, 0],
          y: [0, -60, 30, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/6 left-1/5 h-[450px] w-[450px] rounded-full bg-primary/10 blur-[130px]"
      />

      {/* Floating ambient gradient orb 2 */}
      <motion.div
        animate={{
          x: [0, -60, 40, 0],
          y: [0, 50, -40, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute top-2/3 right-1/4 h-[500px] w-[500px] rounded-full bg-emerald-500/8 blur-[150px]"
      />

      {/* Floating ambient gradient orb 3 */}
      <motion.div
        animate={{
          x: [0, 40, -40, 0],
          y: [0, -40, 50, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
        className="absolute bottom-10 left-1/3 h-[400px] w-[400px] rounded-full bg-teal-500/6 blur-[140px]"
      />
    </div>
  );
}
