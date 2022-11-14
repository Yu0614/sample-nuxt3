// https://v3.nuxtjs.org/api/configuration/nuxt.config

const headTitle = `Sample-nuxt3`

export default defineNuxtConfig({
  rootDir: 'app/',
  workspaceDir: 'app/',

  runtimeConfig: {
    public: {
      headTitleBase: headTitle
    }
  },

  app: {
    head: {
      charset: 'utf-8',
      title: headTitle,
      meta: [{ name: headTitle, content: headTitle }]
    }
  },

  //css

  postcss: {
    plugins: { tailwindcss: {}, autoprefixer: {} }
  },
  css: ['@/assets/styles/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import "@/assets/styles/_variables.scss";
            @import "@/assets/styles/_mixins.scss";
          `
        }
      }
    }
  }
})
