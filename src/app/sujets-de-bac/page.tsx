import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sujets de Bac - Cours Geroa",
  description: "Retrouvez ici les sujets de Bac.",
};

export default function Page() {
  return <h1 className="text-3xl font-bold">Sujets de Bac</h1>;
}


