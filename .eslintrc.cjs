module.exports = {
	env: {
		node: true,
		es2021: true,
	},
	extends: [
		'plugin:vue/vue3-recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier',
	],
	parserOptions: {
		ecmaVersion: 12,
		parser: '@typescript-eslint/parser',
		sourceType: 'module',
	},
	plugins: ['vue', '@typescript-eslint'],
	rules: {
		// 使用 Tab 进行缩进
		indent: ['error', 'tab'],
		'vue/html-indent': ['error', 'tab'], // Vue 模板缩进使用 Tab
		quotes: ['error', 'single'], // 强制使用单引号
		semi: ['error', 'always'], // 要求在语句末尾使用分号
		'no-unused-vars': 'warn', // 未使用的变量警告
		'no-console': 'warn', // 使用 console 的地方警告（用于生产环境移除）
		'vue/no-unused-components': 'warn', // 未使用的 Vue 组件警告
		'vue/multi-word-component-names': 'off', // 关闭多单词组件名的强制要求

		// TypeScript 相关规则
		'@typescript-eslint/explicit-function-return-type': 'off', // 关闭函数返回类型的显式要求
		'@typescript-eslint/no-explicit-any': 'warn', // 使用 any 类型警告
		'@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }], // 允许未使用的变量，但要以 _ 开头
		'@typescript-eslint/explicit-function-return-type': [
			'error',
			{
				allowExpressions: true, // 允许没有返回类型的函数表达式
				allowTypedFunctionExpressions: true, // 允许类型化的函数表达式没有返回类型
			},
		],

		// 最佳实践
		'prefer-const': 'error', // 如果变量从未重新赋值，使用 const 声明
		'no-var': 'error', // 要求使用 let 或 const 不要用 var

		// 防止错误
		eqeqeq: ['error', 'always'], // 要求使用 === 和 !==
	},
};
