import { Stage, SurvivalTip, Coordinates } from './types';

export const APP_TITLE = "La Gran Vuelta al Sur";
export const APP_SUBTITLE = "Cazadores de Sol y Piedra";

// Barcelona coordinates for the starting point animation
export const ORIGIN_COORDINATES: Coordinates = { lat: 41.3851, lng: 2.1734 };

export const SURVIVAL_KIT: SurvivalTip[] = [
  {
    title: "El Cartel de Cali... digo, del Agua",
    icon: "water",
    content: "Llevad manguera y adaptadores. En las gasolineras de pueblo, si pones cara de buena gente y echas diésel, te dejan llenar. Preguntad con simpatía (y sonrisa de no haberte duchado en 2 días)."
  },
  {
    title: "Park4Night es la Biblia",
    icon: "app",
    content: "Mirad comentarios de 'ayer'. Si alguien pone 'multa', ¡HUID INSENSATOS! Si pone 'noche tranquila', es vuestro hogar."
  },
  {
    title: "Técnica del Fuerte Playmobil",
    icon: "shield",
    content: "Al ir dos autocaravanas, aparcad en 'L'. Protege del viento y crea un patio privado para las cervezas. Seguridad nivel experto."
  },
  {
    title: "Logística Supermercado",
    icon: "cart",
    content: "Mercadona y Lidl suelen tener parkings grandes. Evitad el centro de las ciudades o acabaréis atascados en una calle medieval diseñada para burros, no para casas con ruedas."
  }
];

