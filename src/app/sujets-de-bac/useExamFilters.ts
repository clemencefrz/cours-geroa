import { Prisma } from "@prisma/client";
import { useState, useCallback, useMemo } from "react";

export type ExamWithDetails = Prisma.exam_papersGetPayload<{
  include: {
    centers: true;
    exercises: {
      include: {
        exercise_chapter: {
          include: {
            chapters: {
              include: {
                thematics: true;
              };
            };
          };
        };
      };
    };
  };
}>;

type ExerciseMatch = {
  exerciseId: number;
  matchedWords: string[];
};

export const useExamFilters = (allExams: ExamWithDetails[]) => {
  const [selectedChapters, setSelectedChapters] = useState<Set<number>>(
    new Set()
  );
  const [selectedCenters, setSelectedCenters] = useState<Set<number>>(
    new Set()
  );
  const [searchTerm, setSearchTerm] = useState("");

  // Get unique chapters and centers for side bar
  const { chapters, centers } = useMemo(() => {
    const chaptersMap = new Map<number, { id: number; name: string }>();
    const centersMap = new Map<number, { id: number; name: string }>();

    allExams.forEach((exam) => {
      // Add center if not already present
      if (!centersMap.has(exam.centers.id)) {
        centersMap.set(exam.centers.id, {
          id: exam.centers.id,
          name: exam.centers.name,
        });
      }

      // Add unique chapters for this exam
      const examChapters = new Set<number>();
      exam.exercises.forEach((exercise) => {
        exercise.exercise_chapter.forEach(({ chapters }) => {
          if (!examChapters.has(chapters.id)) {
            examChapters.add(chapters.id);
            if (!chaptersMap.has(chapters.id)) {
              chaptersMap.set(chapters.id, {
                id: chapters.id,
                name: chapters.name,
              });
            }
          }
        });
      });
    });

    // Convert maps to sorted arrays
    const sortedChapters = Array.from(chaptersMap.values()).sort((a, b) =>
      a.name.localeCompare(b.name)
    );

    const sortedCenters = Array.from(centersMap.values()).sort((a, b) =>
      a.name.localeCompare(b.name)
    );

    return {
      chapters: sortedChapters,
      centers: sortedCenters,
    };
  }, [allExams]);

  // Search utilities
  const normalizeText = useCallback((text: string): string => {
    return text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "") // Remove accents
      .replace(/[^a-z0-9\s]/g, " ") // Keep only alphanumeric and spaces
      .replace(/\s+/g, " ") // Replace multiple spaces with single space
      .trim();
  }, []);

  const getSingularForm = useCallback((word: string): string => {
    if (word.endsWith("s")) return word.slice(0, -1);
    return word;
  }, []);

  const getPluralForm = useCallback((word: string): string => {
    if (!word.endsWith("s")) return word + "s";
    return word;
  }, []);

  const getWordVariations = useCallback(
    (word: string): string[] => {
      const normalized = normalizeText(word);
      const singular = getSingularForm(normalized);
      const plural = getPluralForm(normalized);
      return [...new Set([normalized, singular, plural])];
    },
    [normalizeText, getSingularForm, getPluralForm]
  );

  const isWordMatch = useCallback(
    (text: string, searchWords: string[]): boolean => {
      const normalizedText = normalizeText(text);
      return searchWords.some((word) => {
        const variations = getWordVariations(word);
        return variations.some((variation) =>
          normalizedText.includes(variation)
        );
      });
    },
    [normalizeText, getWordVariations]
  );

  const findMatchingExercises = useCallback(
    (exam: ExamWithDetails, searchTerms: string[]): ExerciseMatch[] => {
      const matches: ExerciseMatch[] = [];
      const normalizedSearchTerms = searchTerms.map((term) =>
        normalizeText(term)
      );

      exam.exercises.forEach((exercise) => {
        const matchedWords: string[] = [];

        // Check title matches
        if (
          exercise.title &&
          isWordMatch(exercise.title, normalizedSearchTerms)
        ) {
          matchedWords.push(...searchTerms);
        }

        // Check content keywords matches
        if (exercise.content_keywords) {
          exercise.content_keywords.forEach((keyword) => {
            if (isWordMatch(keyword, normalizedSearchTerms)) {
              matchedWords.push(...searchTerms);
            }
          });
        }

        // Check chapter matches
        exercise.exercise_chapter.forEach(({ chapters }) => {
          if (isWordMatch(chapters.name, normalizedSearchTerms)) {
            matchedWords.push(...searchTerms);
          }
        });

        if (matchedWords.length > 0) {
          matches.push({
            exerciseId: exercise.id,
            matchedWords: [...new Set(matchedWords)],
          });
        }
      });

      return matches;
    },
    [normalizeText, isWordMatch]
  );

  // Filter exams based on selected chapters, centers, and search term
  const { filteredExams, matchingExercises } = useMemo(() => {
    let filtered = allExams;

    // Apply chapter and center filters
    if (selectedChapters.size > 0 || selectedCenters.size > 0) {
      filtered = filtered.filter((exam) => {
        const matchesCenter =
          selectedCenters.size === 0 || selectedCenters.has(exam.centers.id);

        const matchesChapter =
          selectedChapters.size === 0 ||
          exam.exercises.some((exercise) =>
            exercise.exercise_chapter.some(({ chapters }) =>
              selectedChapters.has(chapters.id)
            )
          );

        return matchesCenter && matchesChapter;
      });
    }

    // Apply search term filter
    const newMatchingExercises = new Map<number, ExerciseMatch[]>();
    if (searchTerm.trim()) {
      const searchTerms = searchTerm
        .toLowerCase()
        .split(/\s+/)
        .filter((term) => term.length > 0);

      filtered = filtered.filter((exam) => {
        // Check exam center and year
        const examBasicInfo = `${exam.centers.name} ${exam.year.toString()}`;
        if (isWordMatch(examBasicInfo, searchTerms)) {
          return true;
        }

        // Check exercises, their content keywords, and chapters
        const matches = findMatchingExercises(exam, searchTerms);
        if (matches.length > 0) {
          newMatchingExercises.set(exam.id, matches);
          return true;
        }

        return false;
      });
    }

    return {
      filteredExams: filtered,
      matchingExercises: newMatchingExercises,
    };
  }, [
    allExams,
    selectedChapters,
    selectedCenters,
    searchTerm,
    isWordMatch,
    findMatchingExercises,
  ]);

  const handleChapterChange = useCallback(
    (chapterId: number, checked: boolean) => {
      setSelectedChapters((prev) => {
        const newSelected = new Set(prev);
        if (checked) {
          newSelected.add(chapterId);
        } else {
          newSelected.delete(chapterId);
        }
        return newSelected;
      });
    },
    []
  );

  const handleCenterChange = useCallback(
    (centerId: number, checked: boolean) => {
      setSelectedCenters((prev) => {
        const newSelected = new Set(prev);
        if (checked) {
          newSelected.add(centerId);
        } else {
          newSelected.delete(centerId);
        }
        return newSelected;
      });
    },
    []
  );

  return {
    searchTerm,
    setSearchTerm,
    chapters,
    centers,
    selectedChapters,
    selectedCenters,
    filteredExams,
    matchingExercises,
    handleChapterChange,
    handleCenterChange,
  };
};
