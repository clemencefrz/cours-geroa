import { DataTable } from "@/components/specific/data-table"
import { columns } from "@/components/specific/admin/columns"
import sujetsData from "@/../public/sujets-physique-chimie.json"

export default function AdminPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-8">
                Tableau de bord - Admin
            </h1>
            <div className="mt-8">
                <h2 className="text-2xl font-semibold mb-4">Sujets de Bac - Physique-Chimie</h2>
                <DataTable
                    columns={columns}
                    data={sujetsData}
                />
            </div>
        </div>
    );
}

