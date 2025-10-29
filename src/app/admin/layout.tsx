import { Metadata } from "next";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
    title: "Tableau de bord Administratrice - Cours Geroa",
    description: "Administration du site Cours Geroa",
    robots: {
        index: false,
        follow: false,
    },
};

export default async function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    // Vérifier si la requête vient de localhost
    const headersList = await headers();
    const host = headersList.get("host") || "";

    const isLocalhost =
        host.includes("localhost")

    // Rediriger vers la page d'accueil si ce n'est pas localhost
    if (!isLocalhost && process.env.NODE_ENV === "production") {
        redirect("/");
    }

    return <>{children}</>;
}


