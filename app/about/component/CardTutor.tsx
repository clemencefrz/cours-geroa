type Props = {
  firstName: string;
  job: string;
  subjects: string[];
  qualifications: string;
};

const CardTutor = ({ firstName, job, subjects, qualifications }: Props) => {
  return (
    <div className="border-2 border-black p-9 flex flex-col gap-8">
      {/* Header */}
      <div className="flex flex-col gap-1 items-center">
        {/* Photo */}
        <div className="rounded-full bg-black w-44 h-44" />
        <span className="font-bold text-3xl">{firstName}</span>
        <span className="font-bold text-xl text-slate-400">{job}</span>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-4">
        {/* Spécialités */}
        <div className="flex flex-col gap-1">
          <span className="font-semibold text-xl">{`Ce que j'enseigne :`}</span>
          <ul>
            {subjects.map((subject, key) => (
              <li key={key}>{`- ${subject}`}</li>
            ))}
          </ul>
        </div>
        {/* Expériences et qualifications */}
        <div className="flex flex-col gap-1">
          <span className="font-semibold text-xl">
            Mes qualifications et expériences :
          </span>
          <span className="text-justify">{qualifications}</span>
        </div>
      </div>
    </div>
  );
};

export default CardTutor;
