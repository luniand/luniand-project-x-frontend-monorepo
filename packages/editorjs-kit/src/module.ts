import { resolve } from "path";
import { fileURLToPath } from "url";
import { defineNuxtModule, addComponentsDir } from "@nuxt/kit";

export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "@luniand/editorjs-kit",
    configKey: "luniandEditorjsKit",
  },
  defaults: {},
  setup(_, nuxt) {
    const componentsDir = fileURLToPath(
      new URL("./runtime/components", import.meta.url)
    );
    const cssDir = fileURLToPath(
      new URL("./runtime/assets/css", import.meta.url)
    );

    addComponentsDir({
      path: componentsDir,
    });

    nuxt.options.css.push(resolve(cssDir, "editor.css"));
  },
});
