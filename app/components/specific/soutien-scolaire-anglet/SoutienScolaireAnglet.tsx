import Link from "next/link";
import { FAQ } from "../home/FAQ";
import { Button } from "../../design-system/button";
import { FlipWords } from "../../design-system/flip-words";
import { MotionDiv } from "../contact/About";
import CoursCollectifs from "../nos-cours/CoursCollectifs";
import CoursParticuliers from "../nos-cours/CoursParticuliers";

const items = [
  {
    value: "item-1",
    question: "Comment se déroulent les cours particuliers à Anglet ?",
    answer:
      "L'élève prépare ses questions et le chapitre qu'il souhaite étudier à l'avance. Le professeur adapte le contenu du cours en fonction des besoins spécifiques de l'élève, et le cours se déroule en présentiel.",
  },
  {
    value: "item-2",
    question: "Comment puis-je réserver un cours collectif à Anglet ?",
    answer:
      "Pour réserver un cours collectif, vous devez vous inscrire sur notre plateforme, choisir le cours souhaité parmi les options disponibles et effectuer la réservation en ligne. Vous recevrez une confirmation par email avec les détails du cours.",
  },
  {
    value: "item-3",
    question: "Quelles sont les qualifications des professeurs à Anglet ?",
    answer:
      "Nous sommes deux ingénieurs d'Anglet passionés d'enseignements et nous avons beaucoup d'expériences dans le domaine des cours particuliers. Nous apprenons en autonomie les rouages de la pédagogie et nous nous efforçons de nous améliorer dans ce domaine. Pour en savoir plus, rendez-vous sur la page Qui sommes-nous :).",
  },
  {
    value: "item-4",
    question:
      "Combien coûte une séance de cours particulier de cours collectifs à Anglet ?",
    answer:
      "Le prix des cours est variable selon le besoin de chacun. Pour en savoir plus, rendez-vous sur la page Contact.",
  },
  {
    value: "item-5",
    question: "Les cours sont-ils adaptés à tous les niveaux à Anglet ?",
    answer:
      "Oui, nos cours basés sur Anglet sont adaptés à tous les niveaux, du débutant à l'avancé. Nos professeurs ajustent le contenu et le rythme en fonction du niveau de l'élève pour garantir une progression efficace.",
  },
  {
    value: "item-6",
    question: "Quels langages informatiques enseignez-vous à Anglet ?",
    answer:
      "Clémence se spécialise dans l’enseignement des langages Python, Matlab, JavaScript, HTML, et CSS. Elle propose également des cours d'algorithmie de base ainsi que des sessions pratiques sur les IA LLM (comme ChatGPT, Gemini, etc.), et comment les utiliser intelligemment.",
  },
  {
    value: "item-7",
    question:
      "À combien de temps des lycées se situe les Cours Geroa à Anglet ?",
    answer:
      "Nos cours se déroulent chez nous à Anglet, à 13 minutes à pied du Lycée Cantau, 25 minutes en bus du lycée Stella Maris, 13 minutes à pied de l'école d'ingénieur ISA BTP.",
  },
];
const words = [
  "Apprends",
  "Progresse",
  "Révise",
  "Épanouis-toi",
  "Trouve ta voie",
];

const SoutienScolaireAnglet = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="ContainerHeaderPage">
        <h1 className="flex flex-col">
          <FlipWords
            words={words}
            className="text-primary text-4xl md:text-5xl"
          />
          avec le soutien scolaire Geroa à Anglet
        </h1>

        <h2 className="H2SubtitlePage">
          {`Cours particulier, accompagnement scolaire et soutien scolaire en Mathématiques, physique-chimie et informatique pour lycéens et étudiants d'Anglet, scolarisés dans les établissements Lycée Stella Maris, Lycée Cantau, Lycée Saint-Louis Villa Pia, et l'école d'ingénieur ISA BTP.`}
        </h2>

        <Button asChild>
          <Link href="/contact">Demander un rendez-vous dès maintenant</Link>
        </Button>
      </div>
      <MotionDiv title={`Hey ! Vous cherchez du soutien scolaire à Anglet ?`}>
        <div className="flex flex-row w-full items-center justify-center gap-4">
          <span className="w-64 text-justify">
            {` Nous sommes Clémence et Damien, deux ingénieurs vivant à Anglet. Notre
          mission ? Aider les lycéens et les étudiants d'Anglet à réussir dans
          leurs études et à trouver leur voie.`}
            <br />
            {`Nous croyons aux valeurs de la discipline et de la responsabilité pour aider chacun à se réaliser et à s'éduquer, toujours dans la bonne humeur.`}
          </span>
        </div>
      </MotionDiv>
      <CoursCollectifs />

      <CoursParticuliers />
      <FAQ items={items} />
    </div>
  );
};

export default SoutienScolaireAnglet;
