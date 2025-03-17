import { Karla } from "next/font/google";
import "@/styles/globals.css";
import Header from "./components/specific/header";
import Footer from "./components/specific/footer";
import { Toaster } from "@/src/app/components/design-system/sonner";
import { Metadata } from "next";
import GoogleAnalytics from "./components/specific/google-analytics";

const font = Karla({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://cours-geroa.fr"),
  title: "Cours Geroa - Soutien scolaire Pays basque, Cours particuliers Geroa",
  description:
    "Découvrez notre soutien scolaire Geroa sur mesure pour lycéens et étudiants. Améliorez vos notes, gagnez en confiance et préparez votre avenir avec des cours en maths, physique et informatique adaptés à vos besoins avec les cours Geroa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <GoogleAnalytics />
        <div className={`${font.className} min-h-screen`}>
          <Header />
          <main className="mx-9 mt-9 gap-8">{children}</main>
          <Toaster className="absolute" />
          <Footer />
        </div>
      </body>
    </html>
  );
}
