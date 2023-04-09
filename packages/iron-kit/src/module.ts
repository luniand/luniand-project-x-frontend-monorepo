import { defineNuxtModule } from "@nuxt/kit";
import { fileURLToPath } from "node:url";

// Module options TypeScript interface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "@luniand/iron-kit",
    configKey: "luniandIronKit",
    compatibility: {
      nuxt: "^3.0.0-rc.1",
    },
  },
  defaults: {
    prefix: "Lu",
  },
  async setup(options, nuxt) {
    // nuxt install into hooks
    nuxt.hook("components:dirs", (dirs) => {
      dirs.push({
        path: fileURLToPath(new URL("./runtime/components", import.meta.url)),
        extensions: ["vue"],
        prefix: "Lu",
        pathPrefix: false,
      });
    });
  },
});
