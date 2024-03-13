import { defineConfig } from 'vite';
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import autoprefixer from 'autoprefixer';
import postCssPxToRem from 'postcss-pxtorem';
import legacy from '@vitejs/plugin-legacy';
import { visualizer } from 'rollup-plugin-visualizer';
import { compression } from 'vite-plugin-compression2';

// 已经在App.tsx文件中做了切换自定哦主题的操作，所以不在vite.config文件中进行配置

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		vueJsx(),
		compression(),
		legacy({
			targets: ['defaults', 'not IE 11'],
		}),
		visualizer({
			emitFile: false,
			filename: 'stats.html', //分析图生成的文件名
			// open: true, //自动展示
		}),
	],

	// 配置基本公共路径
	base: './',

	resolve: {
		alias: {
			// 设置路径别名
			'@': resolve(__dirname, './src'),
		},
	},

	optimizeDeps: {
		include: ['some-dep'], // 强制预构建依赖
	},

	css: {
		postcss: {
			plugins: [
				autoprefixer({
					overrideBrowserslist: [
						'Android 4.1',
						'iOS 7.1',
						'Chrome > 31',
						'ff > 31',
						'ie >= 8',
					],
				}),
				postCssPxToRem({
					rootValue: 192, // 设计稿宽度的1/10，根据实际设计稿调整
					propList: ['*'], // 可以从px更改为rem的属性
					selectorBlackList: ['norem'], // 过滤掉以'norem'开头的class不转换
					exclude: /node_modules/i, // 排除node_modules内的文件
					mediaQuery: false, // 允许在媒体查询中转换px
					minPixelValue: 0, // 设置要替换的最小像素值
					replace: true, // 替换包含rems的规则，而不是添加fallback
					unitPrecision: 5, // 允许REM单位增长到的十进制数字
				}),
			],
		},
	},

	build: {
		// 生产环境构建配置
		terserOptions: {
			compress: {
				drop_console: true, // 去除 console
				drop_debugger: true, // 去除 debugger
			},
		},
		emptyOutDir: true, // 构建前清空输出目录
		cssCodeSplit: true, // 启用 CSS 代码拆分
		sourcemap: false, // 生产环境关闭 source map
		rollupOptions: {
			output: {
				chunkFileNames: 'js/[name]-[hash].js',
				entryFileNames: 'js/[name]-[hash:8].js',
				assetFileNames: '[ext]/[name]-[hash].[ext]',
				manualChunks(id: string | string[]) {
					if (id.includes('node_modules')) {
						// 捕获并分析模块ID，基于库名进行更细致的分割
						const modules = id.toString().split('node_modules/')[1];
						const name = modules.split('/')[0].toString();
						return `vendor/${name}`; // 按库名分割到不同的vendor文件中
					}
				},
			},
		},
		outDir: 'dist',
	},
});
