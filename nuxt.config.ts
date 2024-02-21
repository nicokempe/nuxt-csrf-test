import { type NuxtConfig } from '@nuxt/types';

const config: NuxtConfig = {
  devtools: { enabled: true },

  modules: [
    "nuxt-csurf",
  ],

  csurf: {
    https: process.env.NODE_ENV === 'production', // not https at the moment (development)
    cookieKey: 'csrf', // not https at the moment (development)
    cookie: { // CookieSerializeOptions
      path: '/',
      httpOnly: true,
      sameSite: 'strict',
      secure: process.env.NODE_ENV === 'production', // not https at the moment (development)
    },
    methodsToProtect: ['POST', 'PUT', 'PATCH', 'DELETE'], // i have added DELETE
    encryptAlgorithm: 'AES-CBC', // i am on serverless (cloudflare pages)
    addCsrfTokenToEventCtx: true // to run useCsrfFetch on server
  },

  typescript: {
    types: ['@nuxt/types']
  }
};

export default config;
