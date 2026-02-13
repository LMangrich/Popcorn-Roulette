interface SpinButtonProps {
  onClick: () => void;
  isSpinning: boolean;
  disabled?: boolean;
  availableCount: number | null;
}

export function SpinButton({ onClick, isSpinning, disabled, availableCount }: SpinButtonProps) {
  return (
    <div className="flex flex-col items-center gap-6">
      <button
        onClick={onClick}
        disabled={disabled || isSpinning}
        className="relative group rounded-[20px] bg-card border-2 border-filter-line 
        shadow-[2px_4px_0px_0px_rgba(0,0,0,0.1)] transition-transform duration-200 
        hover:scale-[1.02] active:scale-[0.98] disabled:hover:scale-100"
      >
        <div
          className={`relative px-16 py-6 rounded-3xl transition-all duration-300 ${
            disabled
              ? "bg-muted text-muted-foreground cursor-not-allowed"
              : isSpinning
              ? "bg-gradient-to-r from-primary/80 to-accent/80 text-primary-foreground"
              : "bg-gradient-to-r from-primary to-accent text-primary-foreground btn-glow"
          }`}
        >
          <div className="flex items-center gap-3">
            <span className="font-display text-3xl font-bold tracking-wider">
              {isSpinning ? "Estourando..." : "Escolha seu filme"}
            </span>
          </div>
        </div>
      </button>

      <div className="flex items-center gap-2 text-red-dark">      
        <span className="text-sm font-bold">
         {availableCount === null ? "Verificando quantos filmes há filmes no balde..." : `${availableCount} filme${availableCount !== 1 ? "s" : ""} no balde!`}
        </span>
      </div>
    </div>
  );
}
