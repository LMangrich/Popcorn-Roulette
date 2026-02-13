import { Popcorn, Github } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-card shadow-[1px_2px_0_rgba(0,0,0,0.03)]"> 
      <div className="max-w-3xl mx-auto flex items-center justify-between px-4 py-3"> 
        <div className="flex-1"/>
        
        <a href="/Popcorn-Roulette" className="flex justify-center"> 
          <Popcorn className="h-10 w-10 text-popcorn" /> 
        </a> 

        <div className="flex-1 flex justify-end items-center gap-2"> 
          <a href="https://github.com/LMangrich" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-secondary rounded-full transition-colors group" aria-label="Visit GitHub profile" title="Visit GitHub profile"> 
            <Github className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" /> 
          </a> 
        </div>  
      </div>
    </header>
  );
}
