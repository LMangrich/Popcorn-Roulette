import type { MovieFilters } from '../lib/api';
import type { FilterState } from '../hooks/useMovieRoulette';
import { GENRE_MAP, COUNTRY_MAP, yearRanges, durationRanges } from '../data/movies';

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

  if (frontendFilters.yearRanges.length > 0) {
    const selectedRange = yearRanges.find(r => r.label === frontendFilters.yearRanges[0]);
    if (selectedRange) {
      apiFilters.minYear = selectedRange.min;
      apiFilters.maxYear = selectedRange.max;
    }
  }

  if (frontendFilters.durationRanges.length > 0) {
    const selectedRange = durationRanges.find(r => r.label === frontendFilters.durationRanges[0]);
    if (selectedRange) {
      apiFilters.minDuration = selectedRange.min;
      apiFilters.maxDuration = selectedRange.max;
    }
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
