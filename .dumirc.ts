import { defineConfig } from 'dumi';

export default defineConfig({
  apiParser: {},
  base: '/docs/',
  publicPath: '/docs/',
  resolve: {
    // 配置入口文件路径，API 解析将从这里开始
    entryFile: './src/index.ts',
  },
  favicons: [
    // 此时将指向 `/favicon.png` ，确保你的项目含有 `public/favicon.png`
    '/logo.jpg'
  ],
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'Tita Design Mobile',
    logo: '/logo.jpg',
    footer: false,
    showLineNum: true,
    hd: {
      rules: [],
    },
  },
});
