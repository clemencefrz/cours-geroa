import CardTutor from "./CardTutor";

const About = () => {
  return (
    // Container
    <div className="w-full flex flex-col items-center justify-center px-24 gap-24">
      {/* Geroa signgification */}
      <h1 className="flex flex-col font-bold items-center justify-center w-full text-4xl text-start p-24">
        {`En basque, Geroa fait référence à l'avenir,`}
        <br />
        {`Bâtissez le votre dès aujourd'hui.`}
      </h1>

      {/* Clémence et Damien, Notre missions, nos valeurs*/}
      <div className="flex flex-row items-start justify-center gap-4">
        {/* Image de nous deux */}
        <div className="h-[300px] min-w-[500px] bg-black gap-2 -rotate-6" />
        <div className="flex flex-col gap-1">
          <h2 className="text-3xl self-end text-justify">{`Hey ! Bienvenue aux cours Geroa.`}</h2>
          <span>
            Nous sommes Clémence et Damien, deux ingénieurs Angloys (et fiers!).
            Notre mission ? Aider les lycéens et les étudiants à réussir dans
            leurs études et à trouver leur voie.
            <br></br>
            {` Nous croyons aux valeurs de la discipline et de la responsabilité
            pour aider chacun à se réaliser et à s'éduquer, toujours dans la
            bonne humeur.`}
          </span>
        </div>
      </div>

      {/* Qualifications, expériences et spécialisation */}
      <div className="flex flex-col items-center justify-start gap-4">
        <h2 className="text-3xl self-start">{`À propos de nous...`}</h2>

        <div className="grid grid-cols-2 gap-16">
          <CardTutor
            firstName="Clémence"
            job="Ingénieure informatique"
            subjects={[
              "Les mathématiques",
              "La physique-chimie",
              "L'informatique (Python, Typescript, Matlab, etc.)",
            ]}
            qualifications={`Après une classe prépa Math Sup/Math Spé, je suis entrée dans une grande école d'ingénieur toulousaine (l'ENSEEIHT). C'est là que j'ai commencé les cours particuliers, d'abord en agence (Complétude), puis avec mon école (Cours particuliers à des prépa) et enfin en auto-entreprise (des élèves du lycée Villa Pia, d'ISA BTP, d'EPITA...)`}
          />
          <CardTutor
            firstName="Damien"
            job="Ingénieur dans l'énergie du bâtiment"
            subjects={["Les mathématiques"]}
            qualifications={`Après une classe prépa Math Sup/Math Spé, j'ai été ..`}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
