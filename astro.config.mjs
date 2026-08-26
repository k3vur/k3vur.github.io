// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Newsreader",
      cssVariable: "--font-newsreader",
      styles: ["normal", "italic"],
      weights: ["400 600"], // gets translated to 400..600 and includes opsz
      fallbacks: ["Iowan Old Style", "Palatino Linotype", "Georgia", "serif"],
    },
    {
      provider: fontProviders.google(),
      name: "Inter",
      cssVariable: "--font-inter",
      weights: ["400 600"], // translated to 400..600
      fallbacks: [
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "Segoe UI",
        "sans-serif",
      ],
    },
    {
      provider: fontProviders.google(),
      name: "Fira Code",
      cssVariable: "--font-fira",
      weights: [400, 500],
      fallbacks: [
        "ui-monospace",
        "SF mono",
        "SFMono-Regular",
        "Menlo",
        "Consolas",
        "monospace",
      ],
    },
  ],
});
