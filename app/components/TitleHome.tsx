import { FlipWords } from "@/components/ui/flip-words";

export function TitleHome() {
  const words = ["confiant", "performant", "meilleur", "épanoui"];

  return (
    <div className="h-[40rem] flex justify-center items-center px-4">
      <h1 className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        Deviens
        <FlipWords words={words} /> <br />
        avec les cours Geroa
      </h1>
    </div>
  );
}
