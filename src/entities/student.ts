export const ARRAY_CLASSES = [
  "Seconde",
  "Première",
  "Terminale",
  "Supérieure",
] as const;

export type TYPE_CLASSES = (typeof ARRAY_CLASSES)[number];

export const ARRAY_VILLES = [
  "Anglet",
  "Bayonne",
  "Biarritz",
  "Autre ville",
] as const;

export type TYPE_VILLES = (typeof ARRAY_VILLES)[number];

export const ARRAY_SPECIALITES = [
  "Mathématiques",
  "Physique-Chimie",
  "Numérique et sciences informatiques",
  "Sciences de l'ingénieur",
] as const;

export type TYPE_SPECIALITES = (typeof ARRAY_SPECIALITES)[number];

export const ARRAY_VOIE = ["Générale", "Technologique", ""] as const;
