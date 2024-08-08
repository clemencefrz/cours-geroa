import { CardsNosCours } from "./CardsNosCours";

const SectionOurServices = () => {
  return (
    <div>
      <h2>{`Besoin de progresser en...`}</h2>
      <div className="flex flex-row gap-2">
        <div>Math</div>
        <div>Physique-Chimie</div>
        <div>Info</div>
      </div>
      <div>
        <p>{`On est là pour t'aider à briller.`}</p>
        <h2>Nos cours</h2>
        <CardsNosCours />
      </div>
    </div>
  );
};

export default SectionOurServices;
