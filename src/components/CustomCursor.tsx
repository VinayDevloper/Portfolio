import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor(): React.JSX.Element | null {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  const rx = useSpring(x, {
    stiffness: 220,
    damping: 24,
    mass: 0.55
  });

  const ry = useSpring(y, {
    stiffness: 220,
    damping: 24,
    mass: 0.55
  });

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return undefined;
    setEnabled(true);

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);

      const t = e.target instanceof Element ? e.target.closest("a,button,[data-hover]") : null;
      setHovering(!!t);
    };

    const leave = () => setVisible(false);

    window.addEventListener("mousemove", move);
    document.documentElement.addEventListener("mouseleave", leave);

    return () => {
      window.removeEventListener("mousemove", move);
      document.documentElement.removeEventListener("mouseleave", leave);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        data-testid="cursor-dot"
        className="fixed top-0 left-0 z-[100] pointer-events-none w-1.5 h-1.5 rounded-full bg-lime"
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
          opacity: visible ? 1 : 0
        }}
      />
      <motion.div
        data-testid="cursor-ring"
        className="fixed top-0 left-0 z-[100] pointer-events-none w-9 h-9 rounded-full border"
        style={{
          x: rx,
          y: ry,
          translateX: "-50%",
          translateY: "-50%",
          borderColor: "var(--faint)",
          mixBlendMode: "difference"
        }}
        animate={{
          scale: hovering ? 1.9 : 1,
          opacity: visible ? (hovering ? 1 : 0.55) : 0
        }}
        transition={{
          duration: 0.25,
          ease: "easeOut"
        }}
      />
    </>
  );
}
