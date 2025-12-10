import React from 'react';
import { Stop } from '../types';
import { MapPin, Moon, Navigation, Lightbulb, ChevronDown, ExternalLink, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

interface StageCardProps {
  stop: Stop;
  isActive: boolean;
  onClick: () => void;
}

const StageCard: React.FC<StageCardProps> = ({ stop, isActive, onClick }) => {
  
  const handleGoogleSearch = (e: React.MouseEvent) => {
    e.stopPropagation();
    const query = encodeURIComponent(`qué ver en ${stop.title} ${stop.location} turismo`);
    window.open(`https://www.google.com/search?q=${query}`, '_blank');
  };

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onClick={onClick}
      className={`
        relative overflow-hidden rounded-2xl mb-4 transition-all duration-300 cursor-pointer group
        ${isActive 
          ? 'bg-white shadow-2xl shadow-stone-900/10 scale-[1.02] ring-2 ring-amber-400' 
          : 'bg-white border border-stone-100 hover:border-amber-300 hover:shadow-lg'
        }
      `}
    >
      {/* Image Header */}
      <div className="relative h-32 w-full overflow-hidden">
        <div className="absolute inset-0 bg-stone-900/20 group-hover:bg-transparent transition-all z-10"></div>
        <img 
          src={stop.imageUrl} 
          alt={stop.title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
        />
        
        <div className="absolute top-3 left-3 z-20">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-stone-800 text-[10px] font-black uppercase rounded-full tracking-wider shadow-sm">
            {stop.dayRange}
          </span>
        </div>

        {/* Title overlay on image */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-stone-900/80 to-transparent z-20">
          <h3 className="text-xl font-extrabold text-white leading-tight shadow-black drop-shadow-md">{stop.title}</h3>
          <div className="flex items-center text-stone-200 text-xs mt-0.5">
            <MapPin size={12} className="mr-1 text-amber-400" />
            {stop.location}
          </div>
        </div>
      </div>

      <div className="p-4">
        {isActive ? (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="space-y-4 text-sm"
          >
            {/* Unique Vibe */}
            <div className="flex gap-2 items-start bg-amber-50 p-2.5 rounded-lg border border-amber-100/50">
               <Sparkles size={16} className="text-amber-500 shrink-0 mt-0.5" />
               <p className="text-xs font-bold text-amber-800">{stop.uniqueVibe}</p>
            </div>

            <div className="bg-stone-50 p-3 rounded-xl border border-stone-100 text-stone-800">
               <p className="font-medium italic leading-relaxed">"{stop.description}"</p>
            </div>

            <div className="grid gap-3">
               <div className="flex items-start gap-3">
                  <div className="bg-teal-100 p-2 rounded-lg text-teal-700 mt-1 shrink-0">
                      <Navigation size={16} />
                  </div>
                  <div>
                      <h4 className="font-bold text-stone-800">Ruta</h4>
                      <p className="text-stone-600 leading-snug">{stop.routeInfo}</p>
                  </div>
               </div>

               <div className="flex items-start gap-3">
                  <div className="bg-indigo-100 p-2 rounded-lg text-indigo-700 mt-1 shrink-0">
                      <Moon size={16} />
                  </div>
                  <div>
                      <h4 className="font-bold text-stone-800">Dónde Dormir</h4>
                      <p className="text-stone-600 mb-1 leading-snug">{stop.sleepOptionA}</p>
                      {stop.sleepOptionB && <p className="text-stone-500 text-xs">{stop.sleepOptionB}</p>}
                  </div>
               </div>

               <div className="flex items-start gap-3">
                  <div className="bg-rose-100 p-2 rounded-lg text-rose-700 mt-1 shrink-0">
                      <Lightbulb size={16} />
                  </div>
                  <div>
                      <h4 className="font-bold text-stone-800">Secreto</h4>
                      <p className="text-stone-600 leading-snug">{stop.secret}</p>
                  </div>
               </div>
            </div>

            <button 
                onClick={handleGoogleSearch}
                className="w-full py-3 mt-2 bg-white border border-stone-200 text-stone-600 rounded-xl text-xs font-bold uppercase tracking-wide flex items-center justify-center gap-2 hover:bg-stone-50 hover:text-stone-900 transition-colors shadow-sm"
             >
                <span>Ver más info</span>
                <ExternalLink size={14} />
             </button>
          </motion.div>
        ) : (
          <div className="flex justify-between items-center text-stone-400">
            <p className="text-xs line-clamp-1">{stop.description.substring(0, 50)}...</p>
            <ChevronDown size={16} />
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default StageCard;