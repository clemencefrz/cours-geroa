import { prisma } from "@/lib/prisma";

export type ExamWithDetails = {
  id: number;
  paper: string;
  correction: string | null;
  session: number;
  year: string;
  centers: {
    id: number;
    name: string;
  };
  exercises: Array<{
    id: number;
    title: string | null;
    content_keywords: string[];
    exercise_chapter: Array<{
      chapters: {
        id: number;
        name: string;
        thematic_id: number;
        taught_in_level: string;
        thematics: {
          id: number;
          name: string;
          subject_id: number;
        };
      };
    }>;
  }>;
};

export class ExamService {
  private convertExamToResponse(exam: any): ExamWithDetails {
    return {
      ...exam,
      year: exam.year.toString(),
    };
  }

  async getAllExams(): Promise<ExamWithDetails[]> {
    const exams = await prisma.exam_papers.findMany({
      include: {
        centers: true,
        exercises: {
          include: {
            exercise_chapter: {
              include: {
                chapters: {
                  include: {
                    thematics: true,
                  },
                },
              },
            },
          },
        },
      },
    });
    return exams.map(this.convertExamToResponse);
  }

  async getExamById(id: number): Promise<ExamWithDetails | null> {
    const exam = await prisma.exam_papers.findUnique({
      where: { id },
      include: {
        centers: true,
        exercises: {
          include: {
            exercise_chapter: {
              include: {
                chapters: {
                  include: {
                    thematics: true,
                  },
                },
              },
            },
          },
        },
      },
    });
    return exam ? this.convertExamToResponse(exam) : null;
  }

  async searchExams(query: string): Promise<ExamWithDetails[]> {
    const exams = await prisma.exam_papers.findMany({
      where: {
        OR: [
          { paper: { contains: query, mode: "insensitive" } },
          { centers: { name: { contains: query, mode: "insensitive" } } },
          {
            exercises: {
              some: { title: { contains: query, mode: "insensitive" } },
            },
          },
          { exercises: { some: { content_keywords: { has: query } } } },
          {
            exercises: {
              some: {
                exercise_chapter: {
                  some: {
                    chapters: {
                      name: { contains: query, mode: "insensitive" },
                    },
                  },
                },
              },
            },
          },
        ],
      },
      include: {
        centers: true,
        exercises: {
          include: {
            exercise_chapter: {
              include: {
                chapters: {
                  include: {
                    thematics: true,
                  },
                },
              },
            },
          },
        },
      },
    });
    return exams.map(this.convertExamToResponse);
  }
}
