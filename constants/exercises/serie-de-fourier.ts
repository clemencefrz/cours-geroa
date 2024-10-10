// constants/exercises.ts

export const EXERCISES = [
  {
    id: 1,
    title: "Exercice 1",
    exercise: `
      <strong>Énoncé :</strong><br />
      Calculez l'intégrale suivante sur l'intervalle \\([- \\pi, \\pi]\\) :<br />
      \\[
      I_1 = \\int_{-\\pi}^{\\pi} \\cos(nx) \\, dx
      \\]<br />
    `,
    solution: `
      <strong>Correction :</strong><br />
      Le cosinus est une fonction paire, donc l'intégrale sur un intervalle symétrique comme \\([- \\pi, \\pi]\\) se simplifie à deux fois l'intégrale sur \\([0, \\pi]\\).<br />
      Cependant, nous savons que sur une période complète, le cosinus s'annule, sauf pour \\(n = 0\\).<br />
      Pour \\(n \\neq 0\\) :<br />
      \\[
      I_1 = 0
      \\]<br />
      Pour \\(n = 0\\) :<br />
      \\[
      I_1 = \\int_{-\\pi}^{\\pi} 1 \\, dx = 2\\pi
      \\]
    `,
  },
  {
    id: 2,
    title: "Exercice 2",
    exercise: `
      <strong>Énoncé :</strong><br />
      Calculez l'intégrale suivante sur l'intervalle \\([- \\pi, \\pi]\\) :<br />
      \\[
      I_2 = \\int_{-\\pi}^{\\pi} \\sin(nx) \\, dx
      \\]<br />
    `,
    solution: `
      <strong>Correction :</strong><br />
      Le sinus est une fonction impaire. Lorsqu'on intègre une fonction impaire sur un intervalle symétrique comme \\([- \\pi, \\pi]\\), l'intégrale est automatiquement nulle.<br />
      \\[
      I_2 = 0 \\quad \\text{pour tout } n
      \\]
    `,
  },
  {
    id: 3,
    title: "Exercice 3",
    exercise: `
      <strong>Énoncé :</strong><br />
      Calculez l'intégrale suivante sur l'intervalle \\([- \\pi, \\pi]\\) :<br />
      \\[
      I_3 = \\int_{-\\pi}^{\\pi} \\cos(mx) \\cos(nx) \\, dx
      \\]<br />
    `,
    solution: `
      <strong>Correction :</strong><br />
      Utilisons la formule de produit trigonométrique :<br />
      \\[
      \\cos(mx) \\cos(nx) = \\frac{1}{2} \\left[ \\cos((m+n)x) + \\cos((m-n)x) \\right]
      \\]<br />
      L'intégrale devient :<br />
      \\[
      I_3 = \\frac{1}{2} \\int_{-\\pi}^{\\pi} \\left[ \\cos((m+n)x) + \\cos((m-n)x) \\right] \\, dx
      \\]<br />
      Pour \\(m \\neq n\\), les intégrales des cosinus sur une période complète sont nulles :<br />
      \\[
      I_3 = 0 \\quad \\text{si} \\, m \\neq n
      \\]<br />
      Pour \\(m = n\\) :<br />
      \\[
      I_3 = \\int_{-\\pi}^{\\pi} \\cos^2(nx) \\, dx = \\pi
      \\]
    `,
  },
  // Ajoutez d'autres exercices ici
];
