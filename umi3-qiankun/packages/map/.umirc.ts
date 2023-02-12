import { defineConfig } from 'umi';

export default defineConfig({
  base: '/map',
  publicPath: '/map/',
  runtimePublicPath: true,
  dynamicImport: {},
  qiankun: {
    slave: {}
  },
})
