import React from 'react';
import { SURVIVAL_KIT } from '../constants';
import { Droplets, ShieldAlert, ShoppingCart, Smartphone, X } from 'lucide-react';
import { motion } from 'framer-motion';

const iconMap: Record<string, React.ReactNode> = {
  water: <Droplets size={24} />,
  app: <Smartphone size={24} />,
  shield: <ShieldAlert size={24} />,
  cart: <ShoppingCart size={24} />
};

interface SurvivalKitProps {
  onClose: () => void;
}

const SurvivalKit: React.FC<SurvivalKitProps> = ({ onClose }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={{ type: "spring", damping: 25, stiffness: 300 }}
      className="fixed inset-0 z-50 bg-stone-900 flex flex-col"
    >
      <div className="p-6 flex justify-between items-center bg-stone-800 text-white">
        <div>
          <h2 className="text-2xl font-black text-amber-400 uppercase tracking-wider">Kit VanLifer</h2>
          <p className="text-stone-400 text-sm">Manual de supervivencia</p>
        </div>
        <button onClick={onClose} className="bg-stone-700 p-2 rounded-full hover:bg-stone-600 transition">
          <X size={24} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {SURVIVAL_KIT.map((tip, index) => (
          <div key={index} className="bg-stone-800 rounded-2xl p-6 border border-stone-700 shadow-xl">
            <div className="flex items-center gap-4 mb-3">
              <div className="text-amber-400 p-3 bg-stone-900 rounded-xl">
                {iconMap[tip.icon]}
              </div>
              <h3 className="text-xl font-bold text-stone-100 leading-tight">{tip.title}</h3>
            </div>
            <p className="text-stone-300 leading-relaxed pl-[70px]">{tip.content}</p>
          </div>
        ))}
        
        <div className="p-8 text-center opacity-50">
           <p className="text-stone-500 text-xs uppercase tracking-[0.2em]">Slow Travel Philosophy</p>
        </div>
      </div>
    </motion.div>
  );
};

export default SurvivalKit;