import { Popcorn } from "lucide-react";
import { FilterSection, type FilterState } from "@/app/home/section/FilterSection";
import { SpinButton } from "@/app/home/components/SpinButton";
import { LoadingMovie } from "../components/LoadingMovie";

interface HeroSectionProps {
  filters: FilterState;
  setFilters: (filters: FilterState) => void;
  onSpin: () => void;
  isSpinning: boolean;
  isSelected: boolean;
  availableCount: number | null;
}

export function HeroSection({ filters, setFilters, onSpin, isSpinning, isSelected, availableCount }: HeroSectionProps) {
  return (
    <section>
      <div className="max-w-xl lg:max-w-5xl mx-auto px-4 py-[50px] md:py-[80px]">
        <div className="grid lg:grid-cols-2 gap-8">
            <div className="text-center mb-8">
              <div className="inline-block mb-4 rounded-full bg-white p-4 shadow-[1px_2px_0_rgba(188,36,44,0.3)] animate-bounce-gentle">
                <Popcorn className="w-16 h-16 text-popcorn" />
              </div>

              <div className="flex flex-col gap-3 mb-10">
                <h1 className="font-display text-main text-3xl md:text-6xl font-bold mb-4">
                    Popcorn Roulette
                </h1>
                <p className="text-main max-w-md text-lg mx-auto">
                    Não sabe o que assistir? Gire a roleta e deixe o destino escolher seu próximo filme!
                </p>
              </div>

                <SpinButton
                onClick={onSpin}
                isSpinning={isSpinning}
                availableCount={availableCount}
                />

              <p className="mt-8 text-sm mx-auto text-text-main/70 text-center max-w-md">
            🍿  Dica: Use os filtros para restringir suas opções, ou deixe-os vazios para uma surpresa!
              </p>
            </div>

            {!isSpinning && !isSelected ? (
              <FilterSection filters={filters} setFilters={setFilters} />
            ) : (
              <LoadingMovie isSpinning={isSpinning} availableCount={availableCount} />
            )}
        </div>
      </div>
    </section>
  );
}