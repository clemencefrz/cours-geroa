export function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Bienvenue dans le blog de Cours Geroa.
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        {` Ici, vous trouverez des articles sur les thèmes de l'apprentissage, l'EdTech ainsi que des exercices pratiques.`}
      </h4>
    </section>
  );
}
