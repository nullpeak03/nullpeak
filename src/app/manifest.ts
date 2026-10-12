import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Null Peak . — From Zero to Found",
    short_name: "Null Peak",
    description:
      "Kathmandu digital agency: websites, Google presence, apps, AI agents.",
    start_url: "/",
    display: "standalone",
    background_color: "#060A12",
    theme_color: "#060A12",
    icons: [{ src: "/logo.png", sizes: "800x800", type: "image/png" }],
  };
}
