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
        { label: "FoolScript", slug: "foolscript" },
        {
          label: "Template",
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
                { label: "PostHog", slug: "integrations/posthog" },
                { label: "RevenueCat", slug: "integrations/revenuecat" },
              ],
            },
          ],
        },

        {
          label: "Playbooks",
          items: [
            { label: "Mobile App", slug: "playbook/app" },
            { label: "Landing Page", slug: "playbook/landing-page" },
          ],
        },
      ],
    }),
    mdx(),
  ],
});
