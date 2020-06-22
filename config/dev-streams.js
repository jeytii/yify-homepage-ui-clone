import { src, dest, watch, parallel } from 'gulp'
import gulpLoadPlugins from 'gulp-load-plugins'
import streamSeries from 'stream-series'
import bs from 'browser-sync'
import { source, dist, watches } from './paths'

const $ = gulpLoadPlugins()
const browserSync = bs.create()

const html = () => (
	src(source.html)
		.pipe(streamSeries(styles(), scripts()))
		.pipe(dest(dist.dev.html))
)

const styles = () => (
	src(source.sass)
		.pipe($.plumber())
		.pipe($.sass({
			outputStyle: 'expanded'
		}).on('error', $.sass.logError))
		.pipe($.purifycss(['./src/scripts/*.js', './src/*.html']))
		.pipe($.autoprefixer())
		.pipe(dest(dist.dev.sass))
		.pipe(browserSync.stream())
)

const scripts = () => (
	src(source.js)
		.pipe($.plumber())
		.pipe($.babel())
		.pipe(dest(dist.dev.js))
)

const scriptsWatch = done => {
	browserSync.reload()
	done()
}

const icons = () => (
	src(source.img)
		.pipe(dest(dist.dev.img))
)

const serve = () => {
	const files = [ watches.html, watches.img ]

	browserSync.init({
		notify: false,
		server: { baseDir: ['./.tmp'] }
	})

	watch(source.html, parallel(html))
	watch(watches.sass, parallel(styles))
	watch(watches.js, parallel(scripts, scriptsWatch))
	watch(watches.img, parallel(icons))
	watch(files).on('change', browserSync.reload)
}

export { html, icons, serve }