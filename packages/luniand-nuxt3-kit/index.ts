import { defineNuxtModule } from "@nuxt/kit";
import { join } from "path";

export default defineNuxtModule({
  setup(_, nuxt) {
    nuxt.hook("components:dirs", (dirs) => {
      dirs.push({
        path: join(__dirname, "components"),
        prefix: "lu",
      });
    });
  },
});
