const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";
const API_KEY = import.meta.env.VITE_API_KEY;

export interface MovieFilters {
  countries?: string[];
  ageRating?: string;
  genres?: string[];
  minRating?: number;
  maxRating?: number;
  minDuration?: number;
  maxDuration?: number;
  minYear?: number;
  maxYear?: number;
  whereToWatch?: string[];
}

export interface Movie {
  id: number;
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

export interface PaginatedResponse<T> {
  movies: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

class ApiClient {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  private buildQueryString(params: Record<string, unknown>): string {
    const searchParams = new URLSearchParams();
    
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        if (Array.isArray(value)) {
          value.forEach(v => searchParams.append(key, String(v)));
        } else {
          searchParams.append(key, String(value));
        }
      }
    });

    return searchParams.toString();
  }

  async getRandomMovie(filters: MovieFilters): Promise<Movie> {
    const queryString = this.buildQueryString(filters as Record<string, unknown>);
    const url = `${this.baseUrl}/movies/roulette${queryString ? `?${queryString}` : ''}`;
    
    const response = await fetch(url, {
      headers: {
        'API-Key': API_KEY,
      },
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch random movie: ${response.statusText}`);
    }

    return response.json();
  }

  async getAvailableCount(filters: MovieFilters): Promise<{ total: number; filters: MovieFilters }> {
    const queryString = this.buildQueryString(filters as Record<string, unknown>);
    const url = `${this.baseUrl}/movies/available-movies${queryString ? `?${queryString}` : ''}`;
    
    const response = await fetch(url, {
      headers: {
        'API-Key': API_KEY,
      },
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch available count: ${response.statusText}`);
    }

    return response.json();
  }

  async getMovies(filters: MovieFilters, page = 1, limit = 20): Promise<PaginatedResponse<Movie>> {
    const queryString = this.buildQueryString({ ...filters, page, limit } as Record<string, unknown>);
    const url = `${this.baseUrl}/movies${queryString ? `?${queryString}` : ''}`;
    
    const response = await fetch(url, {
      headers: {
        'API-Key': API_KEY,
      },
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch movies: ${response.statusText}`);
    }

    return response.json();
  }
}

export const apiClient = new ApiClient(API_BASE_URL);
