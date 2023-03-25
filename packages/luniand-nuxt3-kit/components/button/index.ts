import { defineComponent, h } from "@vue/runtime-core";

export const Button = defineComponent({
  name: "Button",
  setup(_, { slots }) {
    const baseStyled = {
      border: "none",
      padding: "10px 20px",
      background: "blue",
      color: "white",
      "border-radius": "5px",
    };

    return () =>
      h(
        "button",
        {
          style: {
            ...baseStyled,
          },
        },
        slots
      );
  },
});

export default Button;
