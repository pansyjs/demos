import { defineConfig } from '@umijs/max';

export default defineConfig({
  mfsu: false,
  extraBabelPresets: ['@emotion/babel-preset-css-prop'],
  qiankun: {
    slave: {},
  },
})
