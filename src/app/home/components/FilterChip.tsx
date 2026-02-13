interface FilterChipProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

export function FilterChip({ label, isActive, onClick }: FilterChipProps) {
  return (
    <button onClick={onClick} className={`${isActive ? "filter-chip-active rounded-full border-2 border-card-muted bg-background/70 px-2" : ""}`}
    >
      {label}
    </button>
  );
}
