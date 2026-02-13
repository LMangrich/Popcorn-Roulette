import { Clock, Star, Play, X, Monitor, Globe, Shield, Clapperboard, Users, Popcorn } from "lucide-react";
import { useState, useEffect } from "react";
import type { Movie } from "@/data/movies";
import { GENRE_MAP_REVERSE, PLATFORM_URLS } from "@/data/movies";
import { Badge } from "@/app/home/components/Badge";
import { Button } from "@/app/home/components/Button";
import { translateSynopsis } from "@/lib/translator";

interface MovieCardProps {
  movie: Movie;
  onClose: () => void;
  similarMovies: Movie[];
  onSelectSimilar: (movie: Movie) => void;
  onSpinAgain: () => void;
}

export function MovieCard({ movie, onClose, similarMovies, onSelectSimilar, onSpinAgain }: MovieCardProps) {
  const [translatedSynopsis, setTranslatedSynopsis] = useState<string>(movie.synopsis || '');

  useEffect(() => {
    if (movie.synopsis) {
      translateSynopsis(movie.synopsis).then(setTranslatedSynopsis);
    }
  }, [movie.synopsis]);

  const formatDuration = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  };

  return (
    <div className="w-full">
      <div className="rounded-[20px] bg-card border-2 border-filter-line shadow-[2px_4px_0px_0px_rgba(0,0,0,0.1)] overflow-hidden">
        <div className="relative h-48 md:h-72 overflow-hidden shadow-[1px_2px_4px_2px_rgba(0,0,0,0.1)]">
          <img
            src={movie.backdrop || movie.posterUrl}
            alt={movie.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-card/50 via-transparent to-transparent" />

          <Button
            onClick={onClose}
            className="absolute top-4 right-4 bg-background/60 hover:bg-white/80 rounded-full h-10 w-10"
          >
            <X className="w-5 h-5" />
          </Button>

          <div className="absolute top-4 left-4 flex items-center gap-2 bg-red-dark/90 px-3 py-1 rounded-full">
            <Star className="w-4 h-4 text-popcorn fill-popcorn" />
            <span className="font-bold text-white">{movie.rating || movie.imdbRating}</span>
          </div>

          <div className="absolute -bottom-6 left-6 md:left-8">
            <img
              src={movie.poster || movie.posterUrl}
              alt={movie.title}
              className="w-24 md:w-32 h-auto rounded-[20px] shadow-[1px_2px_0px_0px_rgba(0,0,0,0.1)] border-4 border-card"
            />
          </div>
        </div>

        <div className="pt-8 px-6 md:px-8 pb-6 md:pb-8">
          <div className="mb-5 flex flex-col gap-4">
            <h1 className="font-display text-3xl -translate-x-0.5 md:text-5xl font-bold text-left">
              {movie.title}
            </h1>

            <div className="flex flex-row items-center gap-3 text-sm">
              <span className="font-medium text-foreground">{movie.year}</span>
              {movie.duration && (
                <>
                  <span className="w-1 h-1 rounded-full" />
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {formatDuration(movie.duration)}
                  </span>
                </>
              )}
              <span className="w-1 h-1 rounded-full" />
              <span className="flex items-center gap-1">
                <Shield className="w-3.5 h-3.5" />
                {movie.certification || movie.ageRating}
              </span>
              <span className="w-1 h-1 rounded-full" />
              <span className="flex items-center gap-1">
                <Globe className="w-3.5 h-3.5" />
                {movie.language || movie.countries[0]}
              </span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-5">
            {movie.genres.map((genre) => (
              <Badge key={genre} className="border border-filter-line bg-card-muted">
                {GENRE_MAP_REVERSE[genre] || genre}
              </Badge>
            ))}
          </div>

          {movie.synopsis && (
            <div className="mb-5 text-left">
              <p>{translatedSynopsis}</p>
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-4 mb-5">
            {(movie.director || movie.directors.length > 0) && (
              <div className="flex items-start gap-2">
                <Clapperboard className="w-4 h-4 text-red-dark" />
                <div>
                  <p className="text-xs uppercase font-semibold mb-0.5">Diretor</p>
                  <p className="text-foreground font-medium">{movie.director || movie.directors.join(", ")}</p>
                </div>
              </div>
            )}
            {movie.cast && movie.cast.length > 0 && (
              <div className="flex items-start gap-2">
                <Users className="w-8 h-8 text-red-dark -translate-y-2" />
                <div>
                  <p className="text-xs uppercase font-semibold mb-0.5">Elenco</p>
                  <p className="text-foreground">
                    {Array.isArray(movie.cast)
                      ? typeof movie.cast[0] === 'string'
                        ? movie.cast.join(", ")
                        : movie.cast.map((c) => (typeof c === 'string' ? c : c.name)).join(", ")
                      : ""}
                  </p>
                </div>
              </div>
            )}
          </div>

          {movie.whereToWatch && movie.whereToWatch.length > 0 && (
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <Monitor className="w-4 h-4 text-red-dark" />
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Onde Assistir</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {movie.whereToWatch.map((platform) => {
                  const url = PLATFORM_URLS[platform];
                  return (
                    <Badge
                      key={platform}
                      className="bg-red-dark/10 border-red-dark/30 text-red-dark hover:bg-red-dark/20 cursor-pointer transition-colors"
                      onClick={() => url && window.open(url, '_blank', 'noopener,noreferrer')}
                    >
                      <Play className="w-3 h-3 mr-1" />
                      {platform}
                    </Badge>
                  );
                })}
              </div>
            </div>
          )}

          <div className="flex flex-wrap gap-3 pt-4 border-t-2 border-card-muted">
            <Button
              onClick={onSpinAgain}
              className="flex flex-row gap-1.5 px-3 bg-red-dark hover:bg-red-dark/90 text-white rounded-full font-semibold"
            >
              <Popcorn className="w-4 h-4" />
              Girar Novamente
            </Button>
            <Button onClick={onClose} className="rounded-full border-2 border-filter-line bg-card-muted/50 hover:bg-card-muted h-10 px-3 font-semibold">
              Voltar aos Filtros
            </Button>
          </div>

          {similarMovies.length > 0 && (
            <div className="mt-6 pt-6 border-t border-border/50">
              <h3 className="text-sm font-medium uppercase tracking-wider mb-3">
                Você também pode gostar
              </h3>
              <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-thin">
                {similarMovies.map((similar) => (
                  <button
                    key={similar.id}
                    onClick={() => onSelectSimilar(similar)}
                    className="flex-shrink-0 group"
                  >
                    <div className="relative overflow-hidden rounded-lg">
                      <img
                        src={similar.poster || similar.posterUrl}
                        alt={similar.title}
                        className="w-20 h-30 object-cover transition-transform group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <p className="text-xs text-muted-foreground mt-1.5 w-20 truncate text-center group-hover:text-foreground transition-colors">
                      {similar.title}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
