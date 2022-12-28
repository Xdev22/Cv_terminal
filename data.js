const data = [
  {
    command: "help",
    infos: [
      { title: "ABOUT", description: "Affiche des informations me concernant" },
      {
        title: "EXPERIENCES",
        description: "Affiche mes experiences professionnelles",
      },
      {
        title: "HELP",
        description: "Affiche les commandes spécifiques",
      },
      {
        title: "PROJECT",
        description: "Affiche la liste de mes projets",
      },
      {
        title: "CLEAR",
        description: "Remet à zéro le terminale",
      },
    ],
  },
  {
    command: "about",
    infos: [
      { title: "NAME", description: "RAYAN" },
      {
        title: "STACK",
        description: "FULLSTACK",
      },
      {
        title: "FAVORITE STACK",
        description: "BACKEND",
      },
      {
        title: "FRAMEWORKS",
        description: "REACT,NODE,EXPRESS,NEST",
      },
      {
        title: "LANGAGE",
        description: "JavaScript,TypeScript, Python(en cours)",
      },
    ],
  },
  {
    command: "experiences",
    infos: [
      { title: "POSTES", description: "MES POSTES" },
      {
        title: "FORMATIONS",
        description: "MES FORMATIONS",
      },
    ],
  },
  {
    command: "formations",
    infos: [
      { title: "OPENCLASSROOMS", description: "DEV" },
      {
        title: "ASSISTANCE INFORMATIQUE",
        description: "GRETA",
      },
    ],
  },
  {
    command: "postes",
    infos: [
      { title: "otacos", description: "cuisine" },
      {
        title: "livreur",
        description: "amazon",
      },
    ],
  },
  {
    command: "project",
    infos: [{ title: "EN COURS", description: "En cours de production" }],
  },
];

export default data;
