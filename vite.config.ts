// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Choose the deploy target via NITRO_PRESET.
// - On Vercel we build with the `vercel` preset (Build Output API v3 -> .vercel/output).
// - Everywhere else (incl. the Lovable sandbox) we keep the default Cloudflare module preset.
const preset = process.env.NITRO_PRESET ?? "cloudflare-module";
const isVercel = preset === "vercel";

export default defineConfig({
  // Force-enable the Nitro deploy plugin and select the preset.
  nitro: isVercel
    ? {
        preset: "vercel",
        // Use Nitro's canonical Vercel output layout so Vercel auto-detects the build.
        output: {
          dir: "{{ rootDir }}/.vercel/output",
          serverDir: "{{ output.dir }}/functions/__server.func",
          publicDir: "{{ output.dir }}/static/{{ baseURL }}",
        },
      }
    : { preset },
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
});
