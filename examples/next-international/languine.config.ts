import { defineConfig } from "languine";

export default defineConfig({
  projectId: "prj_q6gs5qsa091c2ex3ucdhjd95",
  locale: {
    source: "en",
    targets: ["sv", "de"],
  },
  files: {
    ts: {
      include: ["locales/[locale].ts"],
    },
  },
});
