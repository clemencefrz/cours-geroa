import { ChapterService } from "@/services/chapter.service";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const chapterService = new ChapterService();
    const chapters = await chapterService.getAllChapters();
    return NextResponse.json(chapters);
  } catch (error) {
    console.error("Error fetching chapters:", error);
    return NextResponse.json(
      { error: "Failed to fetch chapters" },
      { status: 500 }
    );
  }
}
