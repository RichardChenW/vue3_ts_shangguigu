import { defineConfig } from 'vite';
import { UserConfigExport, ConfigEnv } from 'vite';
import { viteMockServe } from 'vite-plugin-mock';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default ({ command }: ConfigEnv): UserConfigExport => {
  return {
    plugins: [
      vue(),
      // viteMockServe({
      //   mockPath: 'mock',
      //   localEnabled: command === 'serve',
      //   enable : true,
      // }),
    ],
    resolve: {
      alias: {
        '@': path.resolve('./src'), // 相对路径配置，使用 @ 代替 src
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          javascriptEnabled: true,
          additionalData: '@import "./src/styles/variable.scss";',
        },
      },
    },
  };
};
