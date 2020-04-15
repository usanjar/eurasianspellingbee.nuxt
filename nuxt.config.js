module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'eurasianspellingbee.nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '/css/bootstrap.min.css' },
      { rel: 'stylesheet', href: '/css/style.css' },
      { rel: 'stylesheet', href: '/css/media.css' },
      { rel: 'stylesheet', href: '/css/animate.css' },
    ],
    script: [
      { src: "/js/jquary.js", type: "text/javascript" },
      { src: "/js/bootstrap.min.js", type: "text/javascript" },
      { src: "/js/wow.min.js", type: "text/javascript" },
      { src: "/js/wow.min.js", type: "text/javascript" },
      { src: "/js/main.js", type: "text/javascript" },
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

