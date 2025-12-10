import React from 'react';
import { Stop } from '../types';
import { MapPin, Navigation, Moon, Lightbulb, ChevronRight, ChevronLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface StopOverlayProps {
  stop: Stop;
  currentStep: number;
  totalSteps: number;
  onNext: () => void;
  onPrev: () => void;
}

const StopOverlay: React.FC<StopOverlayProps> = ({ stop, currentStep, totalSteps, onNext, onPrev }) => {
  return (
    <div className="absolute bottom-0 left-0 right-0 z-[500] p-4 pb-6">
      <motion.div 
        key={stop.id}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden border border-white/20"
      >
        {/* Progress Bar */}
        <div className="w-full h-1 bg-stone-100 flex">
          <div 
            className="h-full bg-amber-500 transition-all duration-500" 
            style={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
          />
        </div>

        <div className="p-5">
          {/* Header */}
          <div className="flex justify-between items-start mb-3">
             <div>
               <span className="text-amber-500 text-xs font-black uppercase tracking-widest">{stop.dayRange}</span>
               <h2 className="text-2xl font-black text-stone-800 leading-none">{stop.title}</h2>
               <div className="flex items-center text-stone-500 text-sm mt-1">
                 <MapPin size={14} className="mr-1" />
                 {stop.location}
               </div>
             </div>
             <div className="bg-stone-100 text-stone-500 text-xs font-bold px-2 py-1 rounded-full">
               {currentStep + 1} / {totalSteps}
             </div>
          </div>

          {/* Content Scroller */}
          <div className="max-h-[30vh] overflow-y-auto pr-1 space-y-3 no-scrollbar mb-4">
             <p className="text-stone-600 italic">"{stop.description}"</p>
             
             <div className="bg-stone-50 p-3 rounded-xl space-y-2">
                <div className="flex gap-2 items-start text-sm text-stone-700">
                    <Navigation size={16} className="text-teal-500 shrink-0 mt-0.5" />
                    <span>{stop.routeInfo}</span>
                </div>
                <div className="flex gap-2 items-start text-sm text-stone-700">
                    <Moon size={16} className="text-indigo-500 shrink-0 mt-0.5" />
                    <span className="truncate">{stop.sleepOptionA}</span>
                </div>
                <div className="flex gap-2 items-start text-sm text-stone-700">
                    <Lightbulb size={16} className="text-amber-500 shrink-0 mt-0.5" />
                    <span className="text-amber-700 font-medium">{stop.secret}</span>
                </div>
             </div>
          </div>

          {/* Controls */}
          <div className="flex justify-between items-center gap-4">
            <button 
              onClick={onPrev}
              disabled={currentStep === 0}
              className={`p-4 rounded-full flex items-center justify-center transition-colors ${currentStep === 0 ? 'text-stone-300 bg-stone-100' : 'bg-stone-200 text-stone-700 hover:bg-stone-300'}`}
            >
              <ChevronLeft size={24} />
            </button>
            
            <div className="flex-1 text-center">
              <span className="text-xs font-bold text-stone-400 uppercase tracking-widest">Navegar Ruta</span>
            </div>

            <button 
              onClick={onNext}
              disabled={currentStep === totalSteps - 1}
              className={`p-4 rounded-full flex items-center justify-center transition-all shadow-lg shadow-amber-500/20 ${currentStep === totalSteps - 1 ? 'text-stone-300 bg-stone-100' : 'bg-amber-500 text-white hover:bg-amber-600'}`}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default StopOverlay;