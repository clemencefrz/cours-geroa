"use client"

import { ColumnDef } from "@tanstack/react-table"

export type SujetDeBac = {
    id: number
    paper: string
    year: number
    session: number
    level: string
    centerName: string
    correction?: string
    hasCorrection: boolean
    chapters: string[]
    exercises: {
        index: number
        chapters: string[]
    }[]
}

export const columns: ColumnDef<SujetDeBac>[] = [
    {
        accessorKey: "year",
        header: "Année",
        cell: ({ row }) => <div>{row.getValue("year")}</div>,
    },
    {
        accessorKey: "centerName",
        header: "Centre",
        cell: ({ row }) => <div>{row.getValue("centerName")}</div>,
    },
    {
        accessorKey: "session",
        header: "Session",
        cell: ({ row }) => <div>{row.getValue("session")}</div>,
    },
]

