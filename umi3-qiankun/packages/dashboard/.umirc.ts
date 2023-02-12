import { defineConfig } from 'umi';

export default defineConfig({
  base: '/dashboard',
  publicPath: '/dashboard/',
  runtimePublicPath: true,
  dynamicImport: {},
  qiankun: {
    slave: {}
  },
})
