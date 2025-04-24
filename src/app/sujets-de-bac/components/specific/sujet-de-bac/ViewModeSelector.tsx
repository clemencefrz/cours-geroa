import React from "react";
import { Button } from "@/components/design-system/button";
import { Grid, Table } from "lucide-react";

export type ViewMode = "grid" | "table";

interface ViewModeSelectorProps {
  currentViewMode: ViewMode;
  // eslint-disable-next-line no-unused-vars
  onViewModeChange: (mode: ViewMode) => void;
}

const viewModes: { mode: ViewMode; icon: React.ReactNode; label: string }[] = [
  { mode: "grid", icon: <Grid className="h-4 w-4" />, label: "Vue en grille" },
  {
    mode: "table",
    icon: <Table className="h-4 w-4" />,
    label: "Vue en tableau",
  },
];

const ViewModeSelector: React.FC<ViewModeSelectorProps> = ({
  currentViewMode,
  onViewModeChange,
}) => {
  return (
    <div className="flex items-center gap-1 bg-gray-100 p-1 rounded-lg">
      {viewModes.map(({ mode, icon, label }) => (
        <Button
          key={mode}
          variant={currentViewMode === mode ? "secondary" : "ghost"}
          size="sm"
          className="px-3"
          onClick={() => onViewModeChange(mode)}
          aria-label={label}
        >
          {icon}
        </Button>
      ))}
    </div>
  );
};

export default ViewModeSelector;
