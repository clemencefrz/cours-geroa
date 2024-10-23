import LevelCard from "../_components/specific/exercices/level-card";

const levels = [{ name: "Seconde" }];

const Page = () => {
  return (
    <>
      <div className="ContainerHeaderPage">
        <h1>Exercices par niveau</h1>
        {levels.map((level, key) => (
          <LevelCard key={key} level={level} />
        ))}
      </div>
    </>
  );
};

export default Page;
