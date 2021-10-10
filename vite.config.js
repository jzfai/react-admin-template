import reactRefresh from '@vitejs/plugin-react-refresh'
import path, { resolve } from 'path'
import viteSvgIcons from 'vite-plugin-svg-icons'
import legacy from '@vitejs/plugin-legacy'
//mock
import { viteMockServe } from 'vite-plugin-mock'
import settings from './src/settings'
const prodMock = settings.openProdMock
export default ({ command }) => {
  return {
    base: './',
    define: {
      'process.platform': null,
      'process.version': null
    },
    clearScreen: false,
    server: {
      hmr: { overlay: false }, // 禁用或配置 HMR 连接 设置 server.hmr.overlay 为 false 可以禁用服务器错误遮罩层
      // 服务配置
      port: 5005, // 类型： number 指定服务器端口;
      open: false, // 类型： boolean | string在服务器启动时自动在浏览器中打开应用程序；
      cors: true // 类型： boolean | CorsOptions 为开发服务器配置 CORS。默认启用并允许任何源
      // proxy: {
      //   // 类型： Record<string, string | ProxyOp 为开发服务器配置自定义代理规则
      //   '/scala-ms': {
      //     target: 'http://shangchai.intranet.ruixiude.com:15980/',
      //     changeOrigin: true,
      //     secure: false
      //   }
      // }
    },
    plugins: [
      reactRefresh(),
      legacy({
        targets: ['ie >= 11'],
        additionalLegacyPolyfills: ['regenerator-runtime/runtime']
      }),
      viteSvgIcons({
        // 指定需要缓存的图标文件夹（可以配置多个）
        iconDirs: [path.resolve(process.cwd(), 'src/icons/common'), path.resolve(process.cwd(), 'src/icons/nav-bar')],
        // 指定symbolId格式
        symbolId: 'icon-[dir]-[name]'
      }),
      //https://blog.csdn.net/weixin_42067720/article/details/115579817
      viteMockServe({
        supportTs: false,
        mockPath: 'mock',
        localEnabled: command === 'serve',
        prodEnabled: prodMock,
        injectCode: `
          import { setupProdMockServer } from './mockProdServer';
          setupProdMockServer();
        `,
        logger: true
      })
    ],

    build: {
      minify: 'terser',
      brotliSize: false,
      // 消除打包大小超过500kb警告
      chunkSizeWarningLimit: 2000,
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true
        }
      }
    },
    css: {
      preprocessorOptions: {
        //define global scss variable
        scss: {
          additionalData: `@import "@/styles/variables.scss";`
        }
      }
    },
    resolve: {
      alias: {
        '~': resolve(__dirname, './'),
        '@': resolve(__dirname, 'src')
      },
      extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.mjs']
    }
  }
}
