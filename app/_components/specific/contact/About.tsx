"use client";
import { motion, useInView } from "framer-motion";
import CardTutor from "./CardTutor";
import Title from "./Title";
import { PropsWithChildren, useRef } from "react";

export const MotionDiv = ({
  children,
  title,
}: PropsWithChildren<{ title: string }>) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ y: 20, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : {}}
      transition={{ ease: "easeInOut", duration: 1 }}
      className="flex flex-col items-center justify-center gap-4 overflow-hidden"
    >
      <h2 className="text-center text-wrap">{title}</h2>

      {children}
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center md:px-24 gap-24">
      <Title />

      {/* Clémence et Damien, Notre missions, nos valeurs */}
      <MotionDiv title={`Hey ! Bienvenue aux cours Geroa`}>
        <span>
          Nous sommes Clémence et Damien, deux ingénieurs Angloys. Notre mission
          ? Aider les lycéens et les étudiants à réussir dans leurs études et à
          trouver leur voie.
          <br />
          {`Nous croyons aux valeurs de la discipline et de la responsabilité pour aider chacun à se réaliser et à s'éduquer, toujours dans la bonne humeur.`}
        </span>
      </MotionDiv>

      {/* Qualifications, expériences et spécialisation */}
      <MotionDiv title={`À propos de nous...`}>
        <div className="lg:grid lg:grid-cols-2 gap-9">
          <CardTutor
            firstName="Clémence"
            job="Ingénieure informatique"
            formation="Math sup/Math spé puis Ecole d'ingénieur ENSEEIHT"
            cibles={[
              "Elèves lycéens niveau seconde, première et terminale",
              "Licence",
              "Master",
              "Ecole d'ingénieur",
              "Classes préparatoires",
            ]}
            subjects={[
              "Les mathématiques",
              "La physique-chimie",
              "L'informatique (Python, Typescript, Matlab, etc.)",
            ]}
            qualifications={`Après une classe prépa Math Sup/Math Spé, je suis entrée dans une grande école d'ingénieur toulousaine (l'ENSEEIHT). C'est là que j'ai commencé les cours particuliers, d'abord en agence (Complétude), puis avec mon école (Cours particuliers à des prépa) et enfin en auto-entreprise (des élèves du lycée Villa Pia, d'ISA BTP, d'EPITA...)`}
            srcImage="/images/clemence.jpeg"
          />
          <CardTutor
            firstName="Damien"
            job="Ingénieur dans l'énergie du bâtiment"
            formation="Math sup/Math spé puis Master en Génie Civil"
            subjects={["Les mathématiques"]}
            qualifications={`Après mes années lycée à Villa Pia (Bayonne), je suis parti en classe prépa Math Sup/ Math Spé à Louis Barthou (Pau).
J'ai ensuite intégré l'Université de Toulouse où j'ai obtenu une Licence puis un Master en Génie Civil.
Je travaille aujourd'hui à Anglet en tant qu'ingénieur en performance énergétique et environnementale des bâtiments au sein de l'entreprise TIKOAM (filiale du groupe ETCHART).
Depuis mes années en prépa, je donne régulièrement des cours particuliers à des lycéens. J'ai également animé des sessions de cours de soutien collectifs en étant tuteur pour le CNAM (10-18 élèves par cours)`}
            cibles={["Elèves lycéens niveau seconde, première et terminale"]}
            srcImage="/images/damien.jpeg"
          />
        </div>
      </MotionDiv>

      <MotionDiv title="Notre vision">
        <div className="flex flex-col items-center gap-8 p-6 border-slate-200 rounded-lg">
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-brandTwo mb-4">{`Faciliter l'accès à une formation de qualité`}</h3>
            <p className="text-lg leading-relaxed max-w-3xl mx-auto">
              {`Chez Geroa, on souhaite faciliter l'accès à une formation de qualité dans le Pays Basque, tout en favorisant l'épanouissement personnel et le développement de l'esprit critique des élèves et jeunes adultes. Nous croyons fermement que chaque étudiant mérite un accompagnement personnalisé et possède les ressources en lui et la confiance dont il a besoin pour atteindre ses objectifs.`}
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-semibold text-brandTwo mb-4">{`Adapter l'éducation aux évolutions technologiques`}</h3>
            <p className="text-lg leading-relaxed max-w-3xl mx-auto">
              {`Nous avons à coeur d'adapter l'éducation aux évolutions technologiques tout en préservant les valeurs humaines et les principes fondamentaux de l'enseignement. Nous prônons l'intégration des dernières avancées en intelligence artificielle, en numérique et en réseaux sociaux, tout en maintenant un lien humain essentiel.`}
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-semibold text-brandTwo mb-4">{`Objectifs à court terme`}</h3>
            <h4 className="text-xl font-medium     mb-4">{`Dans les 5 prochaines années, nous aspirons à établir un espace dédié à Anglet, où nous offrirons :`}</h4>
            <ul className="list-disc list-inside space-y-3 max-w-2xl mx-auto">
              <li>{` Soutien scolaire et activités pratiques :   Cours de soutien scolaire et ateliers pour acquérir des compétences essentielles pour le futur.`}</li>
              <li>{` Ateliers et Débats :   Discussions sur des sujets d'actualité pour stimuler la réflexion critique.`}</li>
              <li>{` Conférences :   Événements sur des thématiques pertinentes pour les jeunes.`}</li>
              <li>{` Sorties culturelles :   Explorations de la région et découvertes d'entreprises locales.`}</li>
              <li>{` Découverte de métiers :   Programmes pour explorer diverses professions et rencontrer des professionnels du Pays Basque.`}</li>
            </ul>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-semibold text-brandTwo mb-4">{`Objectifs à moyen terme`}</h3>
            <h4 className="text-xl font-medium     mb-4">{`Dans 10 ans, nous visons à :`}</h4>
            <ul className="list-disc list-inside space-y-3 max-w-2xl mx-auto">
              <li>{` Élargir notre équipe :   Développer des applications et des outils éducatifs en collaboration avec les écoles locales.`}</li>
              <li>{` Continuer le soutien scolaire :   Offrir un soutien scolaire de premier ordre tout en intégrant des innovations technologiques.`}</li>
            </ul>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-semibold text-brandTwo mb-4">{`Objectifs à long terme`}</h3>
            <h4 className="text-xl font-medium     mb-4">{`Dans 20 ans nous avons pour ambition de :`}</h4>
            <ul className="list-disc list-inside space-y-3 max-w-2xl mx-auto">
              <li>
                {` Étendre notre modèle :   Établir fermement notre présence dans le Pays Basque et ouvrir des écoles similaires dans d'autres régions, de la même manière que le fait `}
                <a
                  className="text-brandFour"
                  target="_blank"
                  href="https://biltoki.com"
                >
                  Biltoki
                </a>
                {` pour leurs halles.`}
              </li>
              <li>{` Garantir une approche locale :   Chaque établissement sera dirigé par des personnes profondément ancrées dans leur communauté locale.`}</li>
              <li>{` Assurer l'Indépendance et l'Alignement :   Maintenir l'indépendance des écoles tout en respectant nos valeurs fondamentales pour offrir une approche éducative adaptée à chaque région.`}</li>
            </ul>
          </div>

          <div className="text-center">
            <p className="text-lg leading-relaxed max-w-3xl mx-auto">
              {`Chez Geroa, nous sommes déterminés à créer un avenir où l'éducation et l'accompagnement sont à la fois innovants et profondément humains, préparant les jeunes à exceller dans un monde en constante évolution tout en restant fidèles à nos valeurs essentielles.`}
            </p>
          </div>
        </div>
      </MotionDiv>
    </div>
  );
};

export default About;
