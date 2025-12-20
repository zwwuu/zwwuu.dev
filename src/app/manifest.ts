import type { MetadataRoute } from "next";

import { colors } from "@/constants/colors";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: process.env.NEXT_PUBLIC_APP_NAME,
    description: process.env.NEXT_PUBLIC_APP_DESCRIPTION,
    background_color: colors.black,
    dir: "auto",
    display: "standalone",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    lang: "en",
    orientation: "any",
    short_name: process.env.NEXT_PUBLIC_APP_NAME,
    start_url: "/",
    theme_color: colors.black,
  };
}
