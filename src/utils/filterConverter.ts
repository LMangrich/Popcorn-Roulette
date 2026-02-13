import type { MovieFilters } from '../lib/api';
import type { FilterState } from '../hooks/useMovieRoulette';
import { GENRE_MAP, COUNTRY_MAP } from '../data/movies';

export const convertToApiFilters = (frontendFilters: FilterState): MovieFilters => {
  const apiFilters: MovieFilters = {};

  if (frontendFilters.genres.length > 0) {
    apiFilters.genres = frontendFilters.genres.map(
      (genre) => GENRE_MAP[genre] || genre
    );
  }

  if (frontendFilters.minRating > 0 && frontendFilters.minRating !== 6) {
    apiFilters.minRating = frontendFilters.minRating;
  }

  if (frontendFilters.yearRange.min !== 1940 || frontendFilters.yearRange.max !== 2026) {
    apiFilters.minYear = frontendFilters.yearRange.min;
    apiFilters.maxYear = frontendFilters.yearRange.max;
  }

  if (frontendFilters.durationRange.min !== 0 || frontendFilters.durationRange.max !== 999) {
    apiFilters.minDuration = frontendFilters.durationRange.min;
    apiFilters.maxDuration = frontendFilters.durationRange.max;
  }

  if (frontendFilters.platforms.length > 0) {
    apiFilters.whereToWatch = frontendFilters.platforms as string[];
  }

  if (frontendFilters.languages.length > 0) {
    apiFilters.countries = frontendFilters.languages.map(
      (country) => COUNTRY_MAP[country] || country
    ) as string[];
  }

  if (frontendFilters.certifications.length > 0) {
    apiFilters.ageRating = frontendFilters.certifications[0] as string;
  }

  return apiFilters;
};
