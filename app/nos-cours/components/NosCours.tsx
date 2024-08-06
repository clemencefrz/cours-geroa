import { Button } from "@/components/ui/button";
import Link from "next/link";

const NosCours = () => {
  return (
    <div className="flex flex-col items-center w-full gap-24">
      <h1 className="p-24">Nos cours</h1>
      <div id={"cours-collectifs"} className="p-8 bg-slate-100 w-full">
        {/* Titre */}
        <h2>Les cours collectifs</h2>
        <div className="flex flex-col gap-8">
          {/* Description générale */}
          <p>
            {`Les cours collectifs Geroa s'adressent aux élèves de lycée de tout niveau. Chaque semaine, les élèves apprennent en petit groupe et progressent dans un cadre motivant et dans la bonne humeur.`}
          </p>
          <div>
            <p> {`Nous proposons deux types de cours collectifs :`}</p>
            <div className="flex flex-row gap-4">
              <div>
                <h3 className="font-semibold text-xl">
                  Les ateliers de soutien scolaire
                </h3>
                <p>{`Durant ces ateliers, choisissent chaque semaine le cours qui correspond au chapitre qu'il sont en train de faire. Ils sont parfaitement en phase avec ce qu'ils font au lycée. `}</p>
              </div>
              <div>
                <h3 className="font-semibold text-xl">Les cours thématiques</h3>
                <p>{`Les élèves et étudiants peuvent également choisir un chapitre ou un sujet en particulier et venir les travailler en profondeur`}</p>
              </div>
            </div>
          </div>
          <Button asChild className="self-center">
            <Link href="/contact">Je prends rendez-vous</Link>
          </Button>
          {/* Les points clefs */}
          <div className="bg-slate-200">
            <p>Anglet, proche de Villa Pia</p>
            <p>Le soir après les cours ou le samedi matin</p>
            <p>Séances hebdomadaires de 2h à 4h</p>
            <p>En petit groupe de 4 élèves maximum </p>
            <p> Supports pédagogiques adaptés</p>
          </div>
        </div>
      </div>
      <div
        id={"cours-particuliers"}
        className="p-8 bg-slate-100 w-full flex flex-col items-end"
      >
        <h2>Les cours particuliers</h2>
        <div className="flex flex-col gap-8">
          <p>
            {`Les cours collectifs Geroa s'adressent aux élèves de lycée de tout niveau. Chaque semaine, les élèves apprennent en petit groupe et progressent dans un cadre motivant et dans la bonne humeur.`}
          </p>
          <Button asChild className="self-center">
            <Link href="/contact">Je prends rendez-vous</Link>
          </Button>
          {/* Les points clefs */}
          <div className="bg-slate-200">
            <p>Anglet, proche de Villa Pia</p>
            <p>Le soir après les cours</p>
            <p>Séances hebdomadaires de 2h à 4h</p>
            <p>
              Professeur en cours individuel qui s’adapte à vos besoins et
              objectifs
            </p>
            <p>
              Bénéficiez de l’avance immédiate de crédit d’impôt et ne payez que
              50% du prix de vos cours?
            </p>
          </div>
        </div>
      </div>
      <div id={"stages"} className="p-8 bg-slate-100 w-full">
        <h2>Les stages</h2>
        <div className="flex flex-col gap-8">
          <p>
            {`Nos stages sont accessibles à chaque période de vacances, l'élève pourra se remettre à niveau, progresser, réviser ou se perfectionner dans toutes les matières.`}
          </p>
          <Button asChild className="self-center">
            <Link href="/contact">Je prends rendez-vous</Link>
          </Button>
          {/* Les points clefs */}
          <div className="bg-slate-200">
            <p>Anglet, proche de Villa Pia</p>
            <p>3 demi journées pendant les vacances de la Toussaint</p>
            <p>Séances hebdomadaires de 3h30</p>
            <p>En petit groupe de 4 élèves maximum</p>
            <p>Renforcement intensif</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NosCours;
