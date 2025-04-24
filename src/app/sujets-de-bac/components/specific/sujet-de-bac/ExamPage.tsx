"use client";

import React, { useState, useEffect } from "react";
import { Input } from "@/components/design-system/input";
import { Skeleton } from "@/components/design-system/skeleton";
import ExamCard from "./ExamCard";
import ExamSidebar from "./ExamSidebar";
import ViewModeSelector, { type ViewMode } from "./ViewModeSelector";
import { useExamFilters, type ExamWithDetails } from "./useExamFilters";

const SEARCH_PLACEHOLDER = "Entrer un mot clef, un chapitre ou un sujet...";
const SKELETON_CARDS_COUNT = 6;

export default function ExamPage() {
  const [allExams, setAllExams] = useState<ExamWithDetails[]>([]);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState<ViewMode>("grid");

  const {
    searchTerm,
    setSearchTerm,
    chapters,
    selectedChapters,
    filteredExams,
    matchingExercises,
    handleChapterChange,
  } = useExamFilters(allExams);

  const fetchExams = async () => {
    try {
      const response = await fetch("/api/exams");
      if (!response.ok) throw new Error("Failed to fetch exams");
      const data = await response.json();
      setAllExams(data);
    } catch (error) {
      console.error("Error fetching exams:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchExams();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Sujets de Bac - Physique-Chimie
        </h1>

        <div className="flex gap-8">
          <ExamSidebar
            chapters={chapters}
            selectedChapters={selectedChapters}
            onChapterChange={handleChapterChange}
          />

          <div className="flex-1">
            <div className="flex flex-col gap-4 mb-8">
              <Input
                type="text"
                placeholder={SEARCH_PLACEHOLDER}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
              />
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="font-medium">{filteredExams.length}</span>
                  <span>
                    {filteredExams.length === 1
                      ? "sujet trouvé"
                      : "sujets trouvés"}
                  </span>
                </div>
                <ViewModeSelector
                  currentViewMode={viewMode}
                  onViewModeChange={setViewMode}
                />
              </div>
            </div>

            <p className="text-sm text-gray-500 mb-6 text-center">
              Les sujets et corrigés sont des ressources externes. Nous ne
              sommes pas les auteurs de ces documents.
            </p>

            {viewMode === "table" ? (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2">Centre</th>
                      <th className="text-left py-2">Année</th>
                      <th className="text-left py-2">Exercices</th>
                      <th className="text-left py-2">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredExams.map((exam) => (
                      <tr key={exam.id} className="border-b">
                        <td className="py-2">{exam.centers.name}</td>
                        <td className="py-2">{exam.year}</td>
                        <td className="py-2">
                          {searchTerm.trim()
                            ? matchingExercises.get(exam.id)?.length || 0
                            : exam.exercises.length}
                        </td>
                        <td className="py-2 flex flex-row gap-2">
                          <a
                            href={exam.paper}
                            className="text-blue-600 hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Voir le sujet
                          </a>
                          {exam?.correction && (
                            <a
                              href={exam.correction}
                              className="text-blue-600 hover:underline"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Voir le corrigé
                            </a>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {loading
                  ? Array.from({ length: SKELETON_CARDS_COUNT }).map(
                      (_, index) => <SkeletonCard key={index} />
                    )
                  : filteredExams.map((exam) => (
                      <ExamCard
                        key={exam.id}
                        exam={exam}
                        matchingExercises={matchingExercises.get(exam.id) || []}
                        viewMode={viewMode}
                      />
                    ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const SkeletonCard = () => (
  <div className="border rounded-lg p-4 space-y-4">
    <div className="space-y-2">
      <Skeleton className="h-4 w-3/4" />
      <Skeleton className="h-4 w-1/2" />
    </div>
    <div className="space-y-2">
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-5/6" />
    </div>
  </div>
);
