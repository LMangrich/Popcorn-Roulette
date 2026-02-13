import { useState } from 'react';
import { apiClient } from '../lib/api';
import type { Movie } from '../lib/api';
import { convertToApiFilters } from '../utils/filterConverter';

export interface FilterState {
  genres: string[];
  yearRanges: string[];
  durationRanges: string[];
  platforms: string[];
  minRating: number;
  languages: string[];
  certifications: string[];
}

export const useMovieRoulette = (filters: FilterState) => {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [isSpinning, setIsSpinning] = useState(false);

  const handleSpin = async () => {
    if (isSpinning) return;

    setIsSpinning(true);
    setSelectedMovie(null);

    try {
      const spinDuration = 1500 + Math.random() * 1000;
      
      await new Promise(resolve => setTimeout(resolve, spinDuration));

      const apiFilters = convertToApiFilters(filters);
      const movie = await apiClient.getRandomMovie(apiFilters);
      setSelectedMovie(movie);
    } catch (error) {
      console.error('Error fetching random movie:', error);
      alert('Falha na busca por um filme. Por favor, tente novamente, caso o problema persista, contate a desenvolvedora via github.');
    } finally {
      setIsSpinning(false);
    }
  };

  return {
    selectedMovie,
    setSelectedMovie,
    isSpinning,
    handleSpin,
  };
};
