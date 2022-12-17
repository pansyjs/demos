import { defineConfig } from '@umijs/max';

export default defineConfig({
  qiankun: {
    master: {
      apps: [
        {
          name: 'dashboard',
          entry: '//localhost:9201',
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
