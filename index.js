module.exports = (api, projectOptions) => {
	api.chainWebpack(webpackConfig => {
		webpackConfig
			.entry('app')
			.delete('./src/main.js')
			.add('./src/index.js')
			.end();
	});
};