export const ROUTE_DATA: Stage[] = [
  {
    id: 1,
    title: "Etapa 1: El Mediterráneo Salvaje",
    subtitle: "Huir del asfalto, tocar arena.",
    stops: [
      {
        id: "s1-1",
        dayRange: "Días 1-2",
        title: "El Delta Infinito",
        location: "Tarragona",
        description: "El clásico para desconectar. Flamencos, arrozales y atardeceres de película.",
        highlight: "Laguna de la Tancada y la Barra del Trabucador (mar a ambos lados).",
        uniqueVibe: "El único lugar donde el horizonte es 50% cielo y 50% espejo.",
        sleepOptionA: "Casa de Fusta (Gratis). Dormir entre arrozales.",
        sleepOptionB: "Parking Eucaliptus (Ojo toldos).",
        routeInfo: "BCN -> Delta (180 km / 2h 15m)",
        secret: "Comprad arroz 'Bomba' en Casa de Fusta. Paella obligatoria al día siguiente.",
        coordinates: { lat: 40.6586, lng: 0.6725 },
        icon: 'water',
        imageUrl: "https://images.unsplash.com/photo-1547974996-0e972e38c5cd?q=80&w=800&auto=format&fit=crop"
      },
      {
        id: "s1-2",
        dayRange: "Día 3",
        title: "La Sierra Virgen",
        location: "Serra d'Irta, Castellón",
        description: "Saltamos Valencia (caos) para ir al último tramo virgen.",
        highlight: "Acantilados sin edificios. Un milagro inmobiliario.",
        uniqueVibe: "Kilómetros de costa sin un solo bloque de apartamentos. Un unicornio geográfico.",
        sleepOptionA: "Cala Mundina (Camino de tierra, id despacio).",
        sleepOptionB: "Parking Playa del Cargador.",
        routeInfo: "Delta -> Alcossebre (80 km / 1h 15m)",
        secret: "Paseo plano al Faro de Irta. Apto para vagos.",
        coordinates: { lat: 40.2638, lng: 0.2974 },
        icon: 'mountain',
        imageUrl: "https://images.unsplash.com/photo-1533591380348-14193f1de18f?q=80&w=800&auto=format&fit=crop"
      },
      {
        id: "s1-3",
        dayRange: "Días 4-5",
        title: "La Meca del Invierno",
        location: "La Azohía, Murcia",
        description: "Aquí empieza el calor real. Un pueblo detenido en los 80.",
        highlight: "Pueblo de pescadores auténtico.",
        uniqueVibe: "El tiempo aquí corre más despacio y la cerveza está siempre más fría.",
        sleepOptionA: "Explanada de La Azohía (Mítico). El panadero te despierta pitando.",
        sleepOptionB: "Puntas de Calnegre (4 casas, literal).",
        routeInfo: "Alcossebre -> La Azohía (320 km / 3.5h). Madrugad.",
        secret: "Siesta obligatoria frente al mar.",
        coordinates: { lat: 37.5622, lng: -1.1738 },
        icon: 'sun',
        imageUrl: "https://images.unsplash.com/photo-1590787994463-e47458cb5b32?q=80&w=800&auto=format&fit=crop"
      }
    ]
  },
  {
    id: 2,
    title: "Etapa 2: Desierto y Trópico",
    subtitle: "Paisajes de película y aguacates.",
    stops: [
      {
        id: "s2-1",
        dayRange: "Días 6-7",
        title: "Cabo de Gata",
        location: "Almería",
        description: "El lugar más bonito de España en invierno. Rollo Far West.",
        highlight: "Playa Genoveses, Arrecife Sirenas, Minas Rodalquilar.",
        uniqueVibe: "Donde Clint Eastwood rodaba westerns y tú rodarás croquetas en la arena.",
        sleepOptionA: "Área de Níjar (Segura y bonita).",
        sleepOptionB: "Agua Amarga (Rambla) o Isleta del Moro (Arriba). Ojo multas en playa.",
        routeInfo: "140 km / 2h de carretera preciosa.",
        secret: "No te hagas el héroe durmiendo en la playa o pagarás la multa.",
        coordinates: { lat: 36.7944, lng: -2.0622 },
        icon: 'sun',
        imageUrl: "https://images.unsplash.com/photo-1563721345593-4a0e281519d0?q=80&w=800&auto=format&fit=crop"
      },
      {
        id: "s2-2",
        dayRange: "Días 8-9",
        title: "Costa Tropical",
        location: "Nerja & Herradura",
        description: "Entramos en zona de chirimoyas. Microclima brutal.",
        highlight: "Cueva de Nerja, Balcón de Europa, Acantilados Maro.",
        uniqueVibe: "El único lugar de Europa donde desayunas mango recién caído del árbol.",
        sleepOptionA: "Área de Salobreña (Gratis y grande).",
        routeInfo: "Ruta costera relajada.",
        secret: "Subid al castillo de Salobreña a pie. Vistas de nieve y mar a la vez.",
        coordinates: { lat: 36.7423, lng: -3.8767 },
        icon: 'water',
        imageUrl: "https://images.unsplash.com/photo-1562678285-d72b25c3427f?q=80&w=800&auto=format&fit=crop"
      }
    ]
  },
  {
    id: 3,
    title: "Etapa 3: El Gran Sur",
    subtitle: "Pueblos blancos y Océano.",
    stops: [
      {
        id: "s3-1",
        dayRange: "Días 10-11",
        title: "La Montaña Mágica",
        location: "Antequera",
        description: "Tortitas de piedra puestas por gigantes.",
        highlight: "El Torcal (Ruta verde 1.5km, fácil).",
        uniqueVibe: "Un paisaje lunar hecho de tortitas de piedra apiladas por gigantes aburridos.",
        sleepOptionA: "Área Antequera (Top 10 España).",
        routeInfo: "Desvío al interior (90km).",
        secret: "Vistas a la Peña de los Enamorados desde el área.",
        coordinates: { lat: 37.0179, lng: -4.5615 },
        icon: 'mountain',
        imageUrl: "https://images.unsplash.com/photo-1567609789366-38d58153c9b7?q=80&w=800&auto=format&fit=crop"
      },
      {
        id: "s3-2",
        dayRange: "Día 12",
        title: "Pueblo en la Roca",
        location: "Setenil de las Bodegas",
        description: "Las casas no tienen tejado, usan la montaña.",
        highlight: "Callejear bajo las rocas.",
        uniqueVibe: "El pueblo que decidió que construir tejados era una pérdida de tiempo y dinero.",
        sleepOptionA: "Parking del Colegio (Zona Alta).",
        routeInfo: "60km de curvas bonitas.",
        secret: "¡NO entréis al centro con la autocaravana o saldréis en las noticias!",
        coordinates: { lat: 36.8624, lng: -5.1813 },
        icon: 'culture',
        imageUrl: "https://images.unsplash.com/photo-1575402434522-86401037346f?q=80&w=800&auto=format&fit=crop"
      },
      {
        id: "s3-3",
        dayRange: "Días 13-15",
        title: "La Libertad",
        location: "Tarifa & Bolonia",
        description: "El paraíso surfero. Vistas a África.",
        highlight: "Duna de Bolonia, Ruinas Baelo Claudia.",
        uniqueVibe: "Donde el viento tiene personalidad jurídica y las vacas toman el sol en la playa.",
        sleepOptionA: "Tarifa: Playa Los Lances.",
        sleepOptionB: "Bolonia: Ojo multas nocturnas, mejor dormir en Tarifa.",
        routeInfo: "Bajada por la 'Ruta del Toro'.",
        secret: "El viento aquí no despeina, te hace un lifting.",
        coordinates: { lat: 36.0127, lng: -5.6027 },
        icon: 'sun',
        imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop"
      }
    ]
  },
  {
    id: 4,
    title: "Etapa 4: Vuelta Cultural",
    subtitle: "Subimos rápido pero viendo joyas.",
    stops: [
      {
        id: "s4-1",
        dayRange: "Día 16",
        title: "La Mezquita",
        location: "Córdoba",
        description: "Historia pura.",
        highlight: "Mezquita-Catedral y Puente Romano.",
        uniqueVibe: "Un bosque infinito de columnas donde te sientes pequeño y culto a la vez.",
        sleepOptionA: "Parking del Arenal (Tierra/asfalto gigante).",
        routeInfo: "280km por Autovía A-4.",
        secret: "Cruzas el puente y estás en la Mezquita en 10 min.",
        coordinates: { lat: 37.8882, lng: -4.7794 },
        icon: 'culture',
        imageUrl: "https://images.unsplash.com/photo-1555881400-74d7acaacd81?q=80&w=800&auto=format&fit=crop"
      },
      {
        id: "s4-2",
        dayRange: "Día 17",
        title: "Las Cuevas",
        location: "Guadix",
        description: "La gente vive bajo tierra, como Hobbits andaluces.",
        highlight: "Barrio de las Cuevas.",
        uniqueVibe: "Vivir bajo tierra, fresquito en verano, calentito en invierno. Los Hobbits sabían cosas.",
        sleepOptionA: "Parking Guadix (Estación).",
        routeInfo: "200km.",
        secret: "Excelente temperatura dentro de las cuevas todo el año.",
        coordinates: { lat: 37.3013, lng: -3.1408 },
        icon: 'mountain',
        imageUrl: "https://images.unsplash.com/photo-1623168877395-8a9d02c63836?q=80&w=800&auto=format&fit=crop"
      },
      {
        id: "s4-3",
        dayRange: "Día 18",
        title: "El Oasis",
        location: "Elche",
        description: "Patrimonio UNESCO. Palmeras everywhere.",
        highlight: "El Palmeral.",
        uniqueVibe: "Hay más palmeras que personas. Literalmente.",
        sleepOptionA: "Área Elche o San Fulgencio.",
        routeInfo: "250km.",
        secret: "Ideal para comprar dátiles.",
        coordinates: { lat: 38.2653, lng: -0.6988 },
        icon: 'sun',
        imageUrl: "https://images.unsplash.com/photo-1549646467-f58c7340b497?q=80&w=800&auto=format&fit=crop"
      },
      {
        id: "s4-4",
        dayRange: "Días 19-20",
        title: "Último Suspiro",
        location: "BCN",
        description: "Vuelta a la realidad.",
        highlight: "Parada técnica en Peñíscola si hay cansancio.",
        uniqueVibe: "El dramático retorno al tráfico, al estrés y al café caro.",
        sleepOptionA: "Tu cama.",
        routeInfo: "500km a casa.",
        secret: "Llorar un poquito al llegar es normal.",
        coordinates: { lat: 41.3851, lng: 2.1734 },
        icon: 'home',
        imageUrl: "https://images.unsplash.com/photo-1583422409516-2895a77efded?q=80&w=800&auto=format&fit=crop"
      }
    ]
  }
];