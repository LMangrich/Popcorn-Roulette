import { X, Popcorn, XIcon } from "lucide-react";
import { Badge } from "@/app/home/components/Badge";
import { Button } from "@/app/home/components/Button";
import { FilterPanel } from "@/app/home/components/FilterPanel";
import type { FilterState } from "@/hooks/useMovieRoulette";
import { filterPanelsConfig } from "../config/filterPanels";

interface FilterSectionProps {
  filters: FilterState;
  setFilters: (filters: FilterState) => void;
}

export type { FilterState };

export function FilterSection({ filters, setFilters }: FilterSectionProps) {
  const hasFilters =
    filters.genres.length > 0 ||
    filters.yearRanges.length > 0 ||
    filters.durationRanges.length > 0 ||
    filters.platforms.length > 0 ||
    filters.minRating > 6 ||
    filters.languages.length > 0 ||
    filters.certifications.length > 0;

  const clearFilters = () => {
    setFilters({
      genres: [],
      yearRanges: [],
      durationRanges: [],
      platforms: [],
      minRating: 6,
      languages: [],
      certifications: [],
    });
  };

  const toggleArrayFilter = <T,>(array: T[], item: T): T[] => {
    return array.includes(item)
      ? array.filter((i) => i !== item)
      : [...array, item];
  };

  const updateFilter = (key: keyof FilterState, value: FilterState[keyof FilterState]) => {
    setFilters({ ...filters, [key]: value });
  };

  const toggleInArray = <T extends keyof FilterState>(
    key: T,
    item: FilterState[T] extends Array<infer U> ? U : never
  ) => {
    const array = filters[key] as unknown[];
    updateFilter(key, toggleArrayFilter(array, item) as FilterState[T]);
  };

  return (
    <div className="rounded-[20px] bg-card border-2 border-filter-line p-5 shadow-[2px_4px_0px_0px_rgba(0,0,0,0.1)]">
      <div className="flex items-center justify-between pb-2 border-b-2 border-filter-border/40">
        <div className="flex items-center gap-2">
          <Popcorn className="w-5 h-5 text-red-dark" />
          <h2 className="font-display text-2xl font-semibold">
            Filtros
          </h2>
        </div>
        {hasFilters && (
          <Button
            onClick={clearFilters}
            className="h-8 px-2 hover:bg-card-muted"
          >
            <XIcon className="w-4 h-4 mr-1 text-black" />
            Limpar
          </Button>
        )}
      </div>

      {filterPanelsConfig.map((panel) => (
        <FilterPanel
          key={panel.title}
          title={panel.title}
          icon={panel.icon}
          defaultOpen={panel.defaultOpen}
        >
          {panel.content(filters, updateFilter, toggleInArray)}
        </FilterPanel>
      ))}

      {hasFilters && (
        <div className="pt-4 border-t border-border/50 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <p className="text-xs text-muted-foreground mb-2">Filtros ativos:</p>
          <div className="flex flex-wrap gap-1">
            {filters.genres.map((g) => (
              <Badge key={g} className="text-xs bg-card-muted border-filter-line">
                {g}
                <X
                  className="w-3 h-3 ml-1 cursor-pointer"
                  onClick={() => toggleInArray("genres", g)}
                />
              </Badge>
            ))}
            {filters.minRating > 6 && (
              <Badge
                className="text-xs bg-popcorn/20 text-red-dark border-popcorn/30"
              >
                {filters.minRating}+ ★
                <X
                  className="w-3 h-3 ml-1 cursor-pointer"
                  onClick={() => updateFilter("minRating", 6)}
                />
              </Badge>
            )}
            {filters.yearRanges.map((label) => (
              <Badge key={label} className="text-xs bg-card-muted border-filter-line">
                {label}
                <X
                  className="w-3 h-3 ml-1 cursor-pointer"
                  onClick={() => toggleInArray("yearRanges", label)}
                />
              </Badge>
            ))}
            {filters.durationRanges.map((label) => (
              <Badge key={label} className="text-xs bg-card-muted border-filter-line">
                {label}
                <X
                  className="w-3 h-3 ml-1 cursor-pointer"
                  onClick={() => toggleInArray("durationRanges", label)}
                />
              </Badge>
            ))}
            {filters.platforms.map((p) => (
              <Badge key={p} className="text-xs bg-card-muted border-filter-line">
                {p}
                <X
                  className="w-3 h-3 ml-1 cursor-pointer"
                  onClick={() => toggleInArray("platforms", p)}
                />
              </Badge>
            ))}
            {filters.languages.map((lang) => (
              <Badge key={lang} className="text-xs bg-card-muted border-filter-line">
                {lang}
                <X
                  className="w-3 h-3 ml-1 cursor-pointer"
                  onClick={() => toggleInArray("languages", lang)}
                />
              </Badge>
            ))}
            {filters.certifications.map((cert) => (
              <Badge key={cert} className="text-xs bg-card-muted border-filter-line">
                {cert}
                <X
                  className="w-3 h-3 ml-1 cursor-pointer"
                  onClick={() => toggleInArray("certifications", cert)}
                />
              </Badge>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
