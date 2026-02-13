import { useState, useEffect } from 'react';
import { apiClient } from '../lib/api';
import type { Movie } from '../lib/api';
import type { FilterState } from './useMovieRoulette';
import { convertToApiFilters } from '../utils/filterConverter';

export const useSimilarMovies = (selectedMovie: Movie | null, filters: FilterState) => {
  const [similarMovies, setSimilarMovies] = useState<Movie[]>([]);

  useEffect(() => {
    if (!selectedMovie) {
      return;
    }

    const fetchSimilar = async () => {
      try {
        const filtersWithGenres = {
          ...filters,
          genres: selectedMovie.genres,
        };
        
        const similarFilters = convertToApiFilters(filtersWithGenres);

        const result = await apiClient.getMovies(similarFilters, 1, 6);
        
        if (result.movies && Array.isArray(result.movies)) {
          const filtered = result.movies.filter((m) => m.id !== selectedMovie.id).slice(0, 6);
          setSimilarMovies(filtered);
        } else {
          setSimilarMovies([]);
        }
      } catch (error) {
        console.error('Error fetching similar movies:', error);
        setSimilarMovies([]);
      }
    };

    fetchSimilar();
  }, [selectedMovie, filters]);

  return similarMovies;
};
