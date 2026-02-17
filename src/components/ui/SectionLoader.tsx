import { Loader2 } from "lucide-react";

export const SectionLoader = () => {
  return (
    <div className="w-full h-64 flex items-center justify-center bg-muted/10 animate-pulse">
      <Loader2 className="w-8 h-8 animate-spin text-primary/50" />
    </div>
  );
};
