import React from "react";
import { Checkbox } from "@/components/design-system/checkbox";
import { Label } from "@/components/design-system/label";

interface Chapter {
  id: number;
  name: string;
}

interface ExamSidebarProps {
  chapters: Chapter[];
  selectedChapters: Set<number>;
  // eslint-disable-next-line no-unused-vars
  onChapterChange: (chapterId: number, checked: boolean) => void;
}

export default function ExamSidebar({
  chapters,
  selectedChapters,
  onChapterChange,
}: ExamSidebarProps) {
  return (
    <div className="w-64 space-y-6">
      <div>
        <h2 className="text-lg font-semibold mb-3">Chapitres</h2>
        <div className="space-y-2">
          {chapters.map((chapter) => (
            <div key={chapter.id} className="flex items-center space-x-2">
              <Checkbox
                id={chapter.id.toString()}
                checked={selectedChapters.has(chapter.id)}
                onCheckedChange={(checked) =>
                  onChapterChange(chapter.id, checked as boolean)
                }
              />
              <Label htmlFor={chapter.id.toString()}>{chapter.name}</Label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
