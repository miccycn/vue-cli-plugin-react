module.exports = (api, projectOptions) => {
	api.chainWebpack(webpackConfig => {
		webpackConfig
			.entry('app')
			.delete('./src/main.js')
			.add('./src/index.js')
			.end();
	});

	api.registerCommand(
		'vueconf', {
			description: 'test',
			usage: 'vue-cli-service vueconf',
			options: {}
		},
		(args) => {
			console.log('测试输出projectOptions(包含pluginOptions)');
			console.log(projectOptions);
		}
	);
};