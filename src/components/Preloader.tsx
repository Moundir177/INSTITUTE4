import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-white"
        >
          <div className="flex flex-col items-center">
            <div className="relative w-16 h-16">
              <motion.div
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
                className="absolute inset-0 bg-gradient-navy rounded-full flex items-center justify-center shadow-navy"
              >
                <span className="text-white font-bold text-2xl">BI</span>
              </motion.div>
              <motion.div
                initial={{ scale: 1, opacity: 0.7 }}
                animate={{ scale: [1, 1.5, 1], opacity: [0.7, 0, 0.7] }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.2
                }}
                className="absolute top-0 right-0 w-4 h-4 bg-red rounded-full border-2 border-white"
              ></motion.div>
            </div>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="h-1 bg-gradient-gold mt-6 rounded-full w-36"
            ></motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}; 