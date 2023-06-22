import { IconBrandAndroid, IconLink } from "@tabler/icons-react";

import IProject from "~/types/IProject";
import ouiLarge from "../../public/images/1upinfinite/1.png";
import ouiSmall from "../../public/images/1upinfinite/2.png";
import bsLarge from "../../public/images/buildsomething/1.png";
import bsSmall from "../../public/images/buildsomething/2.png";
import ecomLarge from "../../public/images/ecom/1.png";
import ecomSmall from "../../public/images/ecom/2.png";
import ghsLarge from "../../public/images/ghstats/1.png";
import ghsSmall from "../../public/images/ghstats/2.png";
import slLarge from "../../public/images/shortl/1.png";
import slSmall from "../../public/images/shortl/2.png";
import tSmall from "../../public/images/tools/1.png";
import tLarge from "../../public/images/tools/2.png";
import zLarge from "../../public/images/zone/1.png";
import zSmall from "../../public/images/zone/2.png";

const projects: IProject[] = [
  {
    name: "E-commerce Store",
    type: "web",
    icon: <IconLink />,
    url: "https://tangerine-moose-ecommerce.vercel.app/",
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    description:
      "An fictional online storefront featuring a wide range of coffees, teas and equipment which can be filtered by tags, or sorted by price and name.",
    images: {
      large: {
        src: ecomSmall,
        alt: "homepage",
      },
      small: {
        src: ecomLarge,
        alt: "Product mobile homepage",
      },
    },
  },
  {
    name: "Tools",
    type: "web",
    icon: <IconLink />,
    url: "https://tools.zwwuu.dev",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    description: "Collection of useful tools for developers.",
    images: {
      large: {
        src: tLarge,
        alt: "Tools homepage",
      },
      small: {
        src: tSmall,
        alt: "Tools mobile homepage",
      },
    },
  },
  {
    name: "1UpInfinite",
    type: "web",
    icon: <IconLink />,
    url: "https://1upinfinite.com",
    tags: ["WordPress", "PHP", "JavaScript", "Sass"],
    description: "Video game journalism website.",
    images: {
      large: {
        src: ouiLarge,
        alt: "1 Up Infinite homepage",
      },
      small: {
        src: ouiSmall,
        alt: "1 Up Infinite mobile post page",
      },
    },
  },
  {
    name: "GH Stats",
    type: "web",
    icon: <IconLink />,
    url: "https://ghstats.xyz",
    repo: "https://github.com/zwwuu/gh-stats",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    description: "Website to check download count for your GitHub releases.",
    images: {
      large: {
        src: ghsLarge,
        alt: "GH Stats homepage",
      },
      small: {
        src: ghsSmall,
        alt: "GH Stats mobile detail page",
      },
    },
  },
  {
    name: "Build Something",
    type: "web",
    icon: <IconLink />,
    url: "https://buildsomething.zwwuu.dev",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
    description: "Platform where developers can improve their programming skills by working on real-world projects.",
    images: {
      large: {
        src: bsLarge,
        alt: "Build Something project page",
      },
      small: {
        src: bsSmall,
        alt: "Build Something mobile homepage",
      },
    },
  },
  {
    name: "Shortl",
    type: "web",
    icon: <IconLink />,
    url: "https://shortl.net",
    repo: "https://github.com/zwwuu/shortl",
    tags: ["Next.js", "PostgreSQL"],
    description: "Link shortener with password protection.",
    images: {
      large: {
        src: slLarge,
        alt: "Shortl homepage",
      },
      small: {
        src: slSmall,
        alt: "Shortl mobile homepage",
      },
    },
  },
  {
    name: "Zone",
    type: "mobile",
    icon: <IconBrandAndroid />,
    repo: "https://github.com/zwwuu/zone",
    url: "https://play.google.com/store/apps/details?id=dev.zwwuu.zone",
    tags: ["Android", "Flutter", "Dart", "Riverpod", "Isar"],
    description: "Yet another HackerNews client.",
    images: {
      large: {
        src: zLarge,
        alt: "zone banner",
      },
      small: {
        src: zSmall,
        alt: "zone homepage",
      },
    },
  },
];

export default projects;
