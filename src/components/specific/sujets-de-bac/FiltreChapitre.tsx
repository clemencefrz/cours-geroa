"use client";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/design-system/select";

type ChapterItem = {
    id: number;
    name: string;
    taughtInLevel?: string;
    thematic?: string;
    subject?: string;
};

type FiltreChapitreProps = {
    chapters: ChapterItem[];
    value?: string;
    // eslint-disable-next-line no-unused-vars
    onChange?: (value: string) => void;
};

export default function FiltreChapitre({ chapters, value, onChange }: FiltreChapitreProps) {
    return (
        <Select value={value} onValueChange={(v) => onChange?.(v)}>
            <SelectTrigger className="w-[50%]">
                <SelectValue placeholder="Sélectionner un chapitre" />
            </SelectTrigger>
            <SelectContent>
                {chapters.map((chapter) => (
                    <SelectItem value={chapter.name} key={chapter.id}>
                        {chapter.name}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
}


