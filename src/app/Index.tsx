import { useState } from "react";
import { type FilterState } from "@/hooks/useMovieRoulette";
import { MovieCard } from "@/app/home/components/MovieCard";
import { useMovieRoulette } from "@/hooks/useMovieRoulette";
import { useAvailableMovies } from "@/hooks/useAvailableMovies";
import { useSimilarMovies } from "@/hooks/useSimilarMovies";
import { HeroSection } from "./home/section/HeroSection";
import { Header } from "./home/components/Header";

const initialFilters: FilterState = {
  genres: [],
  yearRanges: [],
  durationRanges: [],
  platforms: [],
  minRating: 6,
  languages: [],
  certifications: [],
};

const Index = () => {
  const [filters, setFilters] = useState<FilterState>(initialFilters);

  const { selectedMovie, setSelectedMovie, isSpinning, handleSpin } = useMovieRoulette(filters);
  const availableCount = useAvailableMovies(filters);
  const similarMovies = useSimilarMovies(selectedMovie, filters);

  return (
    <div>      
      <Header />
      
      <main className="relative">
        {!selectedMovie && (
          <div className="flex flex-col">
            <HeroSection
              filters={filters}
              setFilters={setFilters}
              onSpin={handleSpin}
              isSpinning={isSpinning}
              isSelected={!!selectedMovie}
              availableCount={availableCount}
            />
          </div>
        )}

        <div className="max-w-xl lg:max-w-5xl mx-auto px-4 py-[50px] md:py-[80px]">
          {selectedMovie && (
            <div className="w-full max-w-3xl mx-auto">
              <MovieCard
                movie={selectedMovie}
                onClose={() => setSelectedMovie(null)}
                similarMovies={similarMovies}
                onSelectSimilar={setSelectedMovie}
                onSpinAgain={handleSpin}
              />
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Index;
