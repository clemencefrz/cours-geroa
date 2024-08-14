import { Karla } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Toaster } from "@/components/ui/sonner";
import { FAQ } from "./components/Home/FAQ";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const font = Karla({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={font.className}>
        <div className="min-h-screen flex flex-col justify-between">
          <div>
            <Header />
            <main className="mx-9 mt-9 gap-9">
              {children}
              <FAQ />
              <Button
                variant="link"
                className="text-4xl font-bold text-white text-wrap text-center p-4"
                asChild
              >
                <Link href="/contact">Contactez-nous en cliquant ici </Link>
              </Button>
            </main>
          </div>
          <Toaster />
          <Footer />
        </div>
      </body>
    </html>
  );
}
