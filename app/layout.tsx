import { Karla } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Toaster } from "@/components/ui/sonner";
import { FAQ } from "./components/Home/FAQ";

const font = Karla({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={font.className}>
        <div className="flex flex-col gap-40 justify-center min-h-screen">
          <div>
            <Header />
            <main className="mx-9 mt-9 gap-9">
              {children}
              <FAQ />
            </main>
          </div>
          <Toaster />
          <Footer />
        </div>
      </body>
    </html>
  );
}
