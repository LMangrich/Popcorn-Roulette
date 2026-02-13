import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FilterPanelProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export function FilterPanel({
  title,
  icon,
  children,
  defaultOpen = false,
}: FilterPanelProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-border/50 last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 px-1 hover:bg-secondary/30 transition-colors rounded-lg"
      >
        <div className="flex items-center gap-2 text-foreground">
          {icon}
          <span className="font-medium">
            {title}
          </span>
        </div>
        <div className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
          <ChevronDown className="w-4 h-4 text-muted-foreground" />
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-200 ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="pb-4 px-1">{children}</div>
      </div>
    </div>
  );
}
