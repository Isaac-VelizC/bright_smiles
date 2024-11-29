import React from "react";
import { motion } from "framer-motion";

const Preloader: React.FC<{ onAnimationComplete: () => void }> = ({ onAnimationComplete }) => {
  return (
    <motion.div
      id="preloader"
      initial={{ opacity: 1, scale: 1 }} // Estado inicial
      animate={{ opacity: 0, scale: 0.9 }} // Animación al desmontar
      transition={{ duration: 6 }} // Duración de la animación
      onAnimationComplete={onAnimationComplete} // Llamado al completar
      className="fixed flex flex-wrap justify-center items-center z-[500] h-screen w-full"
    >
      <div className="flex-col gap-4 w-full flex items-center justify-center">
        <div className="w-20 h-20 border-4 border-transparent text-4xl animate-spin flex items-center justify-center border-t-secondary rounded-full">
          <div className="w-16 h-16 border-4 border-transparent text-2xl animate-spin flex items-center justify-center border-t-secondary rounded-full"></div>
        </div>
      </div>
    </motion.div>
  );
};

export default Preloader;
