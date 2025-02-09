// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "FoolScript",
      social: {
        github: "https://github.com/sponsors/jtmuller5",
      },
      logo: {
        src: "./src/assets/joker.svg",
      },
      customCss: ["./src/styles/custom.css"],
      sidebar: [
        {
          label: "FoolScript",
          items: [
            { label: "Introduction", slug: "foolscript/introduction" },
            { label: "Installation", slug: "foolscript/installation" },
          ],
        },
        {
          label: "Prompts",
          items: [
            { label: "Fool's Print", slug: "prompts/print" },
            { label: "Fool's Types", slug: "prompts/types" },
            { label: "Fool's Variables", slug: "prompts/variables" },
            { label: "Fool's Logic", slug: "prompts/logic" },
            { label: "Fool's Enums", slug: "prompts/enums" },
            { label: "Fool's Functions", slug: "prompts/functions" },
            { label: "Fool's Boolean", slug: "prompts/boolean" },
            { label: "Fool's CLI", slug: "prompts/cli" },
          ],
        },
        /* {
          label: "Playbooks",
          items: [
            { label: "Flutter App", slug: "playbook/app" },
            { label: "Landing Page", slug: "playbook/landing-page" },
          ],
        },
        {
          label: "Starters",
          items: [
            { label: "Dart", slug: "starters/dart" },
            { label: "TypeScript", slug: "starters/typescript" },
            { label: "Python", slug: "starters/python" },
          ],
        },
        {
          label: "Template",
          badge: "New",
          collapsed: true,
          items: [
            { label: "Introduction", slug: "template/introduction" },
            { label: "Quick Start", slug: "template/quick-start" },
            {
              label: "Components",
              items: [
                { label: "App", slug: "template/components/app" },
                { label: "Admin App", slug: "template/components/admin-app" },
                { label: "Landing Page", slug: "template/components/landing-page" },
              ],
            },
            {
              label: "Platforms",
              items: [
                { label: "Firebase", slug: "platforms/firebase" },
                { label: "Supabase", slug: "platforms/supabase" },
                { label: "PocketBase", slug: "platforms/pocketbase" },
                { label: "AppWrite", slug: "platforms/appwrite" },
              ],
            },
            {
              label: "Integrations",
              items: [
                { label: "Amplitude", slug: "integrations/amplitude" },
               
                { label: "RevenueCat", slug: "integrations/revenuecat" },
              ],
            },
          ],
        }, */
      ],
    }),
    mdx(),
  ],
});
