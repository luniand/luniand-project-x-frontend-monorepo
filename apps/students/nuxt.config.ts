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
          content: "Road To Your Career Path As You Target.",
        },
      ],
    },
  },

  modules: ["nuxt-vuefire"],

  runtimeConfig: {
    public: {},
  },

  // setup firebase options
  vuefire: {
    auth: true,
    config: {
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      projectId: process.env.FIREBASE_PROJECT_ID,
      appId: process.env.FIREBASE_APP_ID,
    },
    admin: {
      serviceAccount: "./firebase.json",
    },
  },
});
