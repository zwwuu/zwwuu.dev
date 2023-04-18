import { ReactNode } from "react";
import { StaticImageData } from "next/image";

export default interface IProject {
  name: string;
  description: string;
  type: string;
  url: string;
  repo?: string;
  images: {
    small?: { src: StaticImageData; alt: string };
    large: { src: StaticImageData; alt: string };
  };
  icon: ReactNode;
  tags: string[];
}
