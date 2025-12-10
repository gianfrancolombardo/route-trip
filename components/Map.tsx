import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap, Polyline } from 'react-leaflet';
import L from 'leaflet';
import { ROUTE_DATA, ORIGIN_COORDINATES } from '../constants';
import { Stop, Coordinates } from '../types';
import { renderToStaticMarkup } from 'react-dom/server';
import { Sun, Mountain, Waves, Landmark, Home, MapPin } from 'lucide-react';

// Helper to get the Lucide icon component based on string type
const getIconComponent = (type: string, size: number = 14, color: string = 'white') => {
  switch(type) {
    case 'sun': return <Sun size={size} color={color} strokeWidth={2.5} />;
    case 'mountain': return <Mountain size={size} color={color} strokeWidth={2.5} />;
    case 'water': return <Waves size={size} color={color} strokeWidth={2.5} />;
    case 'culture': return <Landmark size={size} color={color} strokeWidth={2.5} />;
    case 'home': return <Home size={size} color={color} strokeWidth={2.5} />;
    default: return <MapPin size={size} color={color} strokeWidth={2.5} />;
  }
};

const getColorClass = (type: string) => {
  switch(type) {
    case 'sun': return 'bg-amber-500 shadow-amber-500/50';
    case 'mountain': return 'bg-stone-600 shadow-stone-600/50';
    case 'water': return 'bg-teal-500 shadow-teal-500/50';
    case 'culture': return 'bg-rose-500 shadow-rose-500/50';
    case 'home': return 'bg-indigo-500 shadow-indigo-500/50';
    default: return 'bg-gray-500 shadow-gray-500/50';
  }
};

// Create a modern icon-based marker
const createCustomMarker = (stop: Stop, isActive: boolean) => {
  const isLarge = isActive;
  const size = isLarge ? 50 : 36;
  const iconSize = isLarge ? 24 : 18;
  const colorClass = getColorClass(stop.icon);
  
  const iconMarkup = renderToStaticMarkup(
    <div className={`marker-pop relative flex items-center justify-center transition-all duration-500 ease-out`}>
      
      {/* Pulse effect for active marker */}
      {isActive && (
        <div className={`absolute inset-0 rounded-full animate-ping opacity-75 ${colorClass.split(' ')[0]}`}></div>
      )}

      {/* The Pin */}
      <div 
        className={`
          relative rounded-full flex items-center justify-center text-white shadow-lg border-2 border-white
          ${colorClass} transition-all duration-300
        `}
        style={{ 
          width: `${size}px`, 
          height: `${size}px`,
        }}
      >
        {getIconComponent(stop.icon, iconSize)}
        
        {/* Little triangle arrow at bottom */}
        <div className={`
          absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 
          ${colorClass.split(' ')[0]} border-r border-b border-white/20
        `}></div>
      </div>
    </div>
  );

  return L.divIcon({
    html: iconMarkup,
    className: 'custom-marker-icon', // see index.html for styles
    iconSize: [size, size + 10], 
    iconAnchor: [size / 2, size + 5],
    popupAnchor: [0, -(size + 5)]
  });
};

const MapController = ({ focusCoords }: { focusCoords: Coordinates }) => {
  const map = useMap();
  
  useEffect(() => {
    if (focusCoords) {
      map.flyTo([focusCoords.lat, focusCoords.lng], 10, {
        animate: true,
        duration: 2.5, // Slower duration for a more cinematic "flying" effect
        easeLinearity: 0.25
      });
    }
  }, [focusCoords, map]);
  
  return null;
};

interface MapProps {
  activeStop: Stop | null;
  onStopClick: (stop: Stop) => void;
  focusCoordinates: Coordinates;
}

const MapComponent: React.FC<MapProps> = ({ activeStop, onStopClick, focusCoordinates }) => {
  // Flatten stops to create polyline
  const allStops = ROUTE_DATA.flatMap(stage => stage.stops);
  const routePositions = allStops.map(stop => [stop.coordinates.lat, stop.coordinates.lng] as [number, number]);
  
  // Add Origin to the polyline for visualization
  const fullRoutePositions = [[ORIGIN_COORDINATES.lat, ORIGIN_COORDINATES.lng], ...routePositions] as [number, number][];

  return (
    <div className="w-full h-full bg-stone-200 relative z-0">
      <MapContainer 
        center={[ORIGIN_COORDINATES.lat, ORIGIN_COORDINATES.lng]} // Start at BCN
        zoom={11} 
        className="w-full h-full" 
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        />
        
        <MapController focusCoords={focusCoordinates} />

        {/* Route Line (Dashed) */}
        <Polyline 
          positions={fullRoutePositions} 
          pathOptions={{ color: '#78716c', weight: 3, opacity: 0.6, dashArray: '10, 10' }} 
        />
        
        {allStops.map((stop) => (
          <Marker 
            key={stop.id} 
            position={[stop.coordinates.lat, stop.coordinates.lng]}
            icon={createCustomMarker(stop, activeStop?.id === stop.id)}
            zIndexOffset={activeStop?.id === stop.id ? 1000 : 1}
            eventHandlers={{
              click: () => onStopClick(stop),
            }}
          >
          </Marker>
        ))}
      </MapContainer>
      
      {/* Gradient Vignette */}
      <div className="absolute inset-0 pointer-events-none z-[400] shadow-[inset_0_0_60px_rgba(0,0,0,0.1)]"></div>
    </div>
  );
};

export default MapComponent;