import React, { useState } from 'react';
import { ROUTE_DATA, APP_TITLE, APP_SUBTITLE, ORIGIN_COORDINATES } from './constants';
import MapComponent from './components/Map';
import StopOverlay from './components/StopOverlay';
import SurvivalKit from './components/SurvivalKit';
import WelcomeScreen from './components/WelcomeScreen';
import { Stop } from './types';
import { Info, List as ListIcon, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import StageCard from './components/StageCard';

function App() {
  // Flatten all stops into a single array for easier navigation
  const allStops = ROUTE_DATA.flatMap(stage => stage.stops);
  
  const [currentStopIndex, setCurrentStopIndex] = useState(0);
  const [showSurvival, setShowSurvival] = useState(false);
  const [showFullList, setShowFullList] = useState(false);
  
  // State to track if the journey has "Started" (left the welcome screen)
  const [hasStarted, setHasStarted] = useState(false);
  
  // If not started, focus on Origin (BCN), otherwise focus on the active stop
  const activeStop = allStops[currentStopIndex];
  const focusCoordinates = hasStarted ? activeStop.coordinates : ORIGIN_COORDINATES;

  // Handler for map markers
  const handleMarkerClick = (stop: Stop) => {
    // If clicked before starting (edge case), start the journey
    if (!hasStarted) setHasStarted(true);

    const index = allStops.findIndex(s => s.id === stop.id);
    if (index !== -1) {
      setCurrentStopIndex(index);
      setShowFullList(false); // Close list if open
    }
  };

  const nextStop = () => {
    if (currentStopIndex < allStops.length - 1) {
      setCurrentStopIndex(prev => prev + 1);
    }
  };

  const prevStop = () => {
    if (currentStopIndex > 0) {
      setCurrentStopIndex(prev => prev - 1);
    }
  };

  const startJourney = () => {
    setHasStarted(true);
    // currentStopIndex is already 0, so the map will animate from Origin -> Stop 0
  };

  return (
    <div className="h-screen w-full flex flex-col bg-stone-50 overflow-hidden relative">
      
      {/* Welcome / Landing Screen */}
      <AnimatePresence>
        {!hasStarted && (
          <WelcomeScreen onStart={startJourney} />
        )}
      </AnimatePresence>

      {/* Top Header - Floating (Only visible after start) */}
      <motion.div 
        initial={{ y: -100 }}
        animate={{ y: hasStarted ? 0 : -100 }}
        className="absolute top-0 left-0 right-0 z-30 p-4 pointer-events-none"
      >
        <div className="flex justify-between items-start pointer-events-auto">
           <div className="bg-stone-900/90 backdrop-blur text-white px-5 py-3 rounded-2xl shadow-xl max-w-[70%]">
              <p className="text-amber-400 text-[10px] font-bold tracking-[0.2em] uppercase mb-0.5">{APP_SUBTITLE}</p>
              <h1 className="text-lg font-black leading-none">{APP_TITLE}</h1>
           </div>

           <div className="flex gap-2">
             <button 
               onClick={() => setShowFullList(true)}
               className="bg-white/90 backdrop-blur p-3 rounded-full text-stone-800 shadow-xl border border-white/20 transition-transform hover:scale-105"
             >
               <ListIcon size={20} />
             </button>
             <button 
               onClick={() => setShowSurvival(true)}
               className="bg-amber-500 text-white p-3 rounded-full shadow-xl shadow-amber-500/20 transition-transform hover:scale-105"
             >
               <Info size={20} />
             </button>
           </div>
        </div>
      </motion.div>

      {/* Main Map Area (Fullscreen) */}
      <div className="absolute inset-0 z-0">
        <MapComponent 
          activeStop={hasStarted ? activeStop : null} 
          focusCoordinates={focusCoordinates}
          onStopClick={handleMarkerClick} 
        />
      </div>

      {/* Active Stop Overlay Card */}
      <AnimatePresence>
        {hasStarted && !showFullList && !showSurvival && (
          <StopOverlay 
            stop={activeStop} 
            currentStep={currentStopIndex} 
            totalSteps={allStops.length} 
            onNext={nextStop} 
            onPrev={prevStop} 
          />
        )}
      </AnimatePresence>

      {/* Full List Modal */}
      <AnimatePresence>
        {showFullList && (
          <motion.div 
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-50 bg-stone-100 flex flex-col"
          >
             <div className="p-6 bg-white shadow-sm flex justify-between items-center z-10">
               <h2 className="text-xl font-bold text-stone-800">Itinerario Completo</h2>
               <button onClick={() => setShowFullList(false)} className="bg-stone-100 p-2 rounded-full">
                 <X size={20} />
               </button>
             </div>
             <div className="flex-1 overflow-y-auto p-4 pb-20 no-scrollbar">
                {ROUTE_DATA.map((stage) => (
                  <div key={stage.id} className="mb-6">
                     <div className="sticky top-0 bg-stone-100/95 backdrop-blur py-2 z-10 mb-2 border-b border-stone-200">
                       <h3 className="font-bold text-stone-500 uppercase tracking-wider text-xs">
                         Etapa {stage.id}: {stage.title}
                       </h3>
                     </div>
                     {stage.stops.map(stop => (
                       <StageCard 
                         key={stop.id}
                         stop={stop}
                         isActive={activeStop.id === stop.id}
                         onClick={() => {
                           handleMarkerClick(stop);
                           setShowFullList(false);
                         }}
                       />
                     ))}
                  </div>
                ))}
             </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Survival Kit Modal */}
      <AnimatePresence>
        {showSurvival && <SurvivalKit onClose={() => setShowSurvival(false)} />}
      </AnimatePresence>
    </div>
  );
}

export default App;