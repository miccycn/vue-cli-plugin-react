const utils = require('../utils');

module.exports = (api, option, rootOptions) => {
	// 扩展 package.json
	api.extendPackage({
		dependencies: {
			"react": "^16.0.0",
			"react-dom": "^16.0.0"
		},
		devDependencies: {
			"babel-preset-react-app": "^6.0.0"
		},
		eslintConfig: {
			"extends": [
				"plugin:react/recommended",
			]
		},
		scripts: {
			"vueconf": "vue-cli-service vueconf"
		},
	});
	// 渲染模板
	api.render('./template', {
		...option,
	});

	// 修改 babel.config.js
	api.postProcessFiles(files => {
		const babelConfigRaw = files['babel.config.js'];
		if (babelConfigRaw) {
			files['babel.config.js'] = utils.MergePresets(babelConfigRaw, 'react-app');
		}
	});
};