import {
  Clock,
  Calendar,
  Film,
  Star,
  Globe,
  Shield,
  Tv,
} from "lucide-react";
import { X } from "lucide-react";
import {
  genres,
  streamingPlatforms,
  countries,
  durationRanges,
  yearRanges,
} from "@/data/movies";
import type { FilterState } from "@/hooks/useMovieRoulette";
import { FilterChip } from "@/app/home/components/FilterChip";
import { Button } from "@/app/home/components/Button";
import { Slider } from "@/app/home/components/Slider";

const certifications = ["L", "10+", "12+", "14+", "16+", "18+"] as const;

interface FilterPanelConfig {
  title: string;
  icon: React.ReactNode;
  defaultOpen?: boolean;
  content: (
    filters: FilterState,
    updateFilter: (key: keyof FilterState, value: FilterState[keyof FilterState]) => void,
    toggleInArray: <T extends keyof FilterState>(
      key: T,
      item: FilterState[T] extends Array<infer U> ? U : never
    ) => void,
    setRange: (key: "yearRange" | "durationRange", min: number, max: number) => void
  ) => React.ReactNode;
}

export const filterPanelsConfig: FilterPanelConfig[] = [
  {
    title: "Gêneros",
    icon: <Film className="w-4 h-4 text-black" />,
    defaultOpen: true,
    content: (filters, _updateFilter, toggleInArray) => (
      <div className="flex flex-wrap gap-2">
        {genres.map((genre) => (
          <FilterChip
            key={genre}
            label={genre}
            isActive={filters.genres.includes(genre)}
            onClick={() => toggleInArray("genres", genre)}
          />
        ))}
      </div>
    ),
  },
  {
    title: "Avaliação Mínima",
    icon: <Star className="w-4 h-4 text-popcorn" />,
    content: (filters, updateFilter) => (
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">
            {filters.minRating.toFixed(1)}+ estrelas
          </span>
          {filters.minRating > 6 && (
            <Button
              onClick={() => updateFilter("minRating", 6)}
              className="h-6 px-2 text-xs hover:bg-card-muted"
            >
              <X className="w-3 h-3" />
            </Button>
          )}
        </div>
        <Slider
          value={[filters.minRating]}
          onValueChange={([value]) => updateFilter("minRating", value)}
          min={6}
          max={10}
          step={0.5}
          className="w-full"
        />
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>6.0</span>
          <span>10.0</span>
        </div>
      </div>
    ),
  },
  {
    title: "Ano de Lançamento",
    icon: <Calendar className="w-4 h-4" />,
    content: (filters, _updateFilter, _toggleInArray, setRange) => (
      <div className="flex flex-wrap gap-2">
        {yearRanges.map((range) => (
          <FilterChip
            key={range.label}
            label={range.label}
            isActive={
              filters.yearRange.min === range.min &&
              filters.yearRange.max === range.max
            }
            onClick={() => setRange("yearRange", range.min, range.max)}
          />
        ))}
      </div>
    ),
  },
  {
    title: "Duração",
    icon: <Clock className="w-4 h-4" />,
    content: (filters, _updateFilter, _toggleInArray, setRange) => (
      <div className="flex flex-wrap gap-2">
        {durationRanges.map((range) => (
          <FilterChip
            key={range.label}
            label={range.label}
            isActive={
              filters.durationRange.min === range.min &&
              filters.durationRange.max === range.max
            }
            onClick={() => setRange("durationRange", range.min, range.max)}
          />
        ))}
      </div>
    ),
  },
  {
    title: "Plataforma de Streaming",
    icon: <Tv className="w-4 h-4" />,
    content: (filters, _updateFilter, toggleInArray) => (
      <div className="flex flex-wrap gap-2">
        {streamingPlatforms.map((platform) => (
          <FilterChip
            key={platform}
            label={platform}
            isActive={filters.platforms.includes(platform)}
            onClick={() => toggleInArray("platforms", platform)}
          />
        ))}
      </div>
    ),
  },
  {
    title: "País",
    icon: <Globe className="w-4 h-4" />,
    content: (filters, _updateFilter, toggleInArray) => (
      <div className="flex flex-wrap gap-2">
        {countries.map((country) => (
          <FilterChip
            key={country}
            label={country}
            isActive={filters.languages.includes(country)}
            onClick={() => toggleInArray("languages", country)}
          />
        ))}
      </div>
    ),
  },
  {
    title: "Classificação Etária",
    icon: <Shield className="w-4 h-4" />,
    content: (filters, _updateFilter, toggleInArray) => (
      <div className="flex flex-wrap gap-2">
        {certifications.map((cert) => (
          <FilterChip
            key={cert}
            label={cert}
            isActive={filters.certifications.includes(cert)}
            onClick={() => toggleInArray("certifications", cert)}
          />
        ))}
      </div>
    ),
  },
];
