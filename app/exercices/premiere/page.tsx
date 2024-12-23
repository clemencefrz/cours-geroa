import data from "../../../data/exercises/exercises.json";
import ChapterCard from "@/app/_components/specific/exercices/chapter-card";

const Page = () => {
  const chapters = data.chapters.filter((chapter) => chapter.levelId === 2);
  return (
    <div className="flex flex-col h-full items-center gap-4">
      <h1>Chapitres </h1>
      {chapters.map((chapter, key) => (
        <ChapterCard key={key} chapter={chapter} level={{ name: "Première" }} />
      ))}
    </div>
  );
};

export default Page;
