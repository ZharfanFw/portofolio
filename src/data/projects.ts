export type Project = {
  numeral: string;
  arcanaName: string;
  name: string;
  desc: string;
  slug: string;
};

export const projects: Project[] = [
  {
    numeral: "I",
    arcanaName: "the magician",
    name: "Wargi Kopi",
    desc: "full-stack POS system",
    slug: "wargi-kopi",
  },
  {
    numeral: "II",
    arcanaName: "the priestess",
    name: "Project two",
    desc: "short description here",
    slug: "project-two",
  },
  {
    numeral: "III",
    arcanaName: "the empress",
    name: "Project three",
    desc: "short description here",
    slug: "project-three",
  },
];
