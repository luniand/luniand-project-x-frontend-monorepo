import type { ThemeParams } from "../../composables";

export default {
  classes: {
    wrapper: "inline-block",
  },

  styles({ props, colors, css }: ThemeParams) {
    const color = colors.getPalette(props.color);

    return css.get("bg", color[500]);
  },
};
