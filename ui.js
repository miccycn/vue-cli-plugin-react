module.exports = api => {
	api.describeConfig({
		id: 'vueconf.demo',
		name: 'vueconf',
		files: {
			vue: {
				js: ['vue.config.js']
			}
		},
		onRead: ({
			data
		}) => {
			return {
				prompts: [{
						name: 'themeColor',
						type: 'color',
						message: '选择一种配置的颜色',
						default: '#4DBA87',
						value: data.vue.pluginOptions && data.vue.pluginOptions.vueconf && data.vue.pluginOptions.vueconf.themeColor
					},
					{
						name: 'welcome',
						type: 'input',
						message: '项目介绍',
						description: '请输入这个项目的介绍',
						default: 'Learn React',
						value: data.vue.pluginOptions && data.vue.pluginOptions.vueconf && data.vue.pluginOptions.vueconf.welcome
					}
				]
			}
		},
		onWrite: async ({
			api,
			prompts
		}) => {
			const result = {}
			for (const prompt of prompts) {
				result[`pluginOptions.vueconf.${prompt.id}`] = await api.getAnswer(prompt.id)
			}
			api.setData('vue', result)
		}
	})
}