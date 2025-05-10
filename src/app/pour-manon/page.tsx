"use client";

import React, { useState } from "react";
import { X, Check } from "lucide-react";

interface Chapter {
  name: string;
  description?: string;
  isCompleted: boolean;
  isCompletedWithClemence: boolean;
}

interface Theme {
  name: string;
  chapters: Chapter[];
}

const initialThemes: Theme[] = [
  {
    name: "Organisation et transformation de la matière",
    chapters: [
      {
        name: "Le modèle de l'atome",
        description: "Structure de l'atome et évolution de l'Univers",
        isCompleted: false,
        isCompletedWithClemence: false
      },
      {
        name: "Les ions et le pH",
        description: "Formation des ions et acidité des solutions",
        isCompleted: false,
        isCompletedWithClemence: false
      },
      {
        name: "Les métaux",
        description: "Propriétés et réactions des métaux",
        isCompleted: true,
        isCompletedWithClemence: false
      },
      {
        name: "Les solutions acides et les réactions chimiques",
        description: "Réactions chimiques et solutions acides",
        isCompleted: false,
        isCompletedWithClemence: false
      }
    ]
  },
  {
    name: "Mouvement et interactions",
    chapters: [
      {
        name: "La relativité du mouvement",
        description: "Mouvement relatif et référentiels",
        isCompleted: false,
        isCompletedWithClemence: false
      },
      {
        name: "Les forces",
        description: "Différents types de forces et leurs effets",
        isCompleted: true,
        isCompletedWithClemence: false
      },
      {
        name: "La gravitation",
        description: "Force gravitationnelle et ses applications",
        isCompleted: false,
        isCompletedWithClemence: false
      }
    ]
  },
  {
    name: "L'énergie et ses conversions",
    chapters: [
      {
        name: "La conservation de l'énergie",
        description: "Principes de conservation et transformations d'énergie",
        isCompleted: true,
        isCompletedWithClemence: false
      },
      {
        name: "Les dangers de l'électricité",
        description: "Sécurité électrique et prévention des risques",
        isCompleted: true,
        isCompletedWithClemence: false
      }
    ]
  },
  {
    name: "Des signaux pour observer et communiquer",
    chapters: [
      {
        name: "Transporter de l'information avec un signal lumineux ou sonore",
        description: "Propagation des signaux lumineux et sonores",
        isCompleted: false,
        isCompletedWithClemence: false
      }
    ]
  }
];

export default function PourManonPage() {
  const [themes, setThemes] = useState<Theme[]>(initialThemes);

  const handleChapterToggle = (themeIndex: number, chapterIndex: number) => {
    setThemes(prevThemes => {
      const newThemes = [...prevThemes];
      newThemes[themeIndex].chapters[chapterIndex].isCompleted = 
        !newThemes[themeIndex].chapters[chapterIndex].isCompleted;
      return newThemes;
    });
  };

  const handleClemenceToggle = (themeIndex: number, chapterIndex: number) => {
    setThemes(prevThemes => {
      const newThemes = [...prevThemes];
      newThemes[themeIndex].chapters[chapterIndex].isCompletedWithClemence = 
        !newThemes[themeIndex].chapters[chapterIndex].isCompletedWithClemence;
      return newThemes;
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Suivi des Révisions - Physique-Chimie 3ème
      </h1>
      
      <div className="space-y-8">
        {themes.map((theme, themeIndex) => (
          <div key={themeIndex} className="bg-card rounded-lg shadow-md p-6">
            <div className="mb-4">
              <h2 className="text-2xl font-semibold text-primary">
                {theme.name}
              </h2>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4">Chapitre</th>
                    <th className="text-left py-3 px-4">Description</th>
                    <th className="text-center py-3 px-4">Vu en cours</th>
                    <th className="text-center py-3 px-4">Vu avec Clémence</th>
                  </tr>
                </thead>
                <tbody>
                  {theme.chapters.map((chapter, chapterIndex) => (
                    <tr 
                      key={chapterIndex}
                      className={`border-b hover:bg-accent/50 transition-colors ${
                        chapter.isCompleted ? 'bg-accent/20' : ''
                      }`}
                    >
                      <td className="py-3 px-4 font-medium">
                        {chapter.name}
                      </td>
                      <td className="py-3 px-4 text-muted-foreground">
                        {chapter.description}
                      </td>
                      <td className="py-3 px-4 text-center">
                        <button
                          onClick={() => handleChapterToggle(themeIndex, chapterIndex)}
                          className="p-1 hover:bg-accent rounded-full transition-colors"
                        >
                          {chapter.isCompleted ? (
                            <Check className="h-5 w-5 text-primary" />
                          ) : (
                            <X className="h-5 w-5 text-destructive" />
                          )}
                        </button>
                      </td>
                      <td className="py-3 px-4 text-center">
                        <button
                          onClick={() => handleClemenceToggle(themeIndex, chapterIndex)}
                          className="p-1 hover:bg-accent rounded-full transition-colors"
                        >
                          {chapter.isCompletedWithClemence ? (
                            <Check className="h-5 w-5 text-primary" />
                          ) : (
                            <X className="h-5 w-5 text-destructive" />
                          )}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 