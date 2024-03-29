import colors from 'vuetify/es5/util/colors'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - ssi-frontend',
    title: 'ssi-frontend',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''},
      {name: 'format-detection', content: 'telephone=no'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],
  i18n: {
    locales: [
      {
        code: 'it',
        slug: 'it-IT',
        file: 'it.js',
      },
      {
        code: 'en',
        slug: 'en-EN',
        file: 'en.js',
      },
    ],
    lazy: true,
    langDir: 'locales/',
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    [
      'nuxt-i18n',
      {
        detectBrowserLanguage: {
          useCookie: true,
          cookieKey: 'monokee-system-language',
          alwaysRedirect: true,
          fallbackLocale: 'en',
        },
        vuex: {
          moduleName: 'i18n',
          syncLocale: true,
          syncMessages: true,
          syncRouteParams: true,
        },
        onLanguageSwitched: (previous, current) => {
          if (process.client) {
            const DATE = new Date()
            DATE.setTime(DATE.getTime() + 365 * 24 * 3600 * 1000)
            document.cookie =
              'monokee-system-language=' +
              current +
              '; path=/; expires=' +
              DATE.toUTCString()
          }
        },
      },
    ],
  ],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {

    customVariables: ['~/assets/variables.scss'],
    theme: {
      options: {customProperties: true},
      dark: false,
      light: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        },
        light: {
          primary: {
            base: '#3CD4A0',
            darken1: '#30c593',
          },
          secondary: '#ffffff',
          info: {
            base: '#6E6E6E',
            darken1: '#'
          }

        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // Add exception
    transpile: [
      "vee-validate/dist/rules"
    ],
    /*
      ** You can extend webpack config here
      */
    extend(config, ctx) {
      // ...
    }
  }
}
