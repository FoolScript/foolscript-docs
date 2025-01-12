// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "FoolScript",
      social: {
        github: "https://github.com/sponsors/jtmuller5",
      },
      sidebar: [
        {
          label: "Overview",
          items: [
            { label: "Introduction", slug: "start/introduction" },
            { label: "Quick Start", slug: "start/quick-start" },
            { label: "App", slug: "start/app" },
            { label: "Admin App", slug: "start/admin-app" },
            { label: "Landing Page", slug: "start/landing-page" },
            { label: "CLI", slug: "start/cli" },
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
    }),
  ],
});
