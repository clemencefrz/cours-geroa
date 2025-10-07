"use client";

import { useMemo, useState } from "react";
import CardSujetDeBac from "@/components/specific/sujets-de-bac/CardSujetDeBac";
import FiltreChapitre from "@/components/specific/sujets-de-bac/FiltreChapitre";

type SujetItem = {
    id: number;
    paper: string;
    year: number;
    session: number;
    level: string;
    centerName?: string;
    correction?: string;
    hasCorrection: boolean;
    chapters?: string[];
};

type ChapterItem = {
    id: number;
    name: string;
    taughtInLevel?: string;
    thematic?: string;
    subject?: string;
};

type Props = {
    sujets: SujetItem[];
    chapters: ChapterItem[];
};

export default function SujetsGridWithFilter({ sujets, chapters }: Props) {
    const [selectedChapter, setSelectedChapter] = useState<string | undefined>(undefined);

    const filtered = useMemo(() => {
        if (!selectedChapter) return sujets;
        return sujets.filter((s) => (s.chapters ?? []).includes(selectedChapter));
    }, [sujets, selectedChapter]);

    return (
        <div className="flex flex-col gap-8">
            <FiltreChapitre
                chapters={chapters}
                value={selectedChapter}
                onChange={setSelectedChapter}
            />

            {filtered.length === 0 ? (
                <p>Aucun sujet disponible.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filtered.map((s) => (
                        <CardSujetDeBac key={s.id} sujet={s} />
                    ))}
                </div>
            )}
        </div>
    );
}


