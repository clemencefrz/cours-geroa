import FormContact from "./FormContact";

const Contact = () => {
  return (
    <div className="container flex flex-col items-center gap-4">
      {/* Titre */}
      <h1>Contactez-nous</h1>
      {/* Sous-Titre */}
      <h2>Vous voulez un rendez-vous ?</h2>
      {/* Formulaire */}
      <FormContact />
      {/* Contact par téléphone */}
      <div>
        Vous pouvez aussi nous contacter directement par téléphone au 0665452214
      </div>
    </div>
  );
};
export default Contact;
