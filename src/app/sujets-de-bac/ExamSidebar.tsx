import { Checkbox } from "@/components/design-system/checkbox";
import { Label } from "@/components/design-system/label";
import React from "react";

interface Chapter {
  id: number;
  name: string;
}

interface Center {
  id: number;
  name: string;
}

interface ExamSidebarProps {
  chapters: Chapter[];
  centers: Center[];
  selectedChapters: Set<number>;
  selectedCenters: Set<number>;
  // eslint-disable-next-line no-unused-vars
  onChapterChange: (chapterId: number, checked: boolean) => void;
  // eslint-disable-next-line no-unused-vars
  onCenterChange: (centerId: number, checked: boolean) => void;
}

const ExamSidebar: React.FC<ExamSidebarProps> = ({
  chapters,
  centers,
  selectedChapters,
  selectedCenters,
  onChapterChange,
  onCenterChange,
}) => {
  return (
    <div className="w-64 shrink-0">
      <div className="sticky top-4 space-y-6">
        <div className="space-y-2">
          <h3 className="font-semibold">Centres</h3>
          <div className="space-y-2 max-h-60 overflow-y-auto">
            {centers.map((center) => (
              <div key={center.id} className="flex items-center space-x-2">
                <Checkbox
                  id={`center-${center.id}`}
                  checked={selectedCenters.has(center.id)}
                  onCheckedChange={(checked) =>
                    onCenterChange(center.id, checked as boolean)
                  }
                />
                <Label htmlFor={`center-${center.id}`}>{center.name}</Label>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="font-semibold">Chapitres</h3>
          <div className="space-y-2 max-h-60 overflow-y-auto">
            {chapters.map((chapter) => (
              <div key={chapter.id} className="flex items-center space-x-2">
                <Checkbox
                  id={`chapter-${chapter.id}`}
                  checked={selectedChapters.has(chapter.id)}
                  onCheckedChange={(checked) =>
                    onChapterChange(chapter.id, checked as boolean)
                  }
                />
                <Label htmlFor={`chapter-${chapter.id}`}>{chapter.name}</Label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamSidebar;
