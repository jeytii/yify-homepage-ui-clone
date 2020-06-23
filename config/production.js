import { src, dest } from 'gulp'
import gulpLoadPlugins from 'gulp-load-plugins'
import streamSeries from 'stream-series'
import bsync from 'browser-sync'
import { source, dist, builds } from './paths'

const $ = gulpLoadPlugins()
const browserSync = bsync.create()

const html = () => (
	src(source.html)
		.pipe(streamSeries(styles(), scripts()))
		.pipe($.htmlmin({
			collapseWhitespace: true,
			processConditionalComments: true,
			removeComments: true,
			removeEmptyAttributes: true,
			removeScriptTypeAttributes: true,
			removeStyleLinkTypeAttributes: true,
			minifyCSS: true,
			minifyJS: {
				compress: { drop_console: true }
			}
		}))
		.pipe(dest(dist.prod.html))
)

const styles = () => (
	src(source.sass)
		.pipe($.plumber())
		.pipe($.sourcemaps.init())
		.pipe($.sass().on('error', $.sass.logError))
		.pipe($.purifycss(['./src/scripts/*.js', './src/*.html']))
		.pipe($.csso({ debug: true }))
		.pipe($.autoprefixer())
		.pipe($.sourcemaps.write('../styles'))
		.pipe(dest(dist.prod.sass))
)

const scripts = () => (
	src(source.js)
		.pipe($.plumber())
		.pipe($.sourcemaps.init())
		.pipe($.babel())
		.pipe($.uglify())
		.pipe($.sourcemaps.write('../scripts'))
		.pipe(dest(dist.prod.js))
)

const icons = () => (
	src(source.img)
		.pipe($.imagemin())
		.pipe(dest(dist.prod.img))
)

const serve = () => {
	browserSync.init({
		notify: false,
		server: { baseDir: ['./build'] }
	})
}

const size = () => (
	src(builds)
		.pipe($.size({
			showFiles: true,
			showTotal: false
		}))
)

export { html, icons, serve, size }