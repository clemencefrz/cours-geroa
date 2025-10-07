import { Metadata } from "next";
import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import CardSujetDeBac from "@/components/specific/sujets-de-bac/CardSujetDeBac";

export const metadata: Metadata = {
  title: "Sujets de Bac - Cours Geroa",
  description: "Retrouvez ici les sujets de Bac.",
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
    const filePath = resolve(process.cwd(), "public", "sujets.json");
    const raw = await readFile(filePath, { encoding: "utf-8" });
    const data = JSON.parse(raw) as SujetItem[];
    return data;
  } catch (e) {
    throw new Error(
      `Une erreur est survenue lors de la récupération des sujets : ${e}`
    );
  }
}

export default async function Page() {
  const sujets = await getSujets();

  return (
    <div className="px-6 py-10 max-w-6xl mx-auto">
      <h1 className="text-3xl font-semibold mb-6">Sujets de Bac (Physique-Chimie)</h1>
      {sujets.length === 0 ? (
        <p>Aucun sujet disponible.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {sujets.map((s) => (
            <CardSujetDeBac key={s.id} sujet={s} />
          ))}
        </div>
      )}
    </div>
  );
}
