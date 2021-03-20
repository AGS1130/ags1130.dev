export default {
  target: "static",
  head: {
    titleTemplate: "AGS1130 | %s",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
  },
  components: {
    dirs: ["~/components/global", "~/components/view"],
  },
  buildModules: ["nuxt-vite", "@nuxtjs/tailwindcss"],
  modules: ["@nuxt/content"],
  build: {
    postcss: {
      plugins: {
        cssnano: {
          preset: "advanced",
          discardComments: { removeAll: true },
        },
        "postcss-nested": {},
      },
      preset: {
        autoprefixer: {},
        features: {
          // Fixes: https://github.com/tailwindcss/tailwindcss/issues/1190#issuecomment-546621554
          "focus-within-pseudo-class": false,
        },
      },
    },
  },
};
