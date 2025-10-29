import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Sujets de Bac - Mathématiques - Cours Geroa",
  description: "Retrouvez ici les sujets de Bac de Mathématiques.",
};


// async function getSujets(): Promise<SujetItem[]> {
//   try {
//     const filePath = resolve(process.cwd(), "public", "sujets.json");
//     const raw = await readFile(filePath, { encoding: "utf-8" });
//     const data = JSON.parse(raw) as SujetItem[];
//     return data;
//   } catch (e) {
//     throw new Error(
//       `Une erreur est survenue lors de la récupération des sujets : ${e}`
//     );
//   }
// }

// async function getChapitres() {
//   try {
//     const chaptersRaw = await readFile(resolve(process.cwd(), "public", "chapters.json"), { encoding: "utf-8" }).catch(() => "[]");
//     const chapters = JSON.parse(chaptersRaw) as { id: number; name: string; taughtInLevel?: string; thematic?: string; subject?: string }[];

//     return chapters
//   } catch (e) {
//     throw new Error(
//       `Une erreur est survenue lors de la récupération des chapitres : ${e}`
//     );
//   }
// }

export default async function Page() {
  // const [sujets, chapters] = await Promise.all([getSujets(), getChapitres()]);
  return (
    <div className="px-6 py-10 max-w-6xl mx-auto">
      <h1 className="text-3xl font-semibold mb-6">Sujets de Bac (Mathématiques)</h1>
      <p>à venir</p>
      {/* <SujetsGridWithFilter sujets={sujets} chapters={chapters} /> */}
    </div>
  );
}
