export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export const services: Service[] = [
  {
    id: 'zaklady',
    title: 'Základy a zemní práce',
    description: 'Kompletní příprava staveniště, výkopy, základové konstrukce a izolace. Zajišťujeme stabilní základ pro váš dům.',
    icon: `<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>`,
    features: ['Výkopové práce', 'Základové desky', 'Izolace proti vodě', 'Drenáže']
  },
  {
    id: 'hruba-stavba',
    title: 'Hrubá stavba',
    description: 'Realizace nosných konstrukcí, zdění, stropů a schodišť. Používáme kvalitní materiály a moderní technologie.',
    icon: `<rect width="18" height="18" x="3" y="3" rx="2"></rect><path d="M3 9h18"></path><path d="M9 21V9"></path>`,
    features: ['Zdění z cihel a tvárnic', 'Monolitické konstrukce', 'Stropní panely', 'Schodiště']
  },
  {
    id: 'strechy',
    title: 'Střechy a krovy',
    description: 'Návrh a realizace střešních konstrukcí všech typů. Od klasických sedlových střech po moderní ploché střechy.',
    icon: `<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>`,
    features: ['Dřevěné krovy', 'Střešní krytiny', 'Izolace střech', 'Klempířské práce']
  },
  {
    id: 'zatepleni',
    title: 'Zateplení a fasády',
    description: 'Kontaktní zateplovací systémy, moderní omítky a fasádní obklady. Zvyšte energetickou úspornost vašeho domu.',
    icon: `<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>`,
    features: ['Kontaktní zateplení', 'Minerální omítky', 'Obkladové systémy', 'Nátěry fasád']
  },
  {
    id: 'rekonstrukce',
    title: 'Rekonstrukce a přestavby',
    description: 'Komplexní rekonstrukce starších objektů, přístavby a nástavby. Respektujeme původní charakter budov.',
    icon: `<path d="M12 3v18"></path><path d="m8 9-4 4 4 4"></path><path d="M16 15l4-4-4-4"></path>`,
    features: ['Rekonstrukce domů', 'Přístavby', 'Nástavby podkroví', 'Sanace vlhkosti']
  },
  {
    id: 'kompletace',
    title: 'Kompletace staveb',
    description: 'Dokončovací práce, instalace, podlahy a malířské práce. Realizace domů na klíč od A do Z.',
    icon: `<path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path d="m9 12 2 2 4-4"></path>`,
    features: ['Elektroinstalace', 'Voda a topení', 'Podlahy', 'Malířské práce']
  }
];
