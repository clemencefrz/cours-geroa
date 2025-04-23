import { prisma } from "../lib/prisma";

export class ChapterRepository {
  async findAll() {
    return prisma.chapters.findMany({
      include: {
        thematics: true,
      },
    });
  }

  async findByThematicId(thematicId: number) {
    return prisma.chapters.findMany({
      where: {
        thematic_id: thematicId,
      },
      include: {
        thematics: true,
      },
    });
  }

  async findByLevel(level: string) {
    return prisma.chapters.findMany({
      where: {
        taught_in_level: level,
      },
      include: {
        thematics: true,
      },
    });
  }
}
