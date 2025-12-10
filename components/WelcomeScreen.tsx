import React from 'react';
import { motion } from 'framer-motion';
import { APP_TITLE, APP_SUBTITLE } from '../constants';
import { Navigation, Sun } from 'lucide-react';

interface WelcomeScreenProps {
  onStart: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, pointerEvents: 'none' }}
      transition={{ duration: 0.8 }}
      className="absolute inset-0 z-[1000] bg-stone-900 flex flex-col items-center justify-center text-center p-8 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-amber-500 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal-500 rounded-full blur-[120px]"></div>
      </div>

      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="relative z-10"
      >
        <div className="mb-6 inline-block bg-stone-800 p-4 rounded-full border border-stone-700 shadow-2xl">
          <Sun size={48} className="text-amber-500" />
        </div>
        
        <h2 className="text-amber-400 font-bold tracking-[0.3em] uppercase mb-4 text-sm md:text-base">
          {APP_SUBTITLE}
        </h2>
        
        <h1 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight max-w-2xl">
          {APP_TITLE}
        </h1>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onStart}
          className="group relative px-8 py-4 bg-amber-500 text-stone-900 text-lg font-bold uppercase tracking-widest rounded-full shadow-xl shadow-amber-500/20 hover:shadow-amber-500/40 transition-all flex items-center gap-3 mx-auto"
        >
          <span>Iniciar Ruta</span>
          <Navigation size={20} className="group-hover:translate-x-1 transition-transform" />
        </motion.button>
        
        <p className="mt-8 text-stone-500 text-xs tracking-wider">
          20 DÍAS · 2000 KM · 0 PRISAS
        </p>
      </motion.div>
    </motion.div>
  );
};

export default WelcomeScreen;