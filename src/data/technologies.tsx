import {
  SiCss3,
  SiDart,
  SiElectron,
  SiExpress,
  SiFlutter,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiSubversion,
  SiTypescript,
  SiVuedotjs,
  SiWordpress,
} from "@icons-pack/react-simple-icons";

import ITechnology from "~/types/ITechnology";

const technologies: ITechnology[] = [
  { name: "HTML", icon: <SiHtml5 title={"HTML 5"} /> },
  { name: "CSS", icon: <SiCss3 title={"CSS 3"} /> },
  { name: "JavaScript", icon: <SiJavascript title={"JavaScript"} /> },
  { name: "React", icon: <SiReact title={"React"} /> },
  { name: "Vue.js", icon: <SiVuedotjs title={"Vue.js"} /> },
  { name: "Flutter", icon: <SiFlutter title={"Flutter"} /> },
  { name: "Electron", icon: <SiElectron title={"Electron"} /> },
  { name: "Next.js", icon: <SiNextdotjs title={"Next.js"} /> },
  { name: "WordPress", icon: <SiWordpress title={"WordPress"} /> },
  { name: "Express", icon: <SiExpress title={"Express"} /> },
  { name: "Node.js", icon: <SiNodedotjs title={"Node.js"} /> },
  { name: "TypeScript", icon: <SiTypescript title={"TypeScript"} /> },
  { name: "PHP", icon: <SiPhp title={"PHP"} /> },
  { name: "Dart", icon: <SiDart title={"Dart"} /> },
  { name: "MySQL", icon: <SiMysql title={"MySQL"} /> },
  { name: "PostgreSQL", icon: <SiPostgresql title={"PostgreSQL"} /> },
  { name: "MongoDB", icon: <SiMongodb title={"MongoDB"} /> },
  { name: "Prisma", icon: <SiPrisma title={"Prisma"} /> },

  { name: "Git", icon: <SiGit title={"Git"} /> },
  { name: "Subversion", icon: <SiSubversion title={"Subversion"} /> },
];

export default technologies;
