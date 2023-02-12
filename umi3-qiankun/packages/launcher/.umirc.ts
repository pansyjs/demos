import { defineConfig } from 'umi';

export default defineConfig({
  base: '/launcher',
  publicPath: '/launcher/',
  runtimePublicPath: true,
  dynamicImport: {},
  qiankun: {
    master: {
      // 注册子应用信息
      apps: [
        {
          name: 'dashboard',
          entry: 'http://localhost:8771'
        },
        {
          name: 'map',
          entry: "http://localhost:8772"
        }
      ],
      prefetch: ['map'],
    },
  },
  routes: [
    {
      path: '/login',
      component: './login',
    },
    {
      path: '/dashboard',
      microApp: 'dashboard',
      microAppProps: {
        autoSetLoading: false,
      },
    },
    {
      path: '/map',
      microApp: 'map',
      microAppProps: {
        autoSetLoading: false,
      },
    },
  ]
})
