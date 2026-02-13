import { useState, useEffect } from 'react';
import { apiClient } from '../lib/api';
import type { FilterState } from './useMovieRoulette';
import { convertToApiFilters } from '../utils/filterConverter';

export const useAvailableMovies = (filters: FilterState) => {
  const [availableCount, setAvailableCount] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    
    const fetchCount = async () => {
      if (!cancelled) {
        setIsLoading(true);
      }
      
      try {
        const apiFilters = convertToApiFilters(filters);
        const result = await apiClient.getAvailableCount(apiFilters);
        if (!cancelled) {
          setAvailableCount(result.total);
          setIsLoading(false);
        }
      } catch (error) {
        console.error('Error fetching movie count:', error);
        if (!cancelled) {
          setAvailableCount(0);
          setIsLoading(false);
        }
      }
    };

    fetchCount();
    
    return () => {
      cancelled = true;
    };
  }, [filters]);

  return isLoading ? null : availableCount;
};
