// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width,initial-scale=1",
      title: "Luniand | Road To Your Career Path",
      titleTemplate: "%s - Luniand",
      meta: [
        {
          name: "description",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
      ],
    },
  },

  // modules: ["luniand-nuxt3-kit"],

  runtimeConfig: {
    // Private config that is only available on the server
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
    // Config within public will be also exposed to the client
    public: {
      FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
      FIREBASE_AUTH_COOKIE: {
        name: "luniand",
        lifetime: 60 * 60 * 8,
        domain: "",
        path: "/",
        sameSite: "lax",
      },
    },
  },
});
