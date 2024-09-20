import { Karla } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Toaster } from "@/components/ui/sonner";
import { Metadata } from "next";
import GoogleAnalytics from "./GoogleAnalytics";

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
    <html lang="fr">
      <GoogleAnalytics />
      <body className={font.className}>
        <div className="flex flex-col gap-40 justify-center min-h-screen">
          <div>
            <Header />
            <main className="mx-9 mt-9 gap-9">{children}</main>
          </div>
          <Toaster />
          <Footer />
        </div>
      </body>
    </html>
  );
}
