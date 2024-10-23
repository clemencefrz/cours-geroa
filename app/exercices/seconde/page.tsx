import data from "../../../data/exercises/exercises.json";
import ChapterCard from "@/app/_components/specific/exercices/chapter-card";

const Page = () => {
  const chapters = data.chapters.filter((chapter) => chapter.levelId === 1);
  return (
    <div className="ContainerHeaderPage">
      <h1>Chapitres </h1>
      {chapters.map((chapter, key) => (
        <ChapterCard key={key} chapter={chapter} level={{ name: "Seconde" }} />
      ))}
    </div>
  );
};

export default Page;
