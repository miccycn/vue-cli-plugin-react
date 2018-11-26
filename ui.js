module.exports = api => {
	api.describeConfig({
		// 唯一的配置 ID
		id: 'vueconf.demo',
		// 展示名称
		name: 'vueconf',
		// 该配置所有可能的文件
		files: {
			vue: {
				js: ['vue.config.js']
			}
		}
	})
}