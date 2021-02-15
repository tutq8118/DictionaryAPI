const { task, src, dest, watch, series, parallel } = require('gulp');
const nodemon = require('gulp-nodemon');
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const named = require('vinyl-named');
const browserSync = require('browser-sync');
const del = require('del');
const cssnano = require('gulp-cssnano');

const isProd = process.env.NODE_ENV === 'production';

const WebpackConfig = {
	devtool: !isProd ? 'eval-source-map' : false,
	mode: !isProd ? 'development' : 'production',
	plugins: [
		new webpack.DefinePlugin({
			PRODUCTION: JSON.stringify(true),
		}),
	],
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
					},
				},
			},
		],
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx'],
	},
};

task('clean', (done) => {
	return del(['./public/css', './public/js']);
});

task('styles', () => {
	return src('./styles/styles.scss')
		.pipe(plumber())
		.pipe(sass())
		.pipe(cssnano())
		.pipe(dest('./public/css'));
});

task('scripts', () => {
	return src('./scripts/main.js')
		.pipe(plumber())
		.pipe(named())
		.pipe(webpackStream(WebpackConfig), webpack)
		.pipe(dest('./public/js'));
});

task('nodemon', function (cb) {
	var started = false;

	return nodemon({
		script: 'bin/www',
		ext: 'js pug',
		ignore: ['gulpfile.js', 'node_modules/', 'scripts'],
	}).on('start', function () {
		if (!started) {
			cb();
			started = true;
		}
	});
});

task(
	'browserSync',
	series('nodemon', function () {
		browserSync.init(null, {
			proxy: 'http://localhost:3000',
			files: ['./public/**/*'],
			port: 5000,
		});
	})
);

task('watch', (done) => {
	if (!isProd) {
		watch('./styles/**/*.scss', series('styles'));
		watch('./scripts/**/*.js', series('scripts'));

		done();
	}
});

task(
	'dev',
	series('clean', parallel('styles', 'scripts'), 'watch', 'browserSync')
);

task('build', series('clean', parallel('styles', 'scripts')));
