export interface Coordinates {
  lat: number;
  lng: number;
}

export interface Stop {
  id: string;
  dayRange: string;
  title: string;
  location: string;
  description: string;
  highlight: string;
  uniqueVibe: string; // New field for the unique characteristic phrase
  sleepOptionA: string;
  sleepOptionB?: string;
  routeInfo: string;
  secret: string;
  coordinates: Coordinates;
  icon: 'sun' | 'mountain' | 'water' | 'culture' | 'home';
  imageUrl: string;
}

export interface Stage {
  id: number;
  title: string;
  subtitle: string;
  stops: Stop[];
}

export interface SurvivalTip {
  title: string;
  icon: string;
  content: string;
}