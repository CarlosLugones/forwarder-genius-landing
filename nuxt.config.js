const title = 'Forwarder Genius'
const description = 'Forward messages in Telegram automatically'
const image = 'https://forwarder.lugodev.com/img/cover.jpg'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Forwarder Genius | Forward messages in Telegram automatically',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'og:locale', content: 'en_US' },
      {
        hid: 'description',
        name: 'description',
        content: description
      },
      { hid: 'og:type', name: 'og:type', content: 'website' },
      {
        hid: 'og:site_name',
        name: 'og:site_name',
        content: title
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content: title
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: description
      },
      {
        hid: 'og:image',
        name: 'og:image',
        property: 'og:image',
        content: image
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        hid: 'twitter:image:alt',
        name: 'twitter:image:alt',
        content: title
      },
      { hid: 'twitter:site', name: 'twitter:site', content: '@lugodev' },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: title
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: description
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: image
      },
      {
        hid: 'twitter:creator',
        name: 'twitter:creator',
        content: '@lugodev'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicons/favicon.ico' },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/confetti', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/buefy
    'nuxt-buefy',
    'nuxt-rfg-icon'
  ],

  'rfg-icon': {
    static: true,
    staticPath: 'favicons',
    masterPicture: 'static/img/favicon.png',
    rfg: {
      masterPicture: 'static/img/favicon.png',
      iconsPath: '/',
      design: {
        ios: {
          pictureAspect: 'noChange',
          assets: {
            ios6AndPriorIcons: false,
            ios7AndLaterIcons: false,
            precomposedIcons: false,
            declareOnlyDefaultIcon: true
          }
        },
        desktopBrowser: {},
        windows: {
          pictureAspect: 'noChange',
          backgroundColor: '#2D1C3C',
          onConflict: 'override',
          assets: {
            windows80Ie10Tile: false,
            windows10Ie11EdgeTiles: {
              small: false,
              medium: true,
              big: false,
              rectangle: false
            }
          }
        },
        androidChrome: {
          pictureAspect: 'shadow',
          themeColor: '#2D1C3C',
          manifest: {
            name: 'Forwarder Genius',
            startUrl: 'https://forwarder.lugodev.com',
            display: 'standalone',
            orientation: 'notSet',
            onConflict: 'override',
            declared: true
          },
          assets: {
            legacyIcon: true,
            lowResolutionIcons: false
          }
        },
        safariPinnedTab: {
          pictureAspect: 'blackAndWhite',
          threshold: 66.40625,
          themeColor: '#2D1C3C'
        }
      },
      settings: {
        compression: 3,
        scalingAlgorithm: 'Mitchell',
        errorOnImageTooSmall: false,
        readmeFile: true,
        htmlCodeFile: true,
        usePathAsIs: false
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
