export default {
  target: 'static',
  head: {
    titleTemplate: 'AGS1130 | %s',
    link: [
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/light-mode/apple-touch-icon.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/light-mode/favicon-32x32.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/light-mode/favicon-16x16.png'
      },
      {
        rel: 'mask-icon',
        href: '/light-mode/safari-pinned-tab.svg',
        color: '#000000'
      },
      { rel: 'manifest', href: '/light-mode/site.webmanifest' }
    ],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'msapplication-TileColor', content: '#ffffff' },
      { name: 'theme-color', content: '#ffffff' }
    ]
  },
  components: {
    dirs: ['~/components/global', '~/components/view']
  },
  buildModules: ['nuxt-vite', '@nuxtjs/tailwindcss'],
  modules: ['@nuxt/content'],
  build: {
    postcss: {
      plugins: {
        cssnano: {
          preset: 'advanced',
          discardComments: { removeAll: true }
        },
        'postcss-nested': {}
      },
      preset: {
        autoprefixer: {},
        features: {
          // Fixes: https://github.com/tailwindcss/tailwindcss/issues/1190#issuecomment-546621554
          'focus-within-pseudo-class': false
        }
      }
    }
  }
}
