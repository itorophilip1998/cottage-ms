export default {
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-headadd .

  router: {
    scrollBehavior: async function (to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition;
      }
      const findEl = async (hash, x = 0) => {
        return (
          document.querySelector(hash) ||
          new Promise(resolve => {
            if (x > 50) {
              return resolve(document.querySelector("#app"));
            }
            setTimeout(() => {
              resolve(findEl(hash, ++x || 1));
            }, 100);
          })
        );
      };

      if (to.hash) {
        let el = await findEl(to.hash);
        if ("scrollBehavior" in document.documentElement.style) {
          return window.scrollTo({ top: el.offsetTop, behavior: "smooth" });
        } else {
          return window.scrollTo(0, el.offsetTop);
        }
      }

      return { x: 0, y: 0 };
    }
  },
  head: {
    title: 'cottage-patient',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/logo.jpeg' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "@/assets/css/style.css",
    "@/assets/font-awesome/css/font-awesome.css",

  ],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    meta: {
      title: 'PatientMS- 2021',
      author: 'PatientMS - 2021',
    },
    icon: {
      fileName: 'logo.jpeg',
    },
    manifest: {
      name: 'Cottage Hopital Ukana',
      short_name: 'PatientMS',
      lang: 'en',
      display: 'standalone',
      start_url: '/',
      useWebmanifestExtension: false,
      description: 'Cottage Hopital Ukana',
      background_color: "#0d6efd",
      theme_color: "#0d6efd",
      splash_pages: "/"

    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
