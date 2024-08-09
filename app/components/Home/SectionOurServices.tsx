import { classNameSection } from ".";
import { CardsNosCours } from "./CardsNosCours";

const SectionOurServices = () => {
  return (
    <div className={classNameSection}>
      <h2>{`Tu veux progresser en...`}</h2>
      <div className="flex flex-col gap-2">
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
