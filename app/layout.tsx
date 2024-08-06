import { Karla } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Toaster } from "@/components/ui/sonner";
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
            <main className="mx-9 mt-9">{children}</main>
          </div>
          <aside className="flex flex-cal justify-center items-center p-24 w-full my-24 bg-black">
            <Button
              variant="ghost"
              className="text-4xl font-bold text-white"
              asChild
            >
              <Link href="/contact">Contactez-nous en cliquant ici </Link>
            </Button>
          </aside>
          <Toaster />
          <Footer />
        </div>
      </body>
    </html>
  );
}
