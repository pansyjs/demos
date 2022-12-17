import { defineConfig } from '@umijs/max';

export default defineConfig({
  extraBabelPresets: ['@emotion/babel-preset-css-prop'],
  mfsu: false,
  qiankun: {
    master: {
      apps: [
        {
          name: 'dashboard',
          entry: '//localhost:9101',
        },
      ],
    }
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/',
      component: '@/layouts/BasicLayout.tsx',
      routes: [
        {
          path: '/home',
          component: '@/pages/home',
        },
        {
          path: '/dashboard/*',
          microApp: 'dashboard',
        },
      ],
    },
  ],
})
