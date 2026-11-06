import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SideBackToTop(): React.JSX.Element {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 10 }}
          transition={{ duration: 0.25 }}
          className="fixed right-3 sm:right-5 top-3 sm:top-5 z-[70]"
        >
          <button
            type="button"
            onClick={scrollToTop}
            data-testid="side-back-to-top"
            aria-label="Back to top"
            className="group flex items-center gap-1 text-[11px] font-mono tracking-widest uppercase text-mut/60 hover:text-accenttext cursor-pointer transition-colors duration-200 select-none bg-transparent border-0 p-1 focus:outline-none"
          >
            {/* Arrow left of text */}
            <span className="text-xs transition-transform duration-200 group-hover:-translate-y-1">←</span>
            <span className="opacity-75 group-hover:opacity-100 transition-opacity ml-1">Back to Top</span>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
