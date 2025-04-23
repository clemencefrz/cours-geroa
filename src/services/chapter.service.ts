import { chapters, thematics } from "@prisma/client";
import { ChapterRepository } from "../repositories/chapter.repository";

export type ChapterWithThematic = chapters & {
  thematics: thematics;
};

export class ChapterService {
  private chapterRepository: ChapterRepository;

  constructor() {
    this.chapterRepository = new ChapterRepository();
  }

  async getAllChapters(): Promise<ChapterWithThematic[]> {
    return this.chapterRepository.findAll();
  }

  async getChaptersByThematicId(
    thematicId: number
  ): Promise<ChapterWithThematic[]> {
    return this.chapterRepository.findByThematicId(thematicId);
  }

  async getChaptersByLevel(level: string): Promise<ChapterWithThematic[]> {
    return this.chapterRepository.findByLevel(level);
  }
}
