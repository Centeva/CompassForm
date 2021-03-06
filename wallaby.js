var wallabyWebpack = require('wallaby-webpack');
var path = require('path');

var compilerOptions = Object.assign(require('./tsconfig.json').compilerOptions, require('./src/tsconfig.spec.json').compilerOptions);

compilerOptions.module = 'CommonJs';

module.exports = function(wallaby) {
	var webpackPostprocessor = wallabyWebpack({
		entryPatterns: ['projects/compass-form/src/**/*spec.js'],

		module: {
			rules: [
				{ test: /\.css$/, loader: ['raw-loader'] },
				{ test: /\.html$/, loader: 'raw-loader' },
				{ test: /\.ts$/, loader: '@ngtools/webpack', include: /node_modules/, query: { tsConfigPath: 'tsconfig.json' } },
				{ test: /\.js$/, loader: 'angular2-template-loader', exclude: /node_modules/ },
				{ test: /\.styl$/, loaders: ['raw-loader', 'stylus-loader'] },
				{ test: /\.less$/, loaders: ['raw-loader', { loader: 'less-loader', options: { paths: [__dirname] } }] },
				{ test: /\.scss$|\.sass$/, loaders: ['raw-loader', 'sass-loader'] },
				{ test: /\.(jpg|png|svg)$/, loader: 'url-loader?limit=128000' },
			],
		},

		resolve: {
			extensions: ['.js', '.ts'],

		},
	});

	return {
		files: [
			{ pattern: 'projects/compass-form/src/**/*.+(ts|css|less|scss|sass|styl|html|json|svg)', load: false },
			{ pattern: 'projects/compass-form/src/**/*.d.ts', ignore: true },
			{ pattern: 'projects/compass-form/src/**/*spec.ts', ignore: true },
		],

		tests: [{ pattern: 'projects/compass-form/src/**/*spec.ts', load: false }, { pattern: 'projects/compass-form/src/**/*e2e-spec.ts', ignore: true }],

		testFramework: 'jasmine',

		compilers: {
			'**/*.ts': wallaby.compilers.typeScript(compilerOptions),
		},

		env: {
			kind: 'electron',
		},

		postprocessor: webpackPostprocessor,

		setup: function() {
			window.__moduleBundler.loadTests();
		},

		debug: true,
	};
};
