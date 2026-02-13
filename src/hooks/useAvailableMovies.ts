import { useState, useEffect } from 'react';
import { apiClient } from '../lib/api';
import type { FilterState } from './useMovieRoulette';
import { convertToApiFilters } from '../utils/filterConverter';

export const useAvailableMovies = (filters: FilterState) => {
  const [availableCount, setAvailableCount] = useState<number>(0);

  useEffect(() => {
    const fetchCount = async () => {
      try {
        const apiFilters = convertToApiFilters(filters);
        const result = await apiClient.getAvailableCount(apiFilters);
        setAvailableCount(result.total);
      } catch (error) {
        console.error('Error fetching movie count:', error);
        setAvailableCount(0);
      }
    };

    fetchCount();
  }, [filters]);

  return availableCount;
};
