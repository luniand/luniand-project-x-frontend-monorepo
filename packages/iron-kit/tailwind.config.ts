import ironKitPresetConfig from "./src/runtime/configs/preset";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/**/*.vue"],
  theme: {
    extend: {},
  },
  plugins: [ironKitPresetConfig()],
};
