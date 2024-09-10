import Image from "next/image";

type Props = {
  firstName: string;
  job: string;
  formation: string;
  subjects: string[];
  qualifications: string;
  cibles: [string, ...string[]];
  srcImage: string;
};

const CardTutor = ({
  firstName,
  job,
  subjects,
  qualifications,
  cibles,
  srcImage,
  formation,
}: Props) => {
  return (
    <div className="border-2 p-9 flex flex-col gap-8 rounded-lg border-slate-200">
      {/* Header */}
      <div className="flex flex-col gap-1 items-center">
        {/* Photo */}
        <div className="rounded-full w-44 h-44 shadow-[6px_6px_0px] shadow-brandFour overflow-hidden">
          <Image
            width={300}
            height={300}
            src={srcImage}
            alt={`Photo de ${firstName}`}
            className="w-full h-full object-cover"
          />
        </div>

        <span className="font-bold text-3xl">{firstName}</span>
        <span className="font-bold text-xl text-slate-400">{job}</span>
        <span className="font-bold text-xl text-slate-400">{formation}</span>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <span className="font-semibold text-xl">{`Ce que j'enseigne :`}</span>
          <ul>
            {subjects.map((subject, key) => (
              <li key={key}>{`- ${subject}`}</li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-1">
          <span className="font-semibold text-xl">{`Pour qui ? :`}</span>
          <ul>
            {cibles.map((cible, key) => (
              <li key={key}>{`- ${cible}`}</li>
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
