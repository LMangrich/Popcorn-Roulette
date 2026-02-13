export interface Movie {
  id: number;
  title_pt_br: string;
  title: string;
  originalTitle?: string;
  countries: string[];
  ageRating: string;
  genres: string[];
  imdbRating?: string;
  duration?: number;
  year?: number;
  directors: string[];
  cast: Array<{ name: string; role: string }>;
  whereToWatch: string[];
  posterUrl?: string;
  synopsis?: string;
  backdrop?: string;
  rating?: number;
  moods?: string[];
  language?: string;
  certification?: string;
  poster?: string;
  director?: string;
}

export const GENRE_MAP: Record<string, string> = {
  "Ação": "Action",
  "Aventura": "Adventure",
  "Animação": "Animation",
  "Comédia": "Comedy",
  "Crime": "Crime",
  "Documentário": "Documentary",
  "Drama": "Drama",
  "Família": "Family",
  "Fantasia": "Fantasy",
  "História": "History",
  "Terror": "Horror",
  "Música": "Music",
  "Mistério": "Mystery",
  "Romance": "Romance",
  "Ficção Científica": "Science Fiction",
  "Suspense": "Thriller",
  "Guerra": "War",
  "Faroeste": "Western",
};

export const GENRE_MAP_REVERSE: Record<string, string> = {
  "Action": "Ação",
  "Adventure": "Aventura",
  "Animation": "Animação",
  "Comedy": "Comédia",
  "Crime": "Crime",
  "Documentary": "Documentário",
  "Drama": "Drama",
  "Family": "Família",
  "Fantasy": "Fantasia",
  "History": "História",
  "Horror": "Terror",
  "Music": "Música",
  "Mystery": "Mistério",
  "Romance": "Romance",
  "Science Fiction": "Ficção Científica",
  "Thriller": "Suspense",
  "War": "Guerra",
  "Western": "Faroeste",
};

export const genres = [
  "Ação",
  "Aventura",
  "Animação",
  "Comédia",
  "Crime",
  "Documentário",
  "Drama",
  "Família",
  "Fantasia",
  "História",
  "Terror",
  "Música",
  "Mistério",
  "Romance",
  "Ficção Científica",
  "Suspense",
  "Guerra",
  "Faroeste",
] as const;

export type Genre = (typeof genres)[number];

export const streamingPlatforms = [
  "Netflix",
  "Amazon Prime Video",
  "Disney Plus",
  "HBO Max",
  "Hulu",
  "Globoplay",
  "Apple TV",
  "Google Play Movies",
  "Claro video",
  "Looke",
  "MUBI",
  "Crunchyroll",
] as const;

export type StreamingPlatform = typeof streamingPlatforms[number];

export const PLATFORM_URLS: Record<string, string> = {
  "Netflix": "https://www.netflix.com/",
  "Amazon Prime Video": "https://www.primevideo.com/",
  "Disney+": "https://www.disneyplus.com/",
  "HBO Max": "https://www.max.com/",
  "Hulu": "https://www.hulu.com/",
  "Globoplay": "https://globoplay.globo.com/",
  "Apple TV": "https://tv.apple.com/",
  "Google Play Movies": "https://play.google.com/store/movies",
  "Claro video": "https://www.clarovideo.com/",
  "Looke": "https://www.looke.com.br/",
  "MUBI": "https://mubi.com/",
  "Crunchyroll": "https://www.crunchyroll.com/",
};

export const certifications = [
  "G",
  "PG",
  "PG-13",
  "R",
  "NC-17",
] as const;

export type Certification = typeof certifications[number];

export const COUNTRY_MAP: Record<string, string> = {
  "Estados Unidos": "USA",
  "Brasil": "Brazil",
  "Coreia do Sul": "South Korea",
  "Reino Unido": "UK",
  "França": "France",
  "Japão": "Japan",
  "Canadá": "Canada",
  "México": "Mexico",
  "Argentina": "Argentina",
  "Colômbia": "Colombia",
  "Alemanha": "Germany",
  "Itália": "Italy",
  "Espanha": "Spain",
  "Portugal": "Portugal",
  "Irlanda": "Ireland",
  "Suécia": "Sweden",
  "Noruega": "Norway",
  "Dinamarca": "Denmark",
  "Holanda": "Netherlands",
  "China": "China",
  "Índia": "India",
  "Hong Kong": "Hong Kong",
  "Tailândia": "Thailand",
  "Austrália": "Australia",
  "Nova Zelândia": "New Zealand",
  "Turquia": "Turkey",
  "Israel": "Israel",
  "África do Sul": "South Africa",
  "Nigéria": "Nigeria",
};

export const countries = [
  "Estados Unidos",
  "Brasil",
  "Coreia do Sul",
  "Reino Unido",
  "França",
  "Japão",
  "Canadá",
  "México",
  "Argentina",
  "Colômbia",
  "Alemanha",
  "Itália",
  "Espanha",
  "Portugal",
  "Irlanda",
  "Suécia",
  "Noruega",
  "Dinamarca",
  "Holanda",
  "China",
  "Índia",
  "Hong Kong",
  "Tailândia",
  "Austrália",
  "Nova Zelândia",
  "Turquia",
  "Israel",
  "África do Sul",
  "Nigéria",
] as const;

export type Country = typeof countries[number];

export const durationRanges = [
  { label: "Curto (<90m)", min: 0, max: 90 },
  { label: "Médio (90-120m)", min: 90, max: 120 },
  { label: "Longo (120-180m)", min: 120, max: 180 },
  { label: "Épico (180m+)", min: 180, max: 999 },
] as const;

export const yearRanges = [
  { label: "Clássico (<1980)", min: 1940, max: 1980 },
  { label: "Anos 80-90", min: 1980, max: 2000 },
  { label: "Anos 2000", min: 2000, max: 2010 },
  { label: "Anos 2010", min: 2010, max: 2020 },
  { label: "Recente (2020+)", min: 2020, max: 2026 },
] as const;

export const directors = [] as const;
