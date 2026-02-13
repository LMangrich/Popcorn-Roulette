import { Ticket } from "lucide-react";

interface LoadingMovieProps {
  isSpinning: boolean;
  availableCount: number | null;
}

export function LoadingMovie({ isSpinning }: LoadingMovieProps) {
  return (
    <div className="flex flex-col items-center justify-center">
      {isSpinning && (
        <div className="text-center">
          <div className="mb-6 animate-spin-slow">
            <Ticket className="w-20 h-20 text-red-dark mx-auto" />
          </div>
          <div className="animate-pulse">
            <span className="text-2xl font-display text-text-main">Carregando filmes...</span>
          </div>
        </div>
      ) }
    </div>
  );
}
