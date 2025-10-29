import { Metadata } from "next";
import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import SujetsGridWithFilter from "@/components/specific/sujets-de-bac/SujetsGridWithFilter";

export const metadata: Metadata = {
  title: "Sujets de Bac - Physique-Chimie - Cours Geroa",
  description: "Retrouvez ici les sujets de Bac de Physique-Chimie.",
};

type SujetItem = {
  id: number;
  paper: string;
  year: number;
  session: number;
  level: string;
  centerName?: string;
  hasCorrection: boolean;
};


async function getSujets(): Promise<SujetItem[]> {
  try {
    const filePath = resolve(process.cwd(), "public", "sujets-physique-chimie.json");
    const raw = await readFile(filePath, { encoding: "utf-8" });
    const data = JSON.parse(raw) as SujetItem[];
    return data;
  } catch (e) {
    throw new Error(
      `Une erreur est survenue lors de la récupération des sujets : ${e}`
    );
  }
}

async function getChapitres() {
  try {
    const chaptersRaw = await readFile(resolve(process.cwd(), "public", "chapters.json"), { encoding: "utf-8" }).catch(() => "[]");
    const chapters = JSON.parse(chaptersRaw) as { id: number; name: string; taughtInLevel?: string; thematic?: string; subject?: string }[];

    return chapters
  } catch (e) {
    throw new Error(
      `Une erreur est survenue lors de la récupération des chapitres : ${e}`
    );
  }
}

export default async function Page() {
  const [sujets, chapters] = await Promise.all([getSujets(), getChapitres()]);
  return (
    <div className="px-6 py-10 max-w-6xl mx-auto">
      <h1 className="text-3xl font-semibold mb-6">Sujets de Bac (Physique-Chimie)</h1>
      <SujetsGridWithFilter sujets={sujets} chapters={chapters} />
    </div>
  );
}
