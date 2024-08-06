import { Button } from "@/components/ui/button";
import { Calendar, Clock, DollarSign, MapPin, User, Users } from "lucide-react";
import Link from "next/link";

const NosCours = () => {
  return (
    <div className="flex flex-col items-center w-full gap-12">
      <h1 className="p-8">Nos cours</h1>
      <div
        id={"cours-collectifs"}
        className=" bg-slate-100 w-full gap-4 flex flex-col p-8"
      >
        <h2>Les cours collectifs</h2>
        <div className="flex flex-col gap-8">
          <div className="flex flex-row gap-8">
            <p className="text-justify">
              {`Chez Geroa, nos cours collectifs sont faits pour tous les lycéens et étudiants, peu importe leur niveau. Chaque semaine, les élèves travaillent en petit groupe, progressent à leur rythme, tout ça dans une bonne ambiance !`}
            </p>
            <div className="bg-slate-200 w-full p-4 gap-2 flex flex-col">
              <p className="flex flex-row">
                <MapPin className="mr-2" /> À Anglet, proche de Villa Pia
              </p>
              <p className="flex flex-row">
                <Clock className="mr-2" /> Le mercredi soir ou le samedi matin
              </p>
              <p className="flex flex-row">
                <Calendar className="mr-2" /> Séances hebdomadaires de 2h à 4h
              </p>
              <p className="flex flex-row">
                <Users className="mr-2" /> En petit groupe de 4 élèves maximum
              </p>
              <p className="flex flex-row">
                <DollarSign className="mr-2" /> Tarif avantageux
              </p>
            </div>
          </div>
          <div>
            <p>{`Envie d'apprendre en groupe ? On propose deux options :`}</p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-xl">
                  Les sessions de soutien scolaire
                </h3>
                <p>{`Pour rester alignés avec le programme du lycée, les élèves sélectionnent chaque semaine un cours correspondant au chapitre qu’ils étudient en ce moment.`}</p>
              </div>
              <div>
                <h3 className="font-semibold text-xl">
                  {`Les cours "sur-mesures"`}
                </h3>
                <p>
                  {`Ces cours sont réservés aux lycéens. Pendant les cours de renforcement, les élèves choississent à l'avance un chapitre précis du programme et on le révise en profondeur tous ensemble.`}
                </p>
              </div>
            </div>
          </div>
          <Button asChild className="self-center">
            <Link href="/contact">Je prends rendez-vous</Link>
          </Button>
        </div>
      </div>
      {/* Les cours particuliers */}
      <div
        id={"cours-particuliers"}
        className="p-8 bg-slate-100 w-full flex flex-row"
      >
        <div className="w-full flex flex-col gap-8 ">
          <h2>Les cours particuliers</h2>
          <div className="flex flex-col gap-2">
            <p>
              {`Les cours collectifs Geroa s'adressent aux élèves de lycée de tout niveau. Chaque semaine, les élèves apprennent en petit groupe et progressent dans un cadre motivant et dans la bonne humeur.`}
            </p>
            <Button asChild className="self-start">
              <Link href="/contact">Je prends rendez-vous</Link>
            </Button>
          </div>
        </div>
        <div className="bg-slate-200 w-full p-4 gap-2 flex flex-col h-min">
          <p className="flex flex-row">
            <MapPin className="mr-2" /> À Anglet, proche de Villa Pia ou à
            domicile
          </p>
          <p className="flex flex-row">
            <Clock className="mr-2" /> Le soir après les cours
          </p>
          <p className="flex flex-row">
            <Calendar className="mr-2" /> Séances hebdomadaires de 1h30 à 2h00
          </p>
          <p className="flex flex-row">
            <User className="mr-2" /> {`Suivi personnalisé sur l'année`}
          </p>
        </div>
      </div>
      {/* Les stages */}
      <div id={"stages"} className="p-8 bg-slate-100 w-full flex flex-row">
        <div className="w-full flex flex-col gap-8 ">
          <h2>Les stages</h2>
          <div className="flex flex-col gap-2">
            <p>{`Les stages`}</p>
            <Button asChild className="self-start">
              <Link href="/contact">Je prends rendez-vous</Link>
            </Button>
          </div>
        </div>
        <div className="bg-slate-200 w-full p-4 gap-2 flex flex-col h-min">
          <p className="flex flex-row">
            <MapPin className="mr-2" /> À Anglet, proche de Villa Pia
          </p>
          <p className="flex flex-row">
            <Clock className="mr-2" /> Séances de 3h30
          </p>
          <p className="flex flex-row">
            <Calendar className="mr-2" /> Pendant les vacances scolaires
          </p>
          <p className="flex flex-row">
            <Users className="mr-2" />{" "}
            {`Révisions en groupe de 4 élèves maximum`}
          </p>
        </div>
      </div>
    </div>
  );
};
export default NosCours;